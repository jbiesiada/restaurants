<!DOCTYPE html>
<html ng-app="restaurantsApp">
<head>
	<title>Restaurants</title>
	<link rel="stylesheet" href="css/app.css">
</head>
<body>
@yield('navigation')
<div class="container">
<div class='row'>
@yield('content')
</div>
</div>
<script src="js/all.js"></script>
@yield('scripts')
</body>
</html>