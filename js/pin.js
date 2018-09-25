'use strict';

(function() {
  var mapPins = document.querySelector('.map__pins');
  //Не нужна самовызывающаяся функция
  (function() {
    var MARGINX = 20;
    var MARGINY = 40;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.offers.length; i++) {
      var newElement = document.createElement('button');
      newElement.style = 'left: ' + (window.offers[i].location.x + MARGINX) + 'px; top: ' + (offers[i].location.y + MARGINY) + 'px;';
      newElement.className = 'map__pin hidden';
      newElement.innerHTML = '<img src="' + window.offers[i].author.avatar + '" width="40" height="40" draggable="false">';
      fragment.appendChild(newElement);
    }
    mapPins.appendChild(fragment);
  })();

  mapPins.addEventListener('click', function(evt) {
    var objTarget;
    var previousPin = mapPins.querySelector('.map__pin--active');
    if (evt.target.localName === 'img') {
      objTarget = evt.target.parentElement;
    }
    else if (evt.target.localName === 'button') {
      objTarget = evt.target;
    }
    if (objTarget != null && !objTarget.classList.contains('map__pin--main')) {
      if (previousPin != null) {
        previousPin.classList.remove('map__pin--active');
      }
      objTarget.classList.add('map__pin--active');
      var objImageSrc = objTarget.querySelector('img').src;
      for (var i = 0; i < offers.length; i++) {
        if (objImageSrc.indexOf(offers[i].author.avatar) != -1) {
          window.initMapCard(offers[i]);
          break;
        }
      }
      document.addEventListener('keydown', window.cardAction.MapCardEscPress);
    }
  });

  window.pinsAction = {

    showPins: function() {
      var pins = mapPins.querySelectorAll('.map__pin');
      for (var i = 0; i < pins.length; i++) {
        pins[i].classList.remove('hidden');
      }
    }

  }

})();
