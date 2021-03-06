'use strict';

(function() {
  window.load = function(url, method, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      }
      else {
        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function() {
      onError('Произошла ошибка соединения');
    })

    xhr.addEventListener('timeout', function() {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    })
    xhr.timeout = 10000;
    xhr.responseType = 'json';
    xhr.open(method, url);
    xhr.send();
  }
})();
