
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        'use strict';
        $urlRouterProvider
            .otherwise('/home');

        $stateProvider
            .state('main',{
                url:'/home',
                controller: 'mainController',
                 templateUrl: 'app/main/main.html'});

        $stateProvider.state('main.coach',{
            url:'/coachers',
            controller: 'coachersCtrl',
                views:{
                    app:{
                    templateUrl: 'app/main/coach/coachers.html'}
                }
            })
        .state('main.articles',{
            url:'/articles',
            controller: 'articlesController',
                views: {
                    app: {
                        templateUrl: 'app/main/article/articles.html'}
                    }
                })
        .state('main.aboutUs',{
            url:'/aboutUs',
            controller: 'aboutUs',
                views: {
                    app: {
                        templateUrl: 'app/main/aboutUs/aboutUs.html'}
                }
            })

});
