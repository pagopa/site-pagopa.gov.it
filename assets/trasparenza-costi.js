$(function() {
    var metodi = {};
    var services = [];

    $.get( "/assets/jsonpsp/psp-metodi.json").done(function(data) {
        metodi = data;
    });
    $.get( "/assets/jsonpsp/psp-services.json").done(function(data) {
        services = data;
    });

    // manage "trasparenza costi"
    $( "#psp-compare__where" ).change(function() {
        $selected = $( "#psp-compare__where option:selected" );
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
        var amount = $("#psp-compare__amount").val();
        var by = $("#psp-compare__by").val();
        console.log(amount, by)
    });
});