
  //get all form values
  function send(url,method)
  {
    $('#loader').show();
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
  }


  function processData(data){
    var obj=JSON.parse(data);
    console.log(obj);
  }
