#!/usr/bin/env ruby
require 'json'
require 'down'

#downloadHost = "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/"
#downloadFiles = "output_elenco_servizi.json"

Jekyll::Hooks.register :site, :after_init do |doc, payload|

=begin
  # DOWLOAD DATA FROM REPO
  begin
    dirname = "_data/"
    fileitem = Down.download(downloadHost + fileName, open_timeout: 5)
        File.write(dirname + fileName, fileitem.read)
  rescue
      # fallback in case we cannot download the source file
      puts "Files unreachable"
  end
=end
  dir = "_pspservizi/"
  file = File.read('_data/output_elenco_servizi.json')
  services = JSON.parse(file)

  services['content'].each do |psp|
    name = psp['cf']
    topass = Hash.new
    topass['layout'] = 'page'
    topass['cf'] = psp['cf']
    topass['ref'] = psp['cf']
    topass['title'] = psp['psp_rag_soc']
    topass['lang'] = 'it'
    topass['child_of_ref'] = 'prestatori-servizi-di-pagamento-elenco-psp-attivi'
    topass['omit_pagehead'] = true
    topass['url_informazioni_psp'] = psp['url_informazioni_psp']
    topass['services'] = psp['content']

    File.open(dir+name+".md", "w") { |file| file.write(topass.to_yaml + '---' + '

{% include psp-servizi.html %}') }
  end
   
end