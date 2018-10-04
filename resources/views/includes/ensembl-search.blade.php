<div class="panel panel-default">
  <div class="panel-heading font-20">Welcome To our Gene Search Engine Portal</div>
  <!--=========start dash card==================-->
  <div class="panel-body card-1 ">
    <div class="row">
      <form id="searchForm" novalidate>

        <ul class="nav nav-tabs">
           <li class="active"><a data-toggle="tab" href="#home">Search By Gene Symbol</a></li>
           <li><a data-toggle="tab" href="#menu1">Search By HGVS string</a></li>
         </ul>

         <div class="tab-content">
           <div id="home" class="tab-pane fade in active">
               <br/>
            <!--==========search by gene symbol===================-->
             <div class="col-md-4 center-text" >
                <h3>Gene Symbol</h3>
                <div><input type='text' id='gene' class="searchForm form-control"></div>
                <div class="messages"></div>

             </div>

             <div class="col-md-4 center-text" >
                <h3>Position</h3>
                <div><input type='text' id='position' class="searchForm form-control"></div>
                <div class="messages"></div>
             </div>

              <div class="col-md-4 center-text" >
                 <h3>Amino Acid Letter</h3>
                 <div><input type='text' id='amino_acid' class="searchForm form-control"></div>
                <div class="messages"></div>
              </div>
            <!--==========End search by gene symbol===================-->
           </div>
           <div id="menu1" class="tab-pane fade">
               <br/>
              <!--==========search by HGVS string===================-->
              <div class="col-md-4 center-text" >
                  <h3>Enter HGVS String</h3>
                  <div><input type='text' id='hgvs' class="searchForm form-control"></div>
                  <div class="messages"></div>

               </div>
              <!--==========End search by HGVS string===================-->
           </div>

         </div>



       </form>

    <div class="row">
        <div class="col-md-12 center-text" >
          <br/>
          <img src="{{url('images/loader.gif')}}" id='loader'>
        </div>
    </div>

  </div>
  <!--=========end dash card=================-->
</div>
