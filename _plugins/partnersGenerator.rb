#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO GENERATE A COLLECTION FOR PARTNERS QUALIFICATI
TAKING DATA FROM _DATA/PARTNER-DETTAGLI.YML AND PUTTING THEM AS SINGLE MD PAGE
IN _PTQUALIFICATI FOLDER
=end
require 'yaml'
require 'down'

downloadHost = "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/"
downloadFiles = ["ec_pt.yml","intermediari.yml", "psp.csv"]

Jekyll::Hooks.register :site, :after_init do |doc, payload|

    # DOWLOAD DATA FROM REPO
    begin
        downloadFiles.each do |fileName| 
            dirname = "_data/"
            fileitem = Down.download(downloadHost + fileName, open_timeout: 5)
            # try to avoid 'NaN' values
            if fileName.include? ".yml"
                filecontent = fileitem.read
                filecontent_clean = filecontent.gsub('.nan', '')
                File.write(dirname + fileName, filecontent_clean)
            else
                File.write(dirname + fileName, fileitem.read)
            end
        end
    rescue
        # fallback in case we cannot download the source file
        puts "Files unreachable"
    end

    dir = "_ptqualificati/"
    ptqualdata = YAML.load_file('_data/partner-dettagli.yml')
    ptquallist = Array.new

    ptqualdata.each do |partner|
        ptquallist.push(partner['CF'].to_s)
    end

    dir = "_pt/"
    ptintermediari = YAML.load_file('_data/intermediari.yml')
    blacklist = ['idIntermediario1', '15376371009']

    # GENERATE PT/INTERMEDIARI STUFFS
    ptintermediari.each do |key, list|
        pttype = key
        list.each do |item|
            name = item['Codice Fiscale'].to_s
            qualified = ptquallist.include?(name) ? true : false
            next if blacklist.include?(name)
            topass = Hash.new
            topass['CF del Contraente'] = item['Codice Fiscale']
            topass['title'] = item['Intermediario Partner']
            topass['lang'] = 'it'
            topass['child_of_ref'] = "partner-intermediari-elenco"
            topass['qualified'] = qualified
            topass['type'] = pttype
            topass['numenti'] = item['Conteggio di denominazione Ente']
            topass['permalink'] = qualified ? "/it/pubbliche-amministrazioni/partner-qualificati/"+name+".html" : "/it/pubbliche-amministrazioni/partner-intermediari/"+name+".html"

            File.open(dir+name+".md", "w") { |file| file.write(topass.to_yaml + '---') }
        end
    end
   
end