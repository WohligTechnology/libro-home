var swiper = {};
var userData = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.section = {
        one: "views/section/mainhome.html",
        two: "views/section/travellife.html",
        three: "views/section/locallife.html",
        four: "views/section/mylife.html",
        five: "views/section/share.html",
    };
    $scope.changePage = function(text) {
       // console.log(text);
        var length = $(".fp-section").length;
       // console.log(length);
       // console.log($(".fp-section"));
        if (length === 0) {
            $('.fullpage').fullpage();
        }
        //console.log(text);
        $scope.homeval = text;
        switch (text) {
            case "share":
                $.fn.fullpage.moveTo(5);
                break;
            case "mylife":
                $.fn.fullpage.moveTo(4);
                break;
            case "locallife":
                $.fn.fullpage.moveTo(3);
                break;
            case "travellife":
                $.fn.fullpage.moveTo(2);
                break;
            case "home":
                $.fn.fullpage.moveTo(1);
                break;
            default:
                $.fn.fullpage.moveTo(1);
                break;
        }
    };
    setTimeout(function() {
        $('.scene').parallax();
        $('.fullpage').fullpage({
            //Navigation
            onLeave: function(index, nextIndex, direction) {

                $timeout(function() {
                    swiper.slideTo(nextIndex - 1);
                    //playing the video

                    $('video').get(nextIndex - 1).load();
                    $('video').get(nextIndex - 1).play();
                   // console.log(nextIndex - 1);
                }, 0);

            }
        });


        $scope.vidplay = function() {
            var video = document.getElementById("Video1");
            var button = document.getElementById("play");
            if (video.paused) {
                video.play();
            }
        };
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            mousewheelControl: false,
            mousewheelForceToAxis: false,
            keyboardControl: false,
            parallax: true,
            hashnav: true
        });
    }, 500);

    $scope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            $('body').addClass('fp-');
            $scope.changePage($stateParams.id);
        }, 1000);
    });
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $interval, $state, $timeout, $uibModal,$rootScope) {
        //Used to name the .html file

    console.log("Testing Consoles");
    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.animationsEnabled = true;
    if (typeof $.fn.fullpage.destroy == 'function') {
        $.fn.fullpage.destroy('all');
    }
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
    var checktwitter = function(data, status) {
       
        var repdata = {};
       // console.log(data);
        if (data._id) {
            $interval.cancel(stopinterval);
            ref.close();
            $.jStorage.set("isLoggedIn","true");
            userData = data;
            $state.go('home');
           //$rootScope.isLoggedIn = true;
            // NavigationService.saveUser(data.data);
        } else {
              
        }
    };
    var callAtIntervaltwitter = function() {
        NavigationService.getProfile(checktwitter, function(err) {
            $scope.template.getProfile();
            console.log(err);
        });
    };
    var authenticatesuccess = function(data, status) {
        console.log("authenticate successful"); 
        $ionicLoading.hide();
        if (data._id) {
            // $scope.closeAllModals();
             //$scope.isLoggedIn = true;
             
            // NavigationService.saveUser(data.data);
        }
    };
    $scope.socialLogin = function(loginTo){
        // console.log(loginTo);
        ref = window.open(adminURL + "/user/"+loginTo, '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('closed', function(event) {
            NavigationService.getProfile(authenticatesuccess, function(err) {
                console.log(err);
            });
            $interval.cancel(stopinterval);
        });
    };
    // var getUserDetails = function(){
    //     NavigationService.getProfile(function(data,status){
    //         $rootScope.data = data;
    //     },
    //     function(err){
    //         console.log(err);
    //     });
    // }
    // stopinterval = $interval(getUserDetails, 2000);
    
})

    .controller('ForgotPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
       // console.log("Testing Consoles");
        $scope.template = TemplateService.changecontent("forgot-password");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.animationsEnabled = true;
        $scope.template.header = "";
        $scope.template.footer = "";
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }

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
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }


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
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }


    })

.controller('BookingCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("booking");
        $scope.menutitle = NavigationService.makeactive("Booking");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.animationsEnabled = true;
        $scope.template.header = "";
        $scope.template.footer = "";
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }


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
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }


    })

.controller('headerctrl', function($scope, TemplateService,NavigationService, $state, $interval) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
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
    $scope.isLoggedIn = $.jStorage.get("isLoggedIn");

      $scope.logout = function(){
          NavigationService.logout(function(){
          $.jStorage.flush();
          $scope.isLoggedIn = $.jStorage.get("isLoggedIn");
          $state.go('home');
        },
        function(err) {
            console.log(err);
        });
      };
    $scope.data = userData;
     
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
