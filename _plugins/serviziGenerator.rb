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
    topass['cf'] = psp['cf']
    topass['title'] = psp['psp_rag_soc']
    topass['lang'] = 'it'
    topass['child_of_ref'] = 'psp-servizi-elenco'

    File.open(dir+name+".md", "w") { |file| file.write(topass.to_yaml + '---') }
  end
   
end