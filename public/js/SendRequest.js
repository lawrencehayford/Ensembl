
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
    for (var index in obj.Transcript)
    {
      document.getElementById("ensemblTable").innerHTML+=
                    "<tr>"+
                    "<div class='panel panel-default' style='margin-bottom:5px;'>"+
                    "<div class='panel-heading'>"+
                    "<h5 class='panel-title accordian-color'>"+
                    "<a data-toggle='collapse' data-parent='#accordion' href='#"+obj.Transcript[index].id+"'><u>"+obj.Transcript[index].id+"-"+obj.Transcript[index].display_name+"</u></a>"+
                    "</h5><br/>"+
                    "</div>"+
                    "<div id='"+obj.Transcript[index].id+"' class='panel-collapse collapse'>"+
                    "<div class='panel-body'>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                    "<tr/>";

 										// "<tr>"+
 										// "<td>"+obj.Transcript[index].id+"</td>"+
                    // "<td>"+obj.Transcript[index].Parent+"</td>"+
 										// "<td>"+obj.Transcript[index].strand+"</td>"+
 										// "<td>"+obj.Transcript[index].display_name+"</td>"+
 										// "<td>"+obj.Transcript[index].logic_name+"</td>"+
 										// "<td>"+obj.Transcript[index].biotype+"</td>"+
 										// "<td>"+obj.Transcript[index].version+"</td>"+
                    // "<td>"+obj.Transcript[index].species+"</td>"+
                    // "<td>"+obj.Transcript[index].start+"</td>"+
                    // "<td>"+obj.Transcript[index].end+"</td>"+
                    // "<td>"+obj.Transcript[index].source+"</td>"+
                    // "<td>"+obj.Transcript[index].db_type+"</td>"+
 										// "</tr>";
                    console.log(obj.Transcript[index].id);
    }

  }
