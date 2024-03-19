//muốn sử dụng route trong angular js phải sử dụng đoạn code dưới
angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/trang-chu',{ // định nghĩa tên route là trang-chu
        templateUrl : 'views/trang-chu.html' // đường dẫn đến view
    })
})