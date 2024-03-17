let app = angular.module("myForm", []);
app.controller("myController", function ($scope) {
    $scope.name = "Nguyễn Văn A";
    $scope.input={
        name :"Nguyễn Văn A"
    }
//   $scope.input = {
//     danhSach: {
//       All: false,
//       A: false, // Giá trị mặc định cho checkbox
//       B: false,
//       C: false,
//       D: false,
//     },
//   };
//   $scope.danhMuc = [
//     {
//       id: 1,
//       name: "Nước"
//     },
//     {
//         id: 2,
//         name: "Bánh"
//     },
//     {
//         id: 3,
//         name: "Kẹo"
//     },
//   ];
//   $scope.selectedItem = 1;
  // $scope.name = "Nguyễn Thành Trung";
  $scope.submit = function () {
    console.log($scope.input);
    console.log($scope.input.name);
    // radio
    // console.log($scope.input.gender);
    // checkbox
    // console.log($scope.input.danhSach);
    // select
    // console.log($scope.selectedItem);
    // console.log($scope.selectedItem.id);
  };
});
