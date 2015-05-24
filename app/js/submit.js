var submit = angular.module('submit',[]);
submit.controller('submitCtrl',nextPage);
function nextPage($scope,$locationProvider){
    $scope.nextPage=function(view){
        $locationProvider.path(view);    
    };
};