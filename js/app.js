angular.module('miniRouting',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider

.state('home' , {
  templateUrl:'js/home/homeTmpl.html',
  contoller:'homeCtrl',
  url:'/'
})

.state('settings', {
  url:'/settings',
templateUrl:'js/settings/settingsTmpl.html',
controller:'settingsCtrl'
})

.state('products', {
templateUrl:'js/products/productTmpl.html',
controller:'productsCtrl',
url:'/products/:id'
})

$urlRouterProvider
    .otherwise('/');


});
