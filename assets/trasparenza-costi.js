$(function() {
    var metodi = {};
    var services = [];
    var app_logos = {};
    var template = $("#psp-compare__result-template").html();
    var compile = Handlebars.compile(template);
    var $results_nodata = $("#psp-compare__noresults");
    var $results_header = $(".psp-compare__results__header");
    var $results_wrapper = $("#psp-compare__results");
    var $results = $("#psp-compare__results__data");
    var $size = $("#psp-compare__results__size");
    var $amount = $("#psp-compare__amount");
    var $where = $("#psp-compare__where");
    var $where_wrapper = $(".bootstrap-select-wrapper.psp-compare__where__wrapper");
    var $by = $("#psp-compare__by");
    var $by_wrapper = $(".bootstrap-select-wrapper.psp-compare__by__wrapper");
    var $submit = $("#psp-compare__submit");

    Handlebars.registerHelper("commaConvert", function(value){
        return value.toFixed(2).toString().replace(".", ",");
    });
    Handlebars.registerHelper("ifEquals", function(a, b, options) {
        if (a === b) {
          return options.fn(this);
        }
        return options.inverse(this);
    });
    Handlebars.registerHelper("checkBoolOr", function(a, b, options) {
        if (a===true || b===true) {
          return options.fn(this);
        }
        return options.inverse(this);
    });
    Handlebars.registerHelper("appLogoUrl", function(value) {
        // as input we accept the value of nome_servizio
        // as output the url of the logo, if finded
        var logoKeys = Object.keys(app_logos);
        var finded = logoKeys.filter(function(logoKey) {
            return value.toLowerCase().indexOf(logoKey)>=0 ? true : false;
        });
        if (finded.length > 0) {
            var logo = finded[0];
            return app_logos[logo]['logo_url'];
        }
        return "https://assets.cdn.io.italia.it/logos/apps/carte-pagamento.png";
    });

    function hideImg() {
        $(".psp-compare__result__logo img").on("error", function() {
            $(this).css("visibility", "hidden");
        });
    }

    $.get( "/assets/jsonpsp/psp-metodi.json").done(function(data) {
        metodi = data;
    });
    $.get( "/assets/jsonpsp/psp-services.json").done(function(data) {
        services = data;
    });
    $.get( "/assets/json/app_logo.json").done(function(data) {
        app_logos = data;
    });

    $("#psp-compare__amount").keyup(function(){
        var $this = $(this);
        var actual = $this.val();
        return $this.val(actual.replace(/[^\d,^\d.]+/g, ''));
    });

    // manage "trasparenza costi"
    $where.change(function() {
        var $selected = $( "#psp-compare__where option:selected" );
        var actitems = $selected.attr('data-actived').slice(0,-1).split(',');
        var menu = [
            {
                text: "Tutti",
                value: "all"
            }
        ];
        actitems.forEach(function(el) {
            menu.push(
                {
                    text: metodi[el]['label'] || el,
                    value: metodi[el]['condition'][0] || el,
                }
            );
        });
        $by.removeAttr('disabled');
        $by_wrapper.removeClass('disabled');
        $by_wrapper.setOptionsToSelect(menu);
        $submit.removeAttr("disabled");
    });

    $("#psp-compare").on("submit", function(e) {
        e.preventDefault();
        var amount = $amount.val().replace(',','.');
        var by = $by.val();
        var results_data = $.grep(services, function(n, i){
            if (by!=="all") {
                return  (parseFloat(amount) > n['importo_minimo'] && parseFloat(amount) <= n['importo_massimo']) && n[by]==true;
            } else {
                return  parseFloat(amount) > n['importo_minimo'] && parseFloat(amount) <= n['importo_massimo'];
            }
          });
        var result_size_string = results_data.length==1 ? 'risultato' : 'risultati';
        $size.text(results_data.length.toString() + ' ' + result_size_string);
        $results_header.addClass("on");
        $results.html( compile(results_data) )
        hideImg();
        if (results_data.length===0) {
            $results_nodata.removeClass("d-none");
        } else {
            $results_nodata.addClass("d-none");
        }
        $results_wrapper.attr("tabindex", 3);
        $results_wrapper.focus();
    });
    $("#psp-compare").on("reset", function() {
        $results.empty();
        $results_header.removeClass("on");
        $size.text("");
        $where.prop('selectedIndex',0);
        $where.selectpicker('refresh');
        $by.prop('selectedIndex',0);
        $by.selectpicker('refresh');
        $by.addClass('disabled');
        $by_wrapper.addClass('disabled');
        $submit.attr("disabled", "disabled");
        $amount.focus();
        $results_nodata.addClass("d-none");
        $results_wrapper.attr("tabindex", "-1");
        
    });
});