var it_datatables = {
    "sInfo":           "Vista da _START_ a _END_ di _TOTAL_ elementi",
    "sInfoFiltered":   "(filtrati da _MAX_ elementi totali)",
    "sInfoPostFix":    "",
    "sInfoThousands":  ".",
    "sLengthMenu":     "Visualizza _MENU_ elementi",
    "sLoadingRecords": "Caricamento...",
    "sProcessing":     "Elaborazione...",
    "sSearch":         "Cerca:",
    "sZeroRecords":    "La ricerca non ha portato alcun risultato.",
    "oPaginate": {
        "sFirst":      "Inizio",
        "sPrevious":   "Precedente",
        "sNext":       "Successivo",
        "sLast":       "Fine"
    },
    "oAria": {
        "sSortAscending":  ": attiva per ordinare la colonna in ordine crescente",
        "sSortDescending": ": attiva per ordinare la colonna in ordine decrescente"
    }
};

$(document).ready(function() {

    var $elencopsp = $('#elencopsp').DataTable({
        "lengthChange": false,
        "pageLength": 20,
        "pagingType": "numbers",
        "ordering": false,
        "language": it_datatables,
        "dom": "tip",
        }
        );
    $('#elencopsp__search').keyup(function() {
        var value = $(this).val();
        $elencopsp.search(value).draw();
        
    });

    $('#partners').DataTable({
        "order": [[ 1, "asc" ]],
        "lengthChange": false,
        "pageLength": 20,
        "pagingType": "simple",
        "language": it_datatables
        }
        );

    var $partnertable = $('#partnertable').DataTable({
        "order": [[ 0, "asc" ]],
        "lengthChange": false,
        "pageLength": 30,
        "pagingType": "simple",
        "language": it_datatables,
        "paging":   false,
        "info": false,
        "dom": "tip",
        }
        );

    $('.filter-checkbox').change(function() {
        if (!this.checked) {
            $partnertable.column( $(this).val() ).search('').draw();
        }
        var $checked = $('.filterPartner .filter-checkbox:checked');
        var selector = [];
        $checked.each(function(){
            var value = $(this).val();
            selector.push(value);
        });
        if (selector.length > 0) {
            $partnertable.columns(selector).search('1').draw();
        } else {
            $partnertable.columns().search('').draw();
        }
    });

    $('.orderPartner__radio').change(function() {
        var value = $(this).val();
        var col = value.split(":")[0];
        var dir = value.split(":")[1];
        if (this.checked) {
            $partnertable.column( col ).order(dir).draw();
        }
    });


});