'use strict';

(function() {
  var map = document.querySelector('.map');
  var typeOfHouse = function (houseType) {
    var returnType;
    if (houseType === 'flat') {
      returnType = 'Квартира';
    }
    else if (houseType === 'house') {
      returnType = 'Дом';
    }
    else {
      returnType = 'Бунгало';
    }
    return returnType;
  }

  var mapCardRemove = function() {
    var activeMapCard = map.querySelector('.map__card');
    var activePin = map.querySelector('.map__pin--active');
    activePin.classList.remove('map__pin--active');
    map.removeChild(activeMapCard);
  }

   window.initMapCard = function (offer) {
    var mapCardElement = document.querySelector('template').content.querySelector('.map__card').cloneNode(true);
    var popupAvatar = mapCardElement.querySelector('.popup__avatar');
    popupAvatar.src = offer.author.avatar;
    var popupClose = mapCardElement.querySelector('.popup__close');
    popupClose.addEventListener('click', mapCardRemove);
    var popupTitle = mapCardElement.querySelector('h3');
    popupTitle.textContent = offer.offer.title;
    var popupAdress = mapCardElement.querySelectorAll('p')[0];
    var popupPrice = mapCardElement.querySelector('.popup__price');
    popupPrice.innerHTML = offer.offer.price + '&#x20bd;/ночь';
    var popupType = mapCardElement.querySelector('h4');
    popupType.textContent = typeOfHouse(offer.offer.type);
    var popupRoom = mapCardElement.querySelectorAll('p')[1];
    popupRoom.textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
    var popupCheck = mapCardElement.querySelectorAll('p')[2];
    popupCheck.textContent = 'Заезд после ' + offer.offer.checkin + ', выезд до ' + offer.offer.checkout;
    var popupFeature = mapCardElement.querySelector('.popup__features');
    popupFeature.textContent = null;
    for (var j = 0; j < offer.offer.features.length; j++) {
      var newFeature = document.createElement('li');
      newFeature.className = 'feature feature--' + offer.offer.features[j];
      popupFeature.appendChild(newFeature);
    }
    var popupDescription = mapCardElement.querySelectorAll('p')[3];
    popupDescription.textContent = offer.offer.description;
    var popupPhoto = mapCardElement.querySelector('.popup__pictures');

    var previousMapCard = map.querySelector('.map__card');
    if (previousMapCard != null) {
      map.removeChild(previousMapCard);
    }
    var mapFiltersContainer = map.querySelector('.map__filters-container');
    map.insertBefore(mapCardElement, mapFiltersContainer);
  }

  window.cardAction = {

    onMapCardEscPress: function (evt) {
      var ESCKEY = 27;
      if (evt.keyCode === ESCKEY) {
        mapCardRemove();
        document.removeEventListener('keydown', window.cardAction.onMapCardEscPress);
      }
    }

  }
})();
