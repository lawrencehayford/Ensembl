$(document).ready(function() {
    $('#RequestTable').DataTable();
} );

//searching by gene symbol and  position  and amino acid letter
$(document).on('keyup', 'input.firstsearch', function(ev) {
  //setting ajax headers
  validateAndSend("SYMBOL");

});

//searching by HGVS STRING
$(document).on('keyup', 'input.firstsearch', function(ev) {
  //setting ajax headers
  validateAndSend("HGVS");

});


function throwMessage(message)
{
    alert(message);
    return;
}


function validateAndSend(symbol){

  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

//getting values
  switch (symbol) {

    case "SYMBOL":{
        var gene=$("#gene").val();
        var position=$("#position").val();
        var amino_acid=$("#amino_acid").val();
        if(!validateSymbolInputs(gene,position,amino_acid)) return;
        var url="http://rest.ensembl.org/lookup/symbol/homo_sapiens/"+gene+"?content-type=application/json;expand=1";

        break;
    }
    case "HGVS":{
        var hgvs=$("#hgvs").val();
        if(!validateHgvsInputs(hgvs)) return;
        var url="http://rest.ensembl.org/vep/human/hgvs/"+hgvs+"?content-type=application/json";
        break;
    }

  }

  var method="GET";
  console.log(url);
  //sending request and getting response
  send(url,method);
  return;
}
function validateSymbolInputs(gene, position,amino_acid){


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

function validateHgvsInputs(hgvs){


  if(hgvs.length<25){
    return false;
  }

  return true;
}
