'use strict';

(function() {

  var mainPin = document.querySelector('.map__pin--main');
  mainPin.addEventListener('mousedown', onMainPinFirstMouseDown);
  mainPin.addEventListener('mousedown', onMainPinMouseDown);

  function onMainPinFirstMouseDown() {
    var map = document.querySelector('.map');
    map.classList.remove('map--faded');
    window.pinsAction.showPins();
    var form = document.querySelector('.notice__form');
    form.classList.remove('notice__form--disabled');
    window.formAction.disableFieldsets(false);
    mainPin.removeEventListener('mousedown', onMainPinFirstMouseDown);
  }

  function onMainPinMouseDown(evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    }

    function onMainPinMouseMove(moveEvt) {
      moveEvt.preventDefault();
      if ((moveEvt.clientY < 100 || moveEvt.clientY > 500) || (moveEvt.clientX < 400 || moveEvt.clientX > 1500)) {
       return;
      }
      var address = document.querySelector('#address');
      address.value = 'x: ' + moveEvt.clientX + ', y: ' + moveEvt.clientY;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      }

      mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
    }

    function onMainPinMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMainPinMouseMove);
      document.removeEventListener('mouseup', onMainPinMouseUp);
    }

    document.addEventListener('mousemove', onMainPinMouseMove);
    document.addEventListener('mouseup', onMainPinMouseUp);
  }

})();
