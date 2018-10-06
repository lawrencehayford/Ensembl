
  //sending request
  function send(url,method,symbol)
  {
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
                   processData(data,symbol);

              });

    }catch(e){
      $('#success').hide();
      alert(e.message);
      return;
    }

  }
