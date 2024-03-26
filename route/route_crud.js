//muốn sử dụng route trong angular js phải sử dụng đoạn code dưới
angular.module('myController',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/product/list',{ // định nghĩa tên route là trang-chu
        templateUrl : 'views/list.html', // đường dẫn đến view
        controller: ProductListController
    }).when('/product/add',{ // định nghĩa tên route là trang-chu
        templateUrl : 'views/add.html', // đường dẫn đến view
        controller: ProductAddController
    }).when('/product/:id/edit',{ // định nghĩa tên route là trang-chu
        templateUrl : 'views/edit.html', // đường dẫn đến view
        controller: ProductEditController
    })
})