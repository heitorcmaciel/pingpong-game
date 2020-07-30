angular.module('portal')
  .factory('AppState', AppState);

  function AppState() {
    return {
      noLogin: false
    }
  };