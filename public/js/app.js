angular.module('app', ['ui.router', 'ui.grid', 'ui.grid.selection', 'ui.grid.edit'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/', "")
        $stateProvider
            .state('home', {
                templateUrl: '../views/home.html',
                url: '/'
            })
            .state('dashboard', {
                templateUrl: '../views/dashboard.html',
                url: '/dashboard',
            })
            .state('user_create', {
                templateUrl: '../views/user_create.html',
                url: '/user_create',
                controller: 'userCreate'
            })
            .state('user_manage', {
                templateUrl: '../views/user_manage.html',
                url: '/user_manage',
                controller: 'userManage'
            })
            .state('location_create', {
                templateUrl: '../views/location_create.html',
                url: '/location_create',
                controller: 'locCreate'
            })
            .state('loc_container', {
                templateUrl: '../views/loc_container.html',
                url: '/loc_container',
                controller: 'locContainer'
            })
    })