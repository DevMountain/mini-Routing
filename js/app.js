var app = angular.module('miniRouting', ['ngRoute']);//Ask about name miniRouting or routingApp? Step 4

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'//After this step automatically go and create the controller!!
    })
    .when('/settings', {
      templateUrl: 'js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'//After this step automatically go and create the controller!!
    })
    .when('/products/:id', {
      templateUrl: 'js/products/productTmpl.html',
      controller: 'productsCtrl' //Could do resolve as well resolve: { productData: function($route, productService){ return productService.getData($route/current.params.id);}}
    })
    .otherwise({
      redirectTo: '/'
    })
});