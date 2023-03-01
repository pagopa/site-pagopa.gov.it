var it_datatables = {
  sInfo: "Vista da _START_ a _END_ di _TOTAL_ elementi",
  sInfoFiltered: "(filtrati da _MAX_ elementi totali)",
  sInfoPostFix: "",
  sInfoThousands: ".",
  sLengthMenu: "Visualizza _MENU_ elementi",
  sLoadingRecords: "Caricamento...",
  sProcessing: "Elaborazione...",
  sSearch: "Cerca:",
  sZeroRecords: "La ricerca non ha portato alcun risultato.",
  oPaginate: {
    sFirst: "Inizio",
    sPrevious: "Precedente",
    sNext: "Successivo",
    sLast: "Fine",
  },
  oAria: {
    sSortAscending: ": attiva per ordinare la colonna in ordine crescente",
    sSortDescending: ": attiva per ordinare la colonna in ordine decrescente",
  },
};

$(document).ready(function () {
  var $elencopsp = $("#elencopsp").DataTable({
    lengthChange: false,
    pageLength: 20,
    pagingType: "numbers",
    ordering: false,
    language: it_datatables,
    dom: "tip",
    drawCallback: function (settings) {
      $('[data-toggle="tooltip"]').tooltip();
    },
  });
  $("#elencopsp__search").keyup(function () {
    var value = $(this).val();
    $elencopsp.search(value).draw();
  });

  function searchAtLoad() {
    var hash = window.location.hash;
    var $filterCheck = $("[data-hash='" + hash + "']").first();
    if (hash !== "" && $filterCheck.length > 0) {
      var inputval = $filterCheck.val();
      var col = inputval.split(":")[0];
      var value = inputval.split(":")[1];
      var searchObj = { search: value };
      var returnArray = [];
      $filterCheck.prop("checked", true);
      for (var i = 0; i < col; i++) {
        returnArray.push(null);
      }
      returnArray.push(searchObj);

      return returnArray;
    }
    return [];
  }

  var $intermediaritable = $("#intermediaritable").DataTable({
    order: [[0, "asc"]],
    lengthChange: false,
    pageLength: 30,
    language: it_datatables,
    paging: true,
    searchCols: searchAtLoad(),
    drawCallback: function (settings) {
      $(".ptcol").removeClass("d-none");
    },
  });

  $(".filterPartner .filter-checkbox").change(function () {
    if (!this.checked) {
      $intermediaritable.column($(this).val()).search("").draw();
    }
    var $checked = $(".filterPartner .filter-checkbox:checked");
    var selector = [];
    $checked.each(function () {
      var value = $(this).val();
      selector.push(value);
    });
    if (selector.length > 0) {
      $intermediaritable.columns(selector).search("1").draw();
    } else {
      $intermediaritable.columns().search("").draw();
    }
  });

  $(".orderIntermediari__radio").change(function () {
    var value = $(this).val();
    var col = value.split(":")[0];
    var dir = value.split(":")[1];
    if (this.checked) {
      $intermediaritable.column(col).order(dir).draw();
    }
  });
  $(".filterIntermediario .filter-checkbox").change(function () {
    var inputval = $(this).val();
    var col = inputval.split(":")[0];
    var value = inputval.split(":")[1];
    var $checked = $(".filterIntermediario .filter-checkbox:checked");
    if ($checked.length > 0) {
      $intermediaritable.columns().search("");
      $intermediaritable.column(col).search(value).draw();
      history.replaceState("", "", $checked.data("hash"));
    } else {
      $intermediaritable.column(col).search("").draw();
      history.replaceState("", "", "");
    }
  });
  $(".filterIntermediario__reset").click(function (event) {
    event.preventDefault();
    history.replaceState("", "", "./");
    $(".filterIntermediario .filter-checkbox").prop("checked", false);
    $intermediaritable.columns().search("").draw();
  });
});
