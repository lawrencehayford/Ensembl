<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="ensembl">
<meta name="keywords" content="ensembl">
<title>{{ config('app.name', 'Ensembl') }}</title>
<!-- Site favicon -->
<link rel='shortcut icon' type='image/x-icon' href='images/favicon.ico' />
<!-- /site favicon -->

<!-- Entypo font stylesheet -->
<link href="{{asset('css/entypo.css') }}" rel="stylesheet">
<!-- /entypo font stylesheet -->

<!-- Font awesome stylesheet -->
<link href="{{asset('css/font-awesome.min.css') }}" rel="stylesheet">
<!-- /font awesome stylesheet -->


<!-- Bootstrap stylesheet min version -->
<link href="{{asset('css/bootstrap.min.css') }}" rel="stylesheet">
<!-- /bootstrap stylesheet min version -->

<!-- Mouldifi core stylesheet -->
<link href="{{asset('css/mouldifi-core.css') }}" rel="stylesheet">
<!-- /mouldifi core stylesheet -->

<link href="{{asset('css/mouldifi-forms.css') }}" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
<![endif]-->

<!--Datatable-->
<link href="{{asset('css/jquery.dataTables.min.css')}}" rel="stylesheet">
<!--end Datatale-->
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">


</head>
<body class="login-page">
    <div class="login-pag-inner">
        <div class="animatedParent animateOnce z-index-50">
            <div class="login-container animated growIn slower">

                @yield('content')

            </div>
        </div>
    </div>
<!--Load JQuery-->
<script src="{{asset('js/jquery.min.js') }}"></script>
<script src="{{asset('js/bootstrap.min.js') }}"></script>
<script src="{{asset('js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('js/SetupRequest.js')}}"></script>
<script src="{{asset('js/SendRequest.js')}}"></script>
<script src="{{asset('js/constructTable.js')}}"></script>
</body>


</html>
