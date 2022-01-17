$(function() {
    var metodi = {};
    var services = [];
    Handlebars.registerHelper("commaConvert", function(value){
        return value.toString().replace(".", ",");
    });
    Handlebars.registerHelper("ifEquals", function(a, b, options) {
        if (a === b) {
          return options.fn(this);
        }
        return options.inverse(this);
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

    $("#psp-compare__amount").keyup(function(){
        var $this = $(this);
        var actual = $this.val();
        return $this.val(actual.replace(/[^\d,^\d.]+/g, ''));
    });

    // manage "trasparenza costi"
    $( "#psp-compare__where" ).change(function() {
        var $selected = $( "#psp-compare__where option:selected" );
        var actitems = $selected.attr('data-actived').slice(0,-1).split(',');
        var menu = [];
        actitems.forEach(function(el) {
            menu.push(
                {
                    text: metodi[el]['label'] || el,
                    value: el
                }
            );
        });
        $( "#psp-compare__by" ).removeAttr('disabled');
        $( ".psp-compare__by__wrapper" ).removeClass('disabled');
        $(".bootstrap-select-wrapper.psp-compare__by__wrapper").setOptionsToSelect(menu);
        $("#psp-compare__submit").removeAttr("disabled");
    });

    $("#psp-compare").on("submit", function(e) {
        e.preventDefault();
        var template = $("#psp-compare__result-template").html();
        var compile = Handlebars.compile(template); 
        var amount = $("#psp-compare__amount").val().replace(',','.');
        var by = $("#psp-compare__by").val();
        var $results_header = $(".psp-compare__results__header");
        var $results = $("#psp-compare__results__data");
        var $size = $("#psp-compare__results__size");
        var results_data = $.grep(services, function(n, i){
            return  (parseFloat(amount) > n['importo_minimo'] && parseFloat(amount) <= n['importo_massimo']) && n[by]==true;
          });
        $size.text(results_data.length);
        $results_header.addClass("on");
        $results.html( compile(results_data) )
        hideImg();
    });
});