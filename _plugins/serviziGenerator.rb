#!/usr/bin/env ruby
require 'json'
require 'down'
require 'yaml'

isDevMode = ENV['JEKYLL_ENV']=='production' ? false : true
downloadUrl = "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/output_elenco_servizi.json"

begin
  # DOWLOAD DATA FROM REPO
  fileitem = Down.download(downloadUrl, open_timeout: 15)
rescue
    # fallback in case we cannot download the source file
    raise "File unreachable"
end

def groupServices(services, pspConfig)
  services_grouped = {}
  pspConfig.each do |pspItem, pspItemValue|
    services_perItem = []
    pspItemValue['condition'].each do |condition|
      services_selected_by_condition = services.select{|item| item[condition]==true and item['canale_mod_pag_code'] < 3 }
      if services_selected_by_condition.size > 0
        services_perItem.concat services_selected_by_condition
      end
    end
    next if services_perItem.size < 1
    services_grouped[pspItem] = services_perItem.size == 0 ? [] : services_perItem.group_by{|h| h[pspItemValue['group_by']] }
  end

  return services_grouped
end

Jekyll::Hooks.register :site, :after_init do |site|

  pspdir = "_pspservizi"
  jsondir = "assets/jsonpsp"
  pspConfig = YAML.load_file('_data/psp-metodi.yml')

  data_hash = JSON.parse(fileitem.read)
  # PSP listed in a graph
  psp_dict = data_hash['content'].group_by{|h| h['codice_abi']}
  # Stuffs arranged by tipo_vers_cod
  psp_by_method = {}

  psp_dict.each_with_index do |(key, value), index|
    # every item of the hash as a specific set of info duplicated, so we can use the first one
    element = value[0]
    name = element['codice_abi']
    front_matter = Hash.new
    front_matter['layout'] = 'psp'
    front_matter['ref'] = element['codice_abi']
    front_matter['title'] = element['psp_rag_soc']
    front_matter['lang'] = 'it'
    front_matter['child_of_ref'] = 'prestatori-servizi-di-pagamento-elenco-psp-attivi'
    front_matter['omit_pagehead'] = true
    front_matter['url_informazioni_psp'] = element['url_informazioni_psp']
    front_matter['services'] = groupServices(value, pspConfig)
    next if front_matter['services'].empty? or name==''

    # Let's create a markdown page
    File.open(pspdir + '/' + name.to_s + ".md", "w") { |file| file.write(
      front_matter.to_yaml + '---' + '
      '
    ) }
  end

end