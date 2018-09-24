'use strict';

(function() {

  var MINPRICE = 1000;
  var MAXPRICE = 1000000;

  var MINROOMS = 1;
  var MAXROOMS = 5;

  var MINGUESTS = 4;
  var MAXGUESTS = 20;

  var MINX = 300;
  var MAXX = 900;
  var MINY = 100;
  var MAXY = 500;

  var ESCKEY = 27;

  window.offers = [
    {
      'author': {
        'avatar': 'img/avatars/user01.png'
      },
      'offer': {
        'title': 'Большая уютная квартира',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'flat',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '12.00',
        'checkout': '12.00',
        'features': ['wifi', 'dishwasher'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user02.png'
      },
      'offer': {
        'title': 'Маленькая неуютная квартира',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'flat',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '14.00',
        'checkout': '12.00',
        'features': ['wifi', 'dishwasher', 'elevator'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user03.png'
      },
      'offer': {
        'title': 'Огромный прекрасный дворец',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'house',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '14.00',
        'checkout': '13.00',
        'features': ['wifi', 'conditioner', 'washer', 'parking'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user04.png'
      },
      'offer': {
        'title': 'Маленький ужасный дворец',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'house',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '13.00',
        'checkout': '12.00',
        'features': ['wifi'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user05.png'
      },
      'offer': {
        'title': 'Красивый гостевой домик',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'house',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '13.00',
        'checkout': '13.00',
        'features': ['wifi', 'parking'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user06.png'
      },
      'offer': {
        'title': 'Некрасивый негостеприимный домик',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'house',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '14.00',
        'checkout': '14.00',
        'features': ['washer', 'elevator'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user07.png'
      },
      'offer': {
        'title': 'Уютное бунгало далеко от моря',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'bungalo',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '12.00',
        'checkout': '12.00',
        'features': ['wifi', 'parking', 'conditioner'],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
    {
      'author': {
        'avatar': 'img/avatars/user08.png'
      },
      'offer': {
        'title': 'Неуютное бунгало по колено в воде',
        'address': '{{location.x}}, {{location.y}}',
        'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
        'type': 'bungalo',
        'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
        'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
        'checkin': '14.00',
        'checkout': '12.00',
        'features': [],
        'description': '',
        'photos': []
      },
      'location': {
        'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
        'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
      }
    },
  ];

  var map = document.querySelector('.map');

  var mainPin = map.querySelector('.map__pin--main');
  var mapPins = map.querySelector('.map__pins');

  var onMainPinFirstMouseup = function () {
    map.classList.remove('map--faded');
    window.pinsAction.showPins();
    var form = document.querySelector('.notice__form');
    form.classList.remove('notice__form--disabled');
    window.formAction.activeForm();
    mainPin.removeEventListener('mouseup', onMainPinFirstMouseup);
  }

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


  var initMapCard = function (offer) {
    var mapCardElement = document.querySelector('template').content.querySelector('.map__card').cloneNode(true);
    var popupAvatar = mapCardElement.querySelector('.popup__avatar');
    var popupClose = mapCardElement.querySelector('.popup__close');
    var popupTitle = mapCardElement.querySelector('h3');
    var popupAdress = mapCardElement.querySelectorAll('p')[0];
    var popupPrice = mapCardElement.querySelector('.popup__price');
    var popupType = mapCardElement.querySelector('h4');
    var popupRoom = mapCardElement.querySelectorAll('p')[1];
    var popupCheck = mapCardElement.querySelectorAll('p')[2];
    var popupFeature = mapCardElement.querySelector('.popup__features');
    var popupDescription = mapCardElement.querySelectorAll('p')[3];
    var popupPhoto = mapCardElement.querySelector('.popup__pictures');
    popupAvatar.src = offer.author.avatar;
    popupTitle.textContent = offer.offer.title;
    popupPrice.innerHTML = offer.offer.price + '&#x20bd;/ночь';
    popupType.textContent = typeOfHouse(offer.offer.type);
    popupRoom.textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
    popupCheck.textContent = 'Заезд после ' + offer.offer.checkin + ', выезд до ' + offer.offer.checkout;
    popupFeature.textContent = null;
    for (var j = 0; j < offer.offer.features.length; j++) {
      var newFeature = document.createElement('li');
      newFeature.className = 'feature feature--' + offer.offer.features[j];
      popupFeature.appendChild(newFeature);
    }
    popupDescription.textContent = offer.offer.description;
    var previousMapCard = map.querySelector('.map__card');
    if (previousMapCard != null) {
      map.removeChild(previousMapCard);
    }
    popupClose.addEventListener('click', mapCardRemove);
    var mapFiltersContainer = map.querySelector('.map__filters-container');
    map.insertBefore(mapCardElement, mapFiltersContainer);

  }

  var mapCardRemove = function() {
    var activeMapCard = map.querySelector('.map__card');
    var activePin = map.querySelector('.map__pin--active');
    activePin.classList.remove('map__pin--active');
    map.removeChild(activeMapCard);
  }

  var onMapCardEscPress = function (evt) {
    if (evt.keyCode === ESCKEY) {
      mapCardRemove();
      document.removeEventListener('keydown', onMapCardEscPress);
    }
  }

  mapPins.addEventListener('click', function(evt) {
    var objTarget;
    var previousPin = map.querySelector('.map__pin--active');
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
          initMapCard(offers[i]);
          break;
        }
      }
      document.addEventListener('keydown', onMapCardEscPress);
    }
  });

  mainPin.addEventListener('mouseup', onMainPinFirstMouseup);
})();
