(function() {
  'use strict';

  angular
    .module('road2math')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;
    vm.a = "abc";
    vm.mentor_login_display = false;
    vm.student_login_display = false;
    vm.register_display = false;
    vm.login_as = true;

    vm.mentor_login_display_function= function() {
      vm.mentor_login_display = true;
      vm.student_login_display = false;
      vm.register_display = false;
      vm.login_as = false;
    }

    vm.student_login_display_function= function() {
      vm.mentor_login_display = false;
      vm.student_login_display = true;
      vm.register_display = false;
      vm.login_as = false;
    }

    vm.register_display_function = function(){
      vm.mentor_login_display = false;
      vm.student_login_display = false;
      vm.register_display = true;
      vm.login_as = false;
    }

    vm.login_as_display_function = function(){
      vm.student_login_display = false;
      vm.mentor_login_display = false;
      vm.register_display = false;
      vm.login_as = true;
    }

    vm.student_login_list = function(){

      vm.student_list = ['Raja', 'Suresh'];
      vm.mentor_login_display = false;
      vm.student_login_display = false;
      vm.register_display = true;
      vm.login_as = false;
    }
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1448582199696;
    vm.showToastr = showToastr;


    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
      console.log(vm.awesomeThings);
    }

    vm.myInterval = 3000;
    vm.slides = [
      {
        image: 'http://lorempixel.com/400/200/'
      },
      {
        image: 'http://lorempixel.com/400/200/food'
      },
      {
        image: 'http://lorempixel.com/400/200/sports'
      },
      {
        image: 'http://lorempixel.com/400/200/people'
      }
    ];

  }
})();

