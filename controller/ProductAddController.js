window.ProductAddController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products';
    //kiem tra du lieu co hop le hay khong,
    $scope.kiemTraDuLieu = {
        name: false, // ko loi thi mac dinh la false
        price: false,
    }
    $scope.onSubmitForm = function() {
         // gán 1 biến để kiểm tra lỗi, nếu 1 trong 2 trường lỗi thì update thành true
         let flag = false;
         if(!$scope.inputValue || !$scope.inputValue.name) { //nếu không có inputValue hoặc không có name {
             $scope.kiemTraDuLieu.name = true;
             flag = true;   
         }
         if(!$scope.inputValue || !$scope.inputValue.price) { //nếu không có inputValue hoặc không có price {
             $scope.kiemTraDuLieu.price = true;
             flag = true;   
         }
         if(!flag){
             // tạo ra đối tượng item mới để thêm vào 
            var newItem =  {
                ...$scope.inputValue,
            }
            //khi thêm dữ liệu mới thì phải sử dụng phương thức post
            $http.post(
                apiUrl,
                newItem // dữ liệu để thêm vào 
            ).then(function(response){
                // trạng thái của tk thêm mới là 201
                if(response.status == 201) {
                    $location.path('/product/list')
                }
            })
         }
    }
}