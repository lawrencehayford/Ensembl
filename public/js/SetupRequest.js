$(document).ready(function() {
    $('#RequestTable').DataTable();
} );


$(document).on('keyup', 'input.searchForm', function(ev) {
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
  if(!validateInputs(gene,position,amino_acid)) return;
  var url="http://rest.ensembl.org/lookup/symbol/homo_sapiens/"+gene+"?content-type=application/json;expand=1";
  var method="GET";
  console.log(url);
  //sending request and getting response
  send(url,method);
  return;
}
function validateInputs(gene, position,amino_acid){


  if(gene.length<4){
    return false;
  }
  if(position.length<3){
    return false;
  }

  if(amino_acid.length<1){
    return false;
  }

  return true;
}
