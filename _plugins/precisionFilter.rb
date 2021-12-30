module Jekyll
  module MoneyFilter
    def money_format(input, value=0)
      ("%.#{value}f" % input).to_s.gsub(".", ",")
    end
  end
end

Liquid::Template.register_filter(Jekyll::MoneyFilter)