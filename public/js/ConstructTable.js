function constructTable(obj,symbol){
  document.getElementById("ensemblTable").innerHTML="";
  switch (symbol) {

    case "SYMBOL":{
      for (var index in obj.Transcript)
      {

        //checking for protein
        if(!checkForProtein(obj.Transcript[index]))continue;

        //getting sequence info
        try{
          var url = getsequenceUrl(obj.Transcript[index].Translation.id);
          console.log("sequence url",url);
          this.Asyc(false);
          $.post("sendrequest",
                  {
                    url: url ,
                    method: "GET"

                  },
                  function(data,status)
                  {
                      var sequenceObj=JSON.parse(data);

                      //cehcking for amino letter at certain position
                      if(CheckForAminoLetterAtCertianPosition(sequenceObj.seq)){
                        document.getElementById("ensemblTable").innerHTML+=
                                      "<tr>"+
                                      "<div class='panel panel-default' style='margin-bottom:5px;'>"+//start of panel default
                                      "<div class='panel-heading'>"+
                                      "<h5 class='panel-title accordian-color'>"+
                                      "<a data-toggle='collapse' data-parent='#accordion' href='#"+obj.Transcript[index].id+"'><u>"+obj.Transcript[index].id+" "+obj.Transcript[index].display_name+"</u></a>"+
                                      "</h5><br/>"+
                                      "<a href='http://www.ensembl.org/id/"+obj.Transcript[index].id+"' target='_blank' class='btn-info right-align'>Visit website</a></div>"+
                                      "<div id='"+obj.Transcript[index].id+"' class='panel-collapse collapse "+collapse(index)+"'>"+ // start of collapse
                                      "<div class='panel-body'>"+//start of panel body
                                      //--================TRANSCRIPT=================--

                                      "<h4>Transcript</h4>"+

                                      "<div class='row'>"+
                                      "<div class='col-md-4' >Parent : <font class='accordian-text'>"+obj.Transcript[index].Parent+"</font></div>"+
                                      "<div class='col-md-4' >Strand : <font class='accordian-text'>"+obj.Transcript[index].strand+"</font></div>"+
                                      "<div class='col-md-4' >Display Name : <font class='accordian-text'>"+obj.Transcript[index].display_name+"</font></div>"+
                                      "</div>"+

                                      "<div class='row'>"+
                                      "<div class='col-md-4' >Logical Name : <font class='accordian-text'>"+obj.Transcript[index].logic_name+"</font></div>"+
                                      "<div class='col-md-4' >Biotype : <font class='accordian-text'>"+obj.Transcript[index].biotype+"</font></div>"+
                                      "<div class='col-md-4' >Start : <font class='accordian-text'>"+obj.Transcript[index].start+"</font></div>"+
                                      "</div>"+


                                      "<div class='row'>"+
                                      "<div class='col-md-4' >version : <font class='accordian-text'>"+obj.Transcript[index].version+"</font></div>"+
                                      "<div class='col-md-4' >Species : <font class='accordian-text'>"+obj.Transcript[index].species+"</font></div>"+
                                      "<div class='col-md-4' >Source : <font class='accordian-text'>"+obj.Transcript[index].source+"</font></div>"+
                                      "</div>"+

                                      "<div class='row'>"+
                                      "<div class='col-md-4' >End : <font class='accordian-text'>"+obj.Transcript[index].end+"</font></div>"+
                                      "<div class='col-md-4' >DBType : <font class='accordian-text'>"+obj.Transcript[index].db_type+"</font></div>"+
                                      "<div class='col-md-4' >Assembly Name : <font class='accordian-text'>"+obj.Transcript[index].assembly_name+"</font></div>"+
                                      "</div>"+





                                      "</div>"; //end of panel body

                                      "</div>"+ //end of collapes
                                      "</div>"+//end of panel default
                                        "</div>"+
                                      "<tr/>";
                      }

                  });

        }catch(e){
          alert(e.message);
          return;
        }




      }
        this.Asyc(true);
        break;
    }
    case "HGVS":{

      for (var index in obj[0].transcript_consequences)
      {

        document.getElementById("ensemblTable").innerHTML+=
                      "<tr>"+
                      "<div class='panel panel-default' style='margin-bottom:5px;'>"+//start of panel default
                      "<div class='panel-heading'>"+
                      "<h5 class='panel-title accordian-color'>"+
                      "<a data-toggle='collapse' data-parent='#accordion' href='#"+obj[0].transcript_consequences[index].transcript_id+"'><u>"+obj[0].transcript_consequences[index].transcript_id+" "+obj[0].transcript_consequences[index].gene_symbol+"</u></a>"+
                      "</h5><br/>"+
                      "<a href='http://www.ensembl.org/id/"+obj[0].transcript_consequences[index].transcript_id+"' target='_blank' class='btn-info right-align'>Visit website</a></div>"+
                      "<div id='"+obj[0].transcript_consequences[index].transcript_id+"' class='panel-collapse collapse "+collapse(index)+"'>"+ // start of collapse
                      "<div class='panel-body'>"+//start of panel body
                      //--================TRANSCRIPT=================--

                      "<h4>Transcript</h4>"+

                      "<div class='row'>"+
                      "<div class='col-md-4' >Codons : <font class='accordian-text'>"+obj[0].transcript_consequences[index].codons+"</font></div>"+
                        "<div class='col-md-4' >Cdna_start : <font class='accordian-text'>"+obj[0].transcript_consequences[index].cdna_start+"</font></div>"+
                      "<div class='col-md-4' >Cdna_end : <font class='accordian-text'>"+obj[0].transcript_consequences[index].cdna_end+"</font></div>"+
                      "</div>"+

                      "<div class='row'>"+

                      "<div class='col-md-4' >Cds_start : <font class='accordian-text'>"+obj[0].transcript_consequences[index].cds_start+"</font></div>"+
                      "<div class='col-md-4' >Cds_end : <font class='accordian-text'>"+obj[0].transcript_consequences[index].cds_end+"</font></div>"+
                      "<div class='col-md-4' >Strand : <font class='accordian-text'>"+obj[0].transcript_consequences[index].strand+"</font></div>"+
                      "<div class='col-md-4' >Polyphen_score : <font class='accordian-text'>"+obj[0].transcript_consequences[index].polyphen_score+"</font></div>"+
                      "</div>"+


                      "<div class='row'>"+
                      "<div class='col-md-4' >Sift_prediction : <font class='accordian-text'>"+obj[0].transcript_consequences[index].sift_prediction+"</font></div>"+
                      "<div class='col-md-4' >Amino_acids : <font class='accordian-text'>"+obj[0].transcript_consequences[index].amino_acids+"</font></div>"+
                      "<div class='col-md-4' >Hgnc_id : <font class='accordian-text'>"+obj[0].transcript_consequences[index].hgnc_id+"</font></div>"+
                      "</div>"+

                      "<div class='row'>"+
                      "<div class='col-md-4' >Gene_symbol_source : <font class='accordian-text'>"+obj[0].transcript_consequences[index].gene_symbol_source+"</font></div>"+
                      "<div class='col-md-4' >Polyphen_prediction : <font class='accordian-text'>"+obj[0].transcript_consequences[index].polyphen_prediction+"</font></div>"+
                      "<div class='col-md-4' >Sift_score : <font class='accordian-text'>"+obj[0].transcript_consequences[index].sift_score+"</font></div>"+
                      "</div>"+

                      "<div class='row'>"+
                      "<div class='col-md-4' >Protein_start : <font class='accordian-text'>"+obj[0].transcript_consequences[index].protein_start+"</font></div>"+
                      "<div class='col-md-4' >Protein_end : <font class='accordian-text'>"+obj[0].transcript_consequences[index].protein_end+"</font></div>"+
                      "<div class='col-md-4' >Gene_id : <font class='accordian-text'>"+obj[0].transcript_consequences[index].gene_id+"</font></div>"+
                      "</div>"+


                      "<div class='row'>"+
                      "<div class='col-md-4' >Variant_allele : <font class='accordian-text'>"+obj[0].transcript_consequences[index].variant_allele+"</font></div>"+
                      "<div class='col-md-4' >Gene_symbol_source : <font class='accordian-text'>"+obj[0].transcript_consequences[index].gene_symbol_source+"</font></div>"+
                      "</div>"+





                      "</div>"; //end of panel body

                      "</div>"+ //end of collapes
                      "</div>"+//end of panel default
                        "</div>"+
                      "<tr/>";

      }
        break;
    }

  }
  $('#success').hide();
  return;
}
