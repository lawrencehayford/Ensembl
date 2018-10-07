
  function processData(data,symbol){
    //decode json

    try {
        var obj=JSON.parse(data);
        if(obj.error) {$('#success').hide();$('#error').show();$('#error').html("<strong>Error! </strong>"+obj.error);setTimeout(function(){$('#error').hide();},4000);}
        //construct table
        constructTable(obj,symbol);
    } catch(e) {
        $('#success').hide();
        alert('Error: '+ data); // error in the above string (in this case, yes)!
        return;
    }




  }

function collapse(index){
  if(index == 0){
    return "in";
  }
  return null;
}

function checkForProtein(row){
  if(row.Translation){
    return true;
  }else{
    return false;
  }
}

function CheckForAminoLetterAtCertianPosition(data){
    //checking if sequence lenght is not less that position
    if(data.length >=600){
        var position=parseInt($('#position').val());
        //deduct one from position to get exact array posiiton because array starts from 0 and not 1
        //so the 600 position will e 599
        position-=1;
        position=0-position;
        console.log("position loggin: ",position);
        console.log("comparison loggin: ",data.slice(position)[0],$('#amino_acid').val());
        return compareSquencePosition(data.slice(position)[0],$('#amino_acid').val());
  }
}

function compareSquencePosition(squencePositionLetter,inputedAminoLetter){

  if(squencePositionLetter==inputedAminoLetter){
    return true;
  }
  return false;
}

function getGeneSymbolUrl(gene){
  return "http://rest.ensembl.org/lookup/symbol/homo_sapiens/"+gene+"?content-type=application/json;expand=1";
}

function getHgvsSymbolUrl(hgvs){
  return "http://rest.ensembl.org/vep/human/hgvs/"+hgvs+"?content-type=application/json";
}

function getsequenceUrl(id){
  return "http://rest.ensembl.org/sequence/id/"+id+".json?type";
}

//validating lenght of inputs
function validateSymbolInputs(gene, position,amino_acid){

  if(gene.length<4){
    return false;
  }
  if(position.length<1){
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

function Asyc(IsAsync){
  $.ajaxSetup({async: IsAsync});
  return;
}
