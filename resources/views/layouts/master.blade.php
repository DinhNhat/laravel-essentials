<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Live Meetings</title>

    {{--Global Vars--}}

    {{--Javascript Files--}}
    <script type="text/javascript" src="{{ asset('back-end/js/jquery-3.4.1.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/popper.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/bootstrap.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/theme.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/slimscroll/jquery.slimscroll.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/metisMenu/jquery.metisMenu.js') }}" ></script>
{{--    <script type="text/javascript" src="{{ asset('back-end/js/myJS.js') }}"></script>--}}

    <!-- jQuery UI -->
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/jquery-ui/jquery-ui.min.js') }}"></script>

    <!-- Plugins -->
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/moment-js/moment.js') }}"></script>
    {{--        <script type="text/javascript" src="{{ asset('back-end/js/plugins/pace/pace.min.js') }}"></script>--}}
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    {{--        <script type="text/javascript" src="{{ asset('back-end/js/plugins/xdan-datepicker/datepicker.min.js') }}"></script>--}}
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/sweetalert/sweetalert.js') }}" ></script>
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/select2/select2.min.js') }}"></script>
    {{--<script type="text/javascript" src="{{ asset('back-end/js/plugins/gritter/jquery.gritter.min.js') }}"></script>--}}
    {{--<script type="text/javascript" src="{{ asset('back-end/js/plugins/dropzone/dropzone-5.7.0.js') }}"></script>--}}
    {{--        <script type="text/javascript" src="{{ asset('back-end/js/plugins/jquery.validate/jquery.validate.min.js') }}"></script>--}}
    {{--<script type="text/javascript" src="{{ asset('back-end/js/plugins/jquery.validate/additional-methods.min.js') }}"></script>--}}
    {{--<script type="text/javascript" src="{{ asset('back-end/js/plugins/summernote/summernote.js') }}"></script>--}}
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/numeral/numeral.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/toastr/toastr.min.js') }}"></script>

    <!-- ChartJS-->
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/chart-js/Chart.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('back-end/js/plugins/chart-js/chartjs-demo.js') }}"></script>
    <!-- include vendor scripts used in "Dashboard" page. see "/views//pages/partials/dashboard/@vendor-scripts.hbs" -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.12.0/dist/sortable.umd.min.js"></script>

    <!-- Flot -->
    <script src="{{ asset('back-end/js/plugins/flot/jquery.flot.js') }}"></script>
    <script src="{{ asset('back-end/js/plugins/flot/jquery.flot.tooltip.min.js') }}"></script>
    <script src="{{ asset('back-end/js/plugins/flot/jquery.flot.spline.js') }}"></script>
    <script src="{{ asset('back-end/js/plugins/flot/jquery.flot.resize.js') }}"></script>
    <script src="{{ asset('back-end/js/plugins/flot/jquery.flot.pie.js') }}"></script>

    <!-- Peity -->
    <script src="{{ asset('back-end/js/plugins/peity/jquery.peity.min.js') }}"></script>

    <!-- Sparkline -->
    <script src="{{ asset('back-end/js/plugins/sparkline/jquery.sparkline.min.js') }}"></script>

    {{--<script type="text/javascript" src="{{ asset('back-end/js/plugins/jquery-mask/jquery.mask.js') }}"></script>--}}
    {{--<script type="text/javascript" src="{{ asset('js/plugins/clipboard/clipboard.min.js') }}" defer></script>--}}
    {{--<script type="text/javascript" src="{{ asset('js/plugins/jQuery-steps/jquery-steps.min.js') }}" defer></script>--}}

    <!-- Styles -->
    <link href="{{ asset('back-end/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/bootstrap-grid.min.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/bootstrap-reboot.min.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/plugins/toastr/toastr.min.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/plugins/bootstrap-datepicker/bootstrap-datepicker.min.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/plugins/_gritter/jquery.gritter.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/plugins/sweetalert/sweetalert.css')}}" rel="stylesheet">
    {{--<link href="{{ asset('back-end/css/plugins/xdan-datepicker/datepicker.min.css')}}" rel="stylesheet">--}}
    {{--<link href="{{ asset('back-end/css/plugins/select2/select2.min.css')}}" rel="stylesheet">--}}
    {{--<link href="{{ asset('back-end/css/plugins/summernote/summernote.css')}}" rel="stylesheet">--}}
    <link href="{{ asset('back-end/css/plugins/jQuery-ui/jquery-ui.min.css')}}" rel="stylesheet">
    {{--<link href="{{ asset('back-end/css/plugins/dropzone/dropzone-5.7.0.css')}}" rel="stylesheet">--}}
    {{--<link href="{{ asset('css/plugins/jQuery-steps/jquery.steps.css')}}" rel="stylesheet">--}}

    <link href="{{ asset('back-end/css/animate.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/theme.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/style.css')}}" rel="stylesheet">
    <link href="{{ asset('back-end/css/custom.css')}}" rel="stylesheet">
    {{--        <link href="{{ asset('back-end/css/ace.min.css')}}" rel="stylesheet">--}}

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/fontawesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/regular.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/brands.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/solid.min.css">

</head>


{{--@if(Auth::check())--}}
<body>
<div id="wrapper">

    <nav class="navbar-default navbar-static-side" role="navigation">
        @include('layouts.sidebar-collapse')
    </nav>

    <div id="page-wrapper" class="gray-bg">
        <!-- Top Nav -->
        @include('layouts.top-nav')

        <!-- Main Content -->
        @include('layouts.main-content')

        <!-- Footer -->
        <div class="footer">
            <div class="float-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Example Company &copy; 2014-2018
            </div>
        </div>
    </div>
</div>



@yield ('scripts')
{{-- Enable the scroll content for other compoents --}}
<script type="text/javascript">
    $(document).ready(function(){

        $(document.body).on("click",".client-link",function(e){
            e.preventDefault();
            $(".selected .tab-pane").removeClass('active');
            $($(this).attr('href')).addClass("active");
        });

    });
</script>
</body>

</html>
