angular.module("Kelly")
.config(function($stateProvider){
    $stateProvider
    
       .state('home',{
        url: '',
        templateUrl: 'components/main-component.html'
    })
   
    .state('join',{
        url: '/join',
        templateUrl: 'components/join-component.html',
        controller: 'JoinController',
        controllerAs: 'jc'
    })
 
    .state('login',{
        url: '/login',
        templateUrl: 'components/login.html',
        controller: 'LoginController',
        controllerAs: 'lc'
    }) 

 .state('team',{
        url: '/team',
        templateUrl: 'components/team-component.html',

    }) 

 .state('services',{
        url: '/services',
        templateUrl: 'components/services-component.html',

    }) 
     .state('about',{
        url: '/about',
        templateUrl: 'components/about-component.html',

    }) 
     .state('contact',{
        url: '/contact',
        templateUrl: 'components/contact-component.html',

    }) 


})