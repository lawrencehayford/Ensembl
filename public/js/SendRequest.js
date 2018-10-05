
  //get all form values
  function send(url,method,symbol)
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
                   processData(data,symbol);

              });

    }catch(e){
      alert(e.message);
      return;
    }

  }


  function processData(data,symbol){
    //decode json
    var obj=JSON.parse(data);
    if(obj.error) {$('#success').hide();$('#error').show();$('#error').html("<strong>Error! </strong>"+obj.error);setTimeout(function(){$('#error').hide();},4000);}
    $('#success').hide();
    //construct table
    constructTable(obj,symbol);



  }
