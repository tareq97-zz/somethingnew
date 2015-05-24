var postModule= angular.module("post",['ngRoute','ngTouch']);
postModule.config(router);
function router($routeProvider)
{
    $routeProvider.when('/submit',{templateUrl: '../pages/stable.html'});
};

postModule.controller('dataCtrl',function($scope){    
    $scope.database = {mockdb:[{No:1,First:'Tareq',Last:'Nazir'},{No:2,First:'Shareq',Last:'Nazir'}]}
});