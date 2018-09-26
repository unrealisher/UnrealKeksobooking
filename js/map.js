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

  var onMainPinFirstMouseDown = function() {
    map.classList.remove('map--faded');
    window.pinsAction.showPins();
    var form = document.querySelector('.notice__form');
    form.classList.remove('notice__form--disabled');
    window.formAction.disableFieldsets(false);
    mainPin.removeEventListener('mousedown', onMainPinFirstMouseDown);
  }

  var onMainPinMouseDown = function(evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    }

    var onMainPinMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
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

    var onMainPinMouseUp = function(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMainPinMouseMove);
      document.removeEventListener('mouseup', onMainPinMouseUp);
    }

    document.addEventListener('mousemove', onMainPinMouseMove);
    document.addEventListener('mouseup', onMainPinMouseUp);
  }

  mainPin.addEventListener('mousedown', onMainPinFirstMouseDown);
  mainPin.addEventListener('mousedown', onMainPinMouseDown);
})();
