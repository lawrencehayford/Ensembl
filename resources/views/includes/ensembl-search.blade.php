<div class="panel panel-default">
  <div class="panel-heading font-20">Welcome To our Search Engine Portal</div>
  <!--=========start dash card==================-->
  <div class="panel-body card-1 ">
    <div class="row">
      <form id="searchForm" novalidate>
    	@include('includes.ensembl-messages')
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
                <div><input type='text' id='gene' placeholder="eg: BRCA2"  style="text-transform:uppercase" class="firstsearch form-control"></div>
                <div class="messages"></div>

             </div>

             <div class="col-md-3 center-text" >
                <h3>Position</h3>
                <div><input type='text' id='position' placeholder="eg: 600" class="firstsearch form-control"></div>
                <div class="messages"></div>
             </div>

              <div class="col-md-3 center-text" >
                 <h3>Amino Acid Letter</h3>
                 <div><input type='text' id='amino_acid'  style="text-transform:uppercase" placeholder="eg: V" class="firstsearch form-control"></div>
                <div class="messages"></div>
              </div>

              <div class="col-md-2 center-text" >
                 <h3>.</h3>
                 <div><input type='button' id='search' value='Search' class="btn btn-primary"></div>
                <div class="messages"></div>
              </div>
            <!--==========End search by gene symbol===================-->
           </div>
           <div id="menu1" class="tab-pane fade">
               <br/>
              <!--==========search by HGVS string===================-->
              <div class="col-md-4 center-text" >
                  <h3>Enter HGVS String</h3>
                  <div><input type='text' id='hgvs' placeholder="eg: ENSP00000419060.2:p.Val600Glu " class="secondsearch form-control"></div>
                  <div class="messages"></div>

               </div>
              <!--==========End search by HGVS string===================-->
           </div>

         </div>



       </form>

  </div>
  <!--=========end dash card=================-->
</div>
