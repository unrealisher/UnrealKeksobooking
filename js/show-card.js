'use strict';

(function() {
  function typeOfHouse(houseType) {
    switch(houseType) {
      case 'flat':
        return 'Квартира';
        break;
      case 'house':
        return 'Дом';
        break;
      case 'bungalo':
        return 'Бунгало';
        break;
    }
  }

  function removeMapCard() {
    var activeMapCard = document.querySelector('.map__card');
    if (!activeMapCard) {
      return;
    }
    var map = document.querySelector('.map');
    map.removeChild(activeMapCard);
    window.pinsAction.deactivatePin();
  }

  window.cardAction = {

    initMapCard: function (activeOffer) {
      removeMapCard();
      var mapCardElement = document.querySelector('template').content.querySelector('.map__card').cloneNode(true);
      var popupAvatar = mapCardElement.querySelector('.popup__avatar');
      popupAvatar.src = activeOffer.author.avatar;
      var popupClose = mapCardElement.querySelector('.popup__close');
      popupClose.addEventListener('click', removeMapCard);
      var popupTitle = mapCardElement.querySelector('h3');
      popupTitle.textContent = activeOffer.offer.title;
      var popupAdress = mapCardElement.querySelectorAll('p')[0];
      var popupPrice = mapCardElement.querySelector('.popup__price');
      popupPrice.innerHTML = activeOffer.offer.price + '&#x20bd;/ночь';
      var popupType = mapCardElement.querySelector('h4');
      popupType.textContent = typeOfHouse(activeOffer.offer.type);
      var popupRoom = mapCardElement.querySelectorAll('p')[1];
      popupRoom.textContent = activeOffer.offer.rooms + ' комнаты для ' + activeOffer.offer.guests + ' гостей';
      var popupCheck = mapCardElement.querySelectorAll('p')[2];
      popupCheck.textContent = 'Заезд после ' + activeOffer.offer.checkin + ', выезд до ' + activeOffer.offer.checkout;
      var popupFeature = mapCardElement.querySelector('.popup__features');
      popupFeature.textContent = null;
      for (var j = 0; j < activeOffer.offer.features.length; j++) {
        var newFeature = document.createElement('li');
        newFeature.className = 'feature feature--' + activeOffer.offer.features[j];
        popupFeature.appendChild(newFeature);
      }
      var popupDescription = mapCardElement.querySelectorAll('p')[3];
      popupDescription.textContent = activeOffer.offer.description;
      var popupPhoto = mapCardElement.querySelector('.popup__pictures');

      var map = document.querySelector('.map');
      var mapFiltersContainer = map.querySelector('.map__filters-container');
      map.insertBefore(mapCardElement, mapFiltersContainer);
   },

    onMapCardEscPress: function (evt) {
      var ESCKEY = 27;
      if (evt.keyCode === ESCKEY) {
        removeMapCard();
        document.removeEventListener('keydown', window.cardAction.onMapCardEscPress);
      }
    }

  }
})();
