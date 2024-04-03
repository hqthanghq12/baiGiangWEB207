window.ProductListController = function ($scope,$http, $location) {
	
	//tạo đường dẫn apiUrl để call tới API 
	var apiUrl = "http://localhost:3000/products";
	$scope.getData = function(){
		//gọi để lấy data
		$http.get(apiUrl).then(function(response){
			// console.log(response);
			//nếu như responnse trả về thành công 
			if(response.status == 200) {
				// tạo ra 1 biến products để hứng dữ liệu từ
				// phía json-server trả về
				$scope.products = response.data;
			}
		})
	}
	$scope.getData();
	$scope.onDelete = function(id){
		let confirm = window.confirm("Bạn có chắc chắn muốn xóa hay không??");
		if(confirm){
			$scope.products =  $scope.products.filter(function(item){
				$http.delete(`${apiUrl}/${id}`).then(function(response){
					if (response.status == 200){
						$scope.getData();
					}
				})
			})
		}
	}
	$scope.onEdit = function (id) {
		$location.path(`/product/${id}/edit`);
	}
	
}