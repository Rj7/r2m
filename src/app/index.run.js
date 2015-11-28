(function() {
  'use strict';

  angular
    .module('road2math')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
