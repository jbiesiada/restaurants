var app = angular.module('restaurantsApp', []);
app.controller("RestaurantListController",function($filter,$http,$scope,$interval){
	var RestaurantList = this;
	RestaurantList.restaurants = [
		{'id':1, 'name':'Farmstead', 'image':'http://jcporterconstruction.com/wp-content/uploads/2014/09/Farmstead5.jpg'},
		{'id':2, 'name':'AmazingR', 'image':'http://www.designfirms.org/images/portfolios/large-7572.jpg'},
		{'id':4, 'name':'Pizza HUT', 'image':'http://media-cdn.tripadvisor.com/media/photo-s/03/0e/d3/ec/tenkai-japanese-restaurant.jpg'},
		{'id':3, 'name':'KFC', 'image':'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLasg8onc7fMlbBPPw_bpeJnTQ18Xcd5SeJld4p1ov-hfIeCGg'},
		{'id':5, 'name':'Room 95', 'image':'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSekVMDQKfBKrK1G6GgxaIkM3v3UhKWmT4zlRSJXeEJfcn5OKOj'}
	];

});