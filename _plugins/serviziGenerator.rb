#!/usr/bin/env ruby
require 'json'
require 'down'

isDevMode = ENV['JEKYLL_ENV']=='production' ? false : true
downloadUrl = "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/output_elenco_servizi.json"

begin
  # DOWLOAD DATA FROM REPO
  fileitem = Down.download(downloadUrl, open_timeout: 15)
rescue
    # fallback in case we cannot download the source file
    raise "File unreachable"
end

Jekyll::Hooks.register :site, :pre_render do |site|

  pspdir = "_pspservizi"
  jsondir = "assets/jsonpsp"

  data_hash = JSON.parse(fileitem.read)
  # PSP listed in a graph
  psp_dict = {}
  # Stuffs arranged by tipo_vers_cod
  psp_by_method = {}

  data_hash['content'].each_with_index do |item, index|
    # Let's create a dict of PSP to arrange data by a graph instead a flat structure
    next if item['is_duplicated'] == true || item['codice_abi'] == nil

    # Useful to generate a single page PSP
    if psp_dict.key?(item['codice_abi'])
      psp_dict[item['codice_abi']].push(item)
    else
      psp_dict[item['codice_abi']] = []
      psp_dict[item['codice_abi']].push(item)
    end

    # Useful to generate N json for N pay methods (aka tipo_vers_cod)
    if psp_by_method.key?(item['tipo_vers_cod'])
      psp_by_method[item['tipo_vers_cod']].push(item)
    else
      psp_by_method[item['tipo_vers_cod']] = []
      psp_by_method[item['tipo_vers_cod']].push(item)
    end

    # If in DEV mode we can skip a lot of computation...
    if isDevMode && psp_dict.size > 20
      puts "+++++ DEV MODE: only 20 PSP catched +++++++"
      break
    end
  end

  # Create a new md file for every psp
  psp_dict.each do |key, value|
    # every item of the hash as a specific set of info suplicated, so we can use the first one
    element = value[0]
    name = element['codice_abi']
    front_matter = Hash.new
    front_matter['layout'] = 'page'
    front_matter['ref'] = element['codice_abi']
    front_matter['title'] = element['psp_rag_soc']
    front_matter['lang'] = 'it'
    front_matter['child_of_ref'] = 'prestatori-servizi-di-pagamento-elenco-psp-attivi'
    front_matter['omit_pagehead'] = true
    front_matter['url_informazioni_psp'] = element['url_informazioni_psp']
    front_matter['services'] = value
    # Let's create a markdown page
    File.open(pspdir + '/' + name.to_s + ".md", "w") { |file| file.write(
      front_matter.to_yaml + '---' + '
      {% include psp-servizi.html %}
      '
    ) }
  end

  # Create a json file for every "payment method"
  psp_by_method.each do |key, value|
    File.write('assets/jsonpsp/'+ key.downcase + '.json', JSON.dump(value))
  end

end