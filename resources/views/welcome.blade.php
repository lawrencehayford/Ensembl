@extends('layouts.app')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
				@include('includes.ensembl-logo')
  		@include('includes.ensembl-search')
     @include('includes.ensembl-table')
		</div>
	</div>
</div>
@endsection
