
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
