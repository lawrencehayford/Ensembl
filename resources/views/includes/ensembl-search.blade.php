<div class="panel panel-default">
  <div class="panel-heading font-20">Welcome To our Gene Search Engine Portal</div>
  <!--=========start dash card==================-->
  <div class="panel-body card-1 ">
    <div class="row">
      <form id="searchForm" novalidate>

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

       </form>
    </div>

    <div class="row">
        <div class="col-md-12 center-text" >
          <br/>
          <img src="{{url('images/loader.gif')}}" id='loader'>
        </div>
    </div>

  </div>
  <!--=========end dash card=================-->
</div>
