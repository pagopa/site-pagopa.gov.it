require 'yaml'
dir = "_ptqualificati/"
partners = YAML.load_file('_data/partner-dettagli.yml')
partners.each do |partner|
    name = partner['CF del Contraente']
    topass = Hash.new
    topass['CF del Contraente'] = partner['CF del Contraente']
    topass['title'] = partner['Ragione Sociale del Contraente']
    topass['lang'] = 'it'
    topass['child_of_ref'] = 'partner-qualificati'

    File.open(dir+name+".md", "w") { |file| file.write(topass.to_yaml) }
end