'use strict';

(function () {

  window.formAction = {
    disableFieldsets: function(bool) {
      var fieldsets = document.querySelector('.notice__form').querySelectorAll('fieldset');
      for (var i = 0; i < fieldsets.length; i++) {
        fieldsets[i].disabled = bool;
      }
    }
  }

  var inputTypeOfHouse = document.querySelector('#type');
  inputTypeOfHouse.addEventListener('change', onTypeOfHouseChange);

  var inputTimeIn = document.querySelector('#timein');
  inputTimeIn.addEventListener('change', onInputTimeInChange);

  window.formAction.disableFieldsets(true);
  disableInputTimeOut();
  initForm();

  function onTypeOfHouseChange(evt) {
    switch (evt.target.value) {
      case 'bungalo':
        var BUNGALOPRICE = 0;
        changeInputPrice(BUNGALOPRICE);
        break;
      case 'flat':
        var FLATPRICE = 1000;
        changeInputPrice(FLATPRICE);
        break;
      case 'house':
        var HOUSEPRICE = 5000;
        changeInputPrice(HOUSEPRICE);
        break;
      case 'palace':
        var PALACEPRICE = 10000;
        changeInputPrice(PALACEPRICE);
        break;
    }
  }

  function changeInputPrice(price) {
    var inputPrice = document.querySelector('#price');
    inputPrice.min = price;
    inputPrice.value = price;
  }

  function onInputTimeInChange(evt) {
    var inputTimeOut = document.querySelector('#timeout');
    var inputTimeOutOptions = inputTimeOut.querySelectorAll('option');
    for (var i = 0; i < inputTimeOutOptions.length; i++) {
      inputTimeOutOptions[i].disabled = false;
    }
    disableInputTimeOut();
    inputTimeOut.selectedIndex = inputTimeIn.selectedIndex;
  }

  function initForm() {
    var form = document.querySelector('.notice__form');
    form.method = 'post';
    form.target = 'https://js.dump.academy/keksobooking';

    initInputTitle(form);
    initInputAddress(form);
    initInputPrice(form);
  }

  function initInputTitle(form) {
    var inputTitle = form.querySelector('#title');
    inputTitle.required = true;
    inputTitle.minLength = 30;
    inputTitle.maxLength = 100;
  }
  function initInputAddress(form) {
    var inputAddress = form.querySelector('#address');
    inputAddress.readOnly = true;
    inputAddress.required = true;
  }
  function initInputPrice(form) {
    var inputPrice = form.querySelector('#price');
    inputPrice.required = true;
    inputPrice.min = 0;
    inputPrice.max = 1000000;
    inputPrice.value = 1000;
  }

  function disableInputTimeOut() {
    var inputTimeOutOptions = document.querySelector('#timeout').querySelectorAll('option');
    for (var i = (inputTimeIn.selectedIndex + 1); i < inputTimeOutOptions.length; i++) {
      inputTimeOutOptions[i].disabled = true;
    }
  }

})();
