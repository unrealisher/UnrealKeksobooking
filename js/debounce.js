(function() {
  var lastTimeout;

  window.debounce = function(callback) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    console.log(callback);
    // if (callback !== 'function') {return;}
    lastTimeout = window.setTimeout(callback, 300);
  }
})();
