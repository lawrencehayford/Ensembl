
  //get all form values
  function send(url,method)
  {
    $('#loader').show();
    $('#success').show();
    $('#ensemblTable').html("");
    try{
      $.post("sendrequest",
              {
                url: url,
                method: method

              },
              function(data,status)
              {

                  $('#loader').hide();
                   processData(data);

              });

    }catch(e){
      alert(e.message);
      return;
    }

  }


  function processData(data){
    var obj=JSON.parse(data);
    if(obj.error) {$('#success').hide();$('#error').show();$('#error').html("<strong>Error! </strong>"+obj.error);setTimeout(function(){$('#error').hide();},4000);}
    $('#success').hide();
    constructTable(obj);

  }
