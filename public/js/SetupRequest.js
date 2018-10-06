//setting up data Table
$(document).ready(function() {
    $('#RequestTable').DataTable();
} );

//searching by gene symbol and  position  and amino acid letter
$("#search").click(function() {
    validateAndSend("SYMBOL");
});



//searching by HGVS STRING
$(document).on('keyup', 'input.secondsearch', function(ev) {
  //setting ajax headers
  validateAndSend("HGVS");

});


function throwMessage(message)
{
    alert(message);
    return;
}


function validateAndSend(symbol){

    //setting ajax headers
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
        var url= getGeneSymbolUrl(gene);

        break;
    }
    case "HGVS":{
        var hgvs=$("#hgvs").val();
        if(!validateHgvsInputs(hgvs)) return;
        var url=getHgvsSymbolUrl(hgvs);
        break;
    }

  }

  var method="GET";
  console.log(url);
  //sending request and getting response
  send(url,method,symbol);
  return;
}
