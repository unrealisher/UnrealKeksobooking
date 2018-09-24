'use strict';

(function () {

  var form = document.querySelector('.notice__form');
  form.method = 'post';
  form.target = 'https://js.dump.academy/keksobooking';

  (function() {
    var fieldsets = form.querySelectorAll('fieldset');
    for (var i = 0; i < fieldsets.length; i++) {
      fieldsets[i].disabled = true;
    }
  })();

  var inputTitle = form.querySelector('#title');
  inputTitle.required = true;
  inputTitle.minLength = 30;
  inputTitle.maxLength = 100;

  var inputAddress = form.querySelector('#address');
  inputAddress.readOnly = true;
  inputAddress.required = true;

  var inputTypeOfHouse = form.querySelector('#type');

  var inputPrice = form.querySelector('#price');
  inputPrice.required = true;
  inputPrice.min = 0;
  inputPrice.max = 1000000;
  inputPrice.value = 1000;

  var onTypeOfHouseChange = function() {
    switch (inputTypeOfHouse.value) {
      case 'bungalo':
        inputPrice.min = 0;
        inputPrice.value = 0;
        break;
      case 'flat':
        inputPrice.min = 1000;
        inputPrice.value = 1000;
        break;
      case 'house':
        inputPrice.min = 5000;
        inputPrice.value = 5000;
        break;
      case 'palace':
        inputPrice.min = 10000;
        inputPrice.value = 10000;
        break;
      default:
      break;
    }
  }
  inputTypeOfHouse.addEventListener('change', onTypeOfHouseChange);

  var inputTimeIn = form.querySelector('#timein');
  var inputTimeOut = form.querySelector('#timeout');
  var inputTimeOutOptions = inputTimeOut.querySelectorAll('option');
  var disableTimeOut = function() {
    for (var i = (inputTimeIn.selectedIndex + 1); i < inputTimeOutOptions.length; i++) {
      inputTimeOutOptions[i].disabled = true;
    }
  }
  disableTimeOut();
  inputTimeIn.addEventListener('change', function() {
    for (var i = 0; i < inputTimeOutOptions.length; i++) {
      inputTimeOutOptions[i].disabled = false;
    }
    disableTimeOut();
    inputTimeOut.selectedIndex = inputTimeIn.selectedIndex;
  });

  window.formAction = {
    activeForm: function() {
      var fieldsets = document.querySelector('.notice__form').querySelectorAll('fieldset');
      for (var i = 0; i < fieldsets.length; i++) {
        fieldsets[i].disabled = false;
      }
    }
  }

})();
