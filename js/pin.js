'use strict';

(function() {

  window.pinsAction = {

    showPins: function() {
      var pins = mapPins.querySelectorAll('.map__pin');
      for (var i = 0; i < pins.length; i++) {
        pins[i].classList.remove('hidden');
      }
    },

    deactivatePin: function() {
      var activePin = document.querySelector('.map__pin--active');
      if (!activePin) {return;}
      activePin.classList.remove('map__pin--active');
    }

  }



  var mapPins = document.querySelector('.map__pins');
  mapPins.addEventListener('click', onPinClick);

  initPins();

  function onPinClick(evt) {
    var objTarget;
    if (evt.target.localName === 'img') {
      objTarget = evt.target.parentElement;
    }
    else if (evt.target.localName === 'button') {
      objTarget = evt.target;
    }
    else {
      return;
    }
    var objImageSrc = objTarget.querySelector('img').src;
    for (var i = 0; i < offers.length; i++) {
      if (objImageSrc.indexOf(offers[i].author.avatar) !== -1) {
        window.cardAction.initMapCard(offers[i]);
        break;
      }
    }
    window.pinsAction.deactivatePin();
    objTarget.classList.add('map__pin--active');
    document.addEventListener('keydown', window.cardAction.onMapCardEscPress);
  }

  function initPins() {
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
  }

})();
