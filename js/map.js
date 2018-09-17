'use strict'

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

var MARGINX = 20;
var MARGINY = 40;

var offers = [
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
var mapCardTemplate = document.querySelector('template').content.querySelector('.map__card');
var mapPins = map.querySelector('.map__pins');
var mapFiltersContainer = map.querySelector('.map__filters-container');

map.classList.remove('map--faded');

var typeOfHouse = function (houseType) {
  var returnType;
  if (houseType == 'flat') {
    returnType = 'Квартира';
  }
  else if (houseType == 'house') {
    returnType = 'Дом';
  }
  else {
    returnType = 'Бунгало';
  }
  return returnType;
}

var initOffersPins = function (offers) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < offers.length; i++) {
    var newElement = document.createElement('button');
    newElement.style = 'left: ' + (offers[i].location.x + MARGINX) + 'px; top: ' + (offers[i].location.y + MARGINY) + 'px;';
    newElement.className = 'map__pin';
    newElement.innerHTML = '<img src="' + offers[i].author.avatar + '" width="40" height="40" draggable="false">';
    fragment.appendChild(newElement);
  }
  mapPins.appendChild(fragment);
}

var initMapCards = function (offers, mapCardTemplate) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 1; i++) {
    var mapCardElement = mapCardTemplate.cloneNode(true);
    var popupAvatar = mapCardElement.querySelector('.popup__avatar');
    var popupTitle = mapCardElement.querySelector('h3');
    var popupAdress = mapCardElement.querySelectorAll('p')[0];
    var popupPrice = mapCardElement.querySelector('.popup__price');
    var popupType = mapCardElement.querySelector('h4');
    var popupRoom = mapCardElement.querySelectorAll('p')[1];
    var popupCheck = mapCardElement.querySelectorAll('p')[2];
    var popupFeature = mapCardElement.querySelector('.popup__features');
    var popupDescription = mapCardElement.querySelectorAll('p')[3];
    var popupPhoto = mapCardElement.querySelector('.popup__pictures');
    popupAvatar.src = offers[i].author.avatar;
    popupTitle.textContent = offers[i].offer.title;
    popupPrice.innerHTML = offers[i].offer.price + '&#x20bd;/ночь';
    popupType.textContent = typeOfHouse(offers[i].offer.type);
    popupRoom.textContent = offers[i].offer.rooms + ' комнаты для ' + offers[i].offer.guests + ' гостей';
    popupCheck.textContent = 'Заезд после ' + offers[i].offer.checkin + ', выезд до ' + offers[i].offer.checkout;
    popupFeature.textContent = null;
    for (var j = 0; j < offers[i].offer.features.length; j++) {
      var newFeature = document.createElement('li');
      newFeature.className = 'feature feature--' + offers[i].offer.features[j];
      popupFeature.appendChild(newFeature);
    }
    popupDescription.textContent = offers[i].offer.description;
    fragment.appendChild(mapCardElement);
  }
  map.insertBefore(fragment, mapFiltersContainer);
}
initOffersPins(offers);
initMapCards(offers, mapCardTemplate);
