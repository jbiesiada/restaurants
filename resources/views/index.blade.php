@extends('layouts.main')

@section('navigation')
<nav class="navbar navbar-inverse">
	<div class="container">
		<div class="navbar-header">
			<a class="navbar-brand" href="#">RESTAURANTS</a>
		</div>
		<ul class="nav navbar-nav navbar-right">
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					Dropdown <span class="caret"></span>
				</a>
				<ul class="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>
@stop

@section('content')
<div >
	<div ng-controller="RestaurantListController as restaurantsList">
		<div class="row">
			<div class="col-sm-6 col-md-3" ng-repeat="restaurant in restaurantsList.restaurants">
				<div class="thumbnail" style="min-height: 302px;">
					<img ng-src="@{{restaurant.image}}" alt="..." >
					<div class="caption">
						<h3>@{{restaurant.name}}</h3>
						<p>...</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@stop