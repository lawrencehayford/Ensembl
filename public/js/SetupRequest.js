$(document).ready(function() {
    $('#RequestTable').DataTable();
} );

$('#loader').hide();

$(document).on('keydown', 'input.searchForm', function(ev) {
  //setting ajax headers
  validateAndSend();

});


function throwMessage(message)
{
    alert(message);
    return;
}


function validateAndSend(){
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

//getting values
  var gene=$("#gene").val();
  var position=$("#position").val();
  var amino_acid=$("#amino_acid").val();
  var url="http://rest.ensembl.org/lookup/symbol/homo_sapiens/"+gene+".json?;expand=1";
  var method="GET";

  //sending request and getting response
  send(url,method);
  return;
}
