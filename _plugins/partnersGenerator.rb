#!/usr/bin/env ruby
=begin
THIS SCRIPT IS USEFUL TO GENERATE A COLLECTION FOR PARTNERS QUALIFICATI
TAKING DATA FROM _DATA/PARTNER-DETTAGLI.YML AND PUTTING THEM AS SINGLE MD PAGE
IN _PTQUALIFICATI FOLDER
=end
require 'yaml'

Jekyll::Hooks.register :site, :after_init do |doc, payload|

    dir = "_ptqualificati/"
    partners = YAML.load_file('_data/partner-dettagli.yml')

    Dir.foreach(dir) do |f|
        fn = File.join(dir, f)
        File.delete(fn) if f != '.' && f != '..'
    end

    partners.each do |partner|
        name = partner['CF']
        topass = Hash.new
        topass['CF del Contraente'] = partner['CF']
        topass['title'] = partner['ragionesociale']
        topass['lang'] = 'it'
        topass['child_of_ref'] = 'partner-qualificati'

        File.open(dir+name+".md", "w") { |file| file.write(topass.to_yaml + '---') }
    end
   
end