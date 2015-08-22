
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        'use strict';
        $urlRouterProvider
            .when('home', '/home')
            .otherwise('/home');

        $stateProvider
            .state('coach',{
                url:'/home',
                controller: 'mainController',
                 templateUrl: 'app/main/main.html'});
});
