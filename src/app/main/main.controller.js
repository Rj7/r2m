(function() {
  'use strict';

  angular
    .module('road2math')
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
        //.state('login', {
        //  url: "/login",
        //  templateUrl: "login.html",
        //  controller: "LoginCheckController"
        //})
        .state('Dashboard', {
          url: "/Dashboard",
          templateUrl: "app/dashboard/dashboard.html",
          //controller: "LoginCheckController"
        });

    })
    .controller('MainController', ['$scope', '$location', MainController]);

  /** @ngInject */
  function MainController($scope, $location) {
    var vm = this;
    vm.a = "abc";
    vm.mentor_login_display = false;
    vm.student_login_display = false;
    vm.register_display = false;
    vm.login_as = true;
    vm.student_login_list = false;
    vm.student_password = false;
    vm.mentor_types = ['Parent', 'Student']


    vm.mentor_login_display_function= function() {
      vm.mentor_login_display = true;
      vm.student_login_display = false;
      vm.register_display = false;
      vm.login_as = false;
      vm.student_login_list = false;
      vm.student_password = false;
    }

    vm.student_login_display_function= function() {
      vm.mentor_login_display = false;
      vm.student_login_display = true;
      vm.register_display = false;
      vm.login_as = false;
      vm.student_login_list = false;
      vm.student_password = false;
    }

    vm.register_display_function = function(){
      vm.mentor_login_display = false;
      vm.student_login_display = false;
      vm.register_display = true;
      vm.login_as = false;
      vm.student_login_list = false;
      vm.student_password = false;
    }

    vm.login_as_display_function = function(){
      vm.student_login_display = false;
      vm.mentor_login_display = false;
      vm.register_display = false;
      vm.login_as = true;
      vm.student_login_list = false;
      vm.student_password = false;
    }

    vm.student_login_list_function = function(){

      vm.student_list = ['Raja', 'Suresh'];

      vm.mentor_login_display = false;
      vm.student_login_display = false;
      vm.register_display = false;
      vm.login_as = false;
      vm.student_login_list = true;
      vm.student_password = false;
    }

    vm.student_password_function = function(){
      console.log("raja");
      vm.student_login_display = false;
      vm.mentor_login_display = false;
      vm.register_display = false;
      vm.login_as = false;
      vm.student_login_list = false;
      vm.student_password = true;
    }


    vm.login_mentor = function(){
      console.log('login');
      $location.path("Dashboard")

    }

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1448582199696;
    //vm.showToastr = showToastr;

    //
    //activate();
    //
    //function activate() {
    //  getWebDevTec();
    //  $timeout(function() {
    //    vm.classAnimation = 'rubberBand';
    //  }, 4000);
    //}
    //
    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}
    //
    //function getWebDevTec() {
    //  vm.awesomeThings = webDevTec.getTec();
    //
    //  angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //    awesomeThing.rank = Math.random();
    //  });
    //  console.log(vm.awesomeThings);
    //}
    //
    //vm.myInterval = 3000;
    //vm.slides = [
    //  {
    //    image: 'http://lorempixel.com/400/200/'
    //  },
    //  {
    //    image: 'http://lorempixel.com/400/200/food'
    //  },
    //  {
    //    image: 'http://lorempixel.com/400/200/sports'
    //  },
    //  {
    //    image: 'http://lorempixel.com/400/200/people'
    //  }
    //];

  }
})();

