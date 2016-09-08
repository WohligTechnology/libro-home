// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics',
  'ksSwiper'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('mylife', {
      url: "/mylife",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'contact',
      }
    })
    .state('forgot-password', {
      url: "/forgot-password",
      templateUrl: "views/template.html",
      controller: 'ForgotPasswordCtrl'
    })
    .state('forgot-password-email', {
      url: "/forgot-password-email",
      templateUrl: "views/template.html",
      controller: 'ForgotPasswordEmailCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/template.html",
      controller: 'ContactCtrl'
    })
    .state('booking', {
      url: "/booking",
      templateUrl: "views/template.html",
      controller: 'BookingCtrl'
    })
    .state('advertise', {
      url: "/advertise",
      templateUrl: "views/template.html",
      controller: 'AdvertiseCtrl'
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/template.html",
      controller: 'LoginCtrl'
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});


firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});

firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var windowHeight2 = windowHeight + 20;
      console.log("windowHeight2");
      console.log(windowHeight2);
      var addHeight = function() {
        $element.css("height", windowHeight2);
      };
      addHeight();
    }
  };
});
firstapp.directive('scroll', function($window) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var divslide5 = $('#slide5')[0].scrollHeight;
      var winTop = $(window).scrollTop();
      console.log(winTop);
      console.log(divslide5);
      angular.element($window).bind("scroll", function() {
        console.log(divslide5 - 1);
        if (winTop > divslide5) {
          scope.active = true;
          console.log("all done");
        }
      });
    }
  };
});
