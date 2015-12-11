var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.copy('bower_components/jquery/dist/jquery.min.js','resources/assets/js/libs/jquery.js');
    mix.copy('bower_components/bootstrap/dist/js/bootstrap.min.js','resources/assets/js/libs/bootstrap.js');
    mix.copy('bower_components/angular/angular.min.js','resources/assets/js/libs/angular.js');
    mix.scripts(['libs/jquery.js','libs/angular.js','libs/bootstrap.js','restaurantsApp.js']);
    // mix.phpUnit();
});
