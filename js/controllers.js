angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

<<<<<<< HEAD
.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
=======
.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
>>>>>>> origin/master
  //Used to name the .html file

  console.log("Testing Consoles");

<<<<<<< HEAD
  $scope.template = TemplateService.changecontent("home");
=======
  $scope.template = TemplateService.changecontent("home-hope");
>>>>>>> origin/master
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

<<<<<<< HEAD
  // $scope.homeswipers = [{
  //   image: 'img/slide/2.jpg',
  // }, {
  //   image: 'img/slide/2.jpg',
  // }, {
  //   image: 'img/slide/2.jpg',
  // }, ];
  setTimeout(function() {
    var swiper = new Swiper('.swiper-container', {
=======
  setTimeout(function() {
    // $('.fullpage').fullpage({
    //   //Navigation
    //   lockAnchors: false,
    //   navigation: true,
    //   navigationPosition: 'right',
    //   showActiveTooltip: false,
    //   slidesNavigation: true,
    //
    //   afterRender: function() {
    //     //playing the video
    //     $('video').get(0).play();
    //   }
    // });


    $scope.vidplay = function() {
      var video = document.getElementById("Video1");
      var button = document.getElementById("play");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };
    var swiper1 = new Swiper('.swiper1', {
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 0,
      mousewheelControl: true,
      mousewheelForceToAxis: true,
      keyboardControl: true,
      parallax: true,
      hashnav: true,

    });
    var swiper2 = new Swiper('.swiper2', {
>>>>>>> origin/master
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
<<<<<<< HEAD
      spaceBetween: 5,
      mousewheelControl: true
    });
  }, 500);

})

=======
      spaceBetween: 0,
      mousewheelControl: true,
      mousewheelForceToAxis: true,
      keyboardControl: true,
      parallax: true,
      hashnav: true,

    });
    swiper2.params.control = swiper1;
  swiper1.params.control = swiper2;
  }, 500);

  // $scope.$on('$viewContentLoaded', function() {
  //   $timeout(function() {
  //     $('body').addClass('fp-');
  //     $scope.changePage($stateParams.id);
  //   }, 1000);
  // });
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.animationsEnabled = true;

    $scope.openalreadyexist = function(size) {
      $uibModal.open({
        animation: true,
        templateUrl: 'views/modal/alreadyexist.html',
        controller: 'LoginCtrl',
        scope: $scope,
        windowClass: "notexist",
        size: "sm"
      });
    };

  })
  .controller('ForgotPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("forgot-password");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.animationsEnabled = true;
    $scope.template.header = "";
    $scope.template.footer = "";
    $scope.opensucessfull = function(size) {
      $uibModal.open({
        animation: true,
        templateUrl: 'views/modal/sucessfull.html',
        controller: 'ForgotPasswordCtrl',
        scope: $scope,
        windowClass: "notexist",
        size: "sm"
      });
    };

  })
  .controller('ForgotPasswordEmailCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("forgot-password-email");
    $scope.menutitle = NavigationService.makeactive("Forgot Password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.animationsEnabled = true;
    $scope.template.header = "";
    $scope.template.footer = "";

  })
  .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.animationsEnabled = true;
    $scope.template.header = "";
    $scope.template.footer = "";

  })
  .controller('AdvertiseCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("advertise");
    $scope.menutitle = NavigationService.makeactive("Advertise");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.animationsEnabled = true;
    $scope.template.header = "";
    $scope.template.footer = "";

  })

>>>>>>> origin/master
.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
<<<<<<< HEAD
  $.fancybox.close(true);
=======
  $scope.oneAtATime = true;
  $.fancybox.close(true);
  $scope.getslide = "menu-out";
  $scope.getnav = function() {
    if ($scope.getslide == "menu-in") {
      $scope.getslide = "menu-out";
      $scope.onebar = "";
      $scope.secondbar = "";
      $scope.thirdbar = "";
      $scope.buttonpos = "";
    } else {
      $scope.getslide = "menu-in";
      $scope.onebar = "firstbar";
      $scope.secondbar = "secondbar";
      $scope.thirdbar = "thirdbar";
      $scope.buttonpos = "buttonpos";
    }
  };
  $scope.isopen = false;
  $scope.opensearch = function() {
    $scope.isopen = !$scope.isopen;
  };
>>>>>>> origin/master
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
