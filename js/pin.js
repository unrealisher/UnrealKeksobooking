'use strict';

(function() {
  var map = document.querySelector('.map');

  (function() {
    var MARGINX = 20;
    var MARGINY = 40;
    var fragment = document.createDocumentFragment();
    var mapPins = map.querySelector('.map__pins');
    for (var i = 0; i < window.offers.length; i++) {
      var newElement = document.createElement('button');
      newElement.style = 'left: ' + (window.offers[i].location.x + MARGINX) + 'px; top: ' + (offers[i].location.y + MARGINY) + 'px;';
      newElement.className = 'map__pin hidden';
      newElement.innerHTML = '<img src="' + window.offers[i].author.avatar + '" width="40" height="40" draggable="false">';
      fragment.appendChild(newElement);
    }
    mapPins.appendChild(fragment);
  })();


  window.pinsAction = {

    showPins: function () {
      var pins = map.querySelectorAll('.map__pin');
      for (var i = 0; i < pins.length; i++) {
        pins[i].classList.remove('hidden');
      }
    }

  }

})();
