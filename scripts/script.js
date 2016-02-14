var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.myTodo = [ /*
        {"name":"field 1"},
        {"name":"field 2"},
        {"name":"field 3"},
        {"name":"field 4"},
        {"name":"field 5"} */
    ];
    $scope.count = 0;
    $scope.myFunc = function(){
        $scope.myTodo.push({"name":"New TODO Added"});
    }
    $scope.delFunc = function(index){
        $scope.myTodo.splice(index,1);
        return index;
    }
});