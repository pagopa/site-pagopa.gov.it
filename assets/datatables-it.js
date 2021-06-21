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

$('#elencopsp').DataTable({
    "lengthChange": false,
    "pageLength": 20,
    "pagingType": "numbers",
    "searching": false,
    "ordering": false,
    "language": it_datatables
    }
    );

$('#partners').DataTable({
    "order": [[ 1, "asc" ]],
    "lengthChange": false,
    "pageLength": 20,
    "pagingType": "simple",
    "language": it_datatables
    }
    );

$('#partnertable').DataTable({
    "order": [[ 1, "asc" ]],
    "lengthChange": false,
    "pageLength": 30,
    "pagingType": "simple",
    "searching": false,
    "ordering": false,
    "language": it_datatables,
    "paging":   false,
    "info": false,
    }
    );
});