'use strict';

(function() {
  // var MINPRICE = 1000;
  // var MAXPRICE = 1000000;
  //
  // var MINROOMS = 1;
  // var MAXROOMS = 5;
  //
  // var MINGUESTS = 4;
  // var MAXGUESTS = 20;
  //
  // var MINX = 300;
  // var MAXX = 900;
  // var MINY = 100;
  // var MAXY = 500;
  // window.offers = [
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user01.png'
  //     },
  //     'offer': {
  //       'title': 'Большая уютная квартира',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'flat',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '12.00',
  //       'checkout': '12.00',
  //       'features': ['wifi', 'dishwasher'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user02.png'
  //     },
  //     'offer': {
  //       'title': 'Маленькая неуютная квартира',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'flat',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '14.00',
  //       'checkout': '12.00',
  //       'features': ['wifi', 'dishwasher', 'elevator'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user03.png'
  //     },
  //     'offer': {
  //       'title': 'Огромный прекрасный дворец',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'house',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '14.00',
  //       'checkout': '13.00',
  //       'features': ['wifi', 'conditioner', 'washer', 'parking'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user04.png'
  //     },
  //     'offer': {
  //       'title': 'Маленький ужасный дворец',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'house',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '13.00',
  //       'checkout': '12.00',
  //       'features': ['wifi'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user05.png'
  //     },
  //     'offer': {
  //       'title': 'Красивый гостевой домик',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'house',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '13.00',
  //       'checkout': '13.00',
  //       'features': ['wifi', 'parking'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user06.png'
  //     },
  //     'offer': {
  //       'title': 'Некрасивый негостеприимный домик',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'house',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '14.00',
  //       'checkout': '14.00',
  //       'features': ['washer', 'elevator'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user07.png'
  //     },
  //     'offer': {
  //       'title': 'Уютное бунгало далеко от моря',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'bungalo',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '12.00',
  //       'checkout': '12.00',
  //       'features': ['wifi', 'parking', 'conditioner'],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  //   {
  //     'author': {
  //       'avatar': 'img/avatars/user08.png'
  //     },
  //     'offer': {
  //       'title': 'Неуютное бунгало по колено в воде',
  //       'address': '{{location.x}}, {{location.y}}',
  //       'price': Math.round(Math.random()*(MAXPRICE - MINPRICE) + MINPRICE),
  //       'type': 'bungalo',
  //       'rooms': Math.round(Math.random()*(MAXROOMS - MINROOMS) + MINROOMS),
  //       'guests': Math.round(Math.random()*(MAXGUESTS - MINGUESTS) + MINGUESTS),
  //       'checkin': '14.00',
  //       'checkout': '12.00',
  //       'features': [],
  //       'description': '',
  //       'photos': []
  //     },
  //     'location': {
  //       'x': Math.round(Math.random()*(MAXX - MINX) + MINX),
  //       'y': Math.round(Math.random()*(MAXY - MINY) + MINY)
  //     }
  //   },
  // ];

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
    },

    onLoadError: function(message) {
      var errorWindow = document.createElement('div');
      errorWindow.classList.add('error-div');
      errorWindow.textContent = message;
      var main = document.querySelector('main');
      main.appendChild(errorWindow);
      window.setTimeout(function() {
        main.removeChild(errorWindow);
      }, 3000);
      // initPins();
    }
}

  var url = 'https://js.dump.academy/keksobooking/data';
  window.load(url, 'GET', onUploadSuccess, window.onLoadError);
  var mapPins = document.querySelector('.map__pins');
  mapPins.addEventListener('click', onPinClick);

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
    if (objTarget.classList.contains('map__pin--main')) {
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

  function onUploadSuccess(data) {
    window.offers = data;
    initPins();
  }

})();
