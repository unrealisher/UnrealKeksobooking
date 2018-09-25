'use strict';

(function () {

  var inputTypeOfHouse = document.querySelector('#type');
  inputTypeOfHouse.addEventListener('change', onTypeOfHouseChange);

  var inputTimeIn = document.querySelector('#timein');
  inputTimeIn.addEventListener('change', onInputTimeInChange);

  disabledFieldsets(true);
  disableTimeOut();
  formInit();

  function onTypeOfHouseChange() {
    var BUNGALOPRICE = 0;
    var FLATPRICE = 1000;
    var HOUSEPRICE = 5000;
    var PALACEPRICE = 10000;
    switch (inputTypeOfHouse.value) {
      case 'bungalo':
        inputPriceInit(BUNGALOPRICE);
        break;
      case 'flat':
        inputPriceInit(FLATPRICE);
        break;
      case 'house':
        inputPriceInit(HOUSEPRICE);
        break;
      case 'palace':
        inputPriceInit(PALACEPRICE);
        break;
    }
  }

  function onInputTimeInChange() {
    var inputTimeOutOptions = form.querySelector('#timeout').querySelectorAll('option');
    for (var i = 0; i < inputTimeOutOptions.length; i++) {
      inputTimeOutOptions[i].disabled = false;
    }
    disableTimeOut();
    inputTimeOut.selectedIndex = inputTimeIn.selectedIndex;
  }

  function formInit() {
    var form = document.querySelector('.notice__form');
    form.method = 'post';
    form.target = 'https://js.dump.academy/keksobooking';

    inputTitleInit();
    inputAddressInit();
    inputPriceInit();

    function inputTitleInit() {
      var inputTitle = form.querySelector('#title');
      inputTitle.required = true;
      inputTitle.minLength = 30;
      inputTitle.maxLength = 100;
    }
    function inputAddressInit() {
      var inputAddress = form.querySelector('#address');
      inputAddress.readOnly = true;
      inputAddress.required = true;
    }

    function inputPriceInit() {
      var inputPrice = form.querySelector('#price');
      inputPrice.required = true;
      inputPrice.min = 0;
      inputPrice.max = 1000000;
      inputPrice.value = 1000;
    }
  }

  function disabledFieldsets(bool) {
    var fieldsets = document.querySelectorAll('fieldset');
    for (var i = 0; i < fieldsets.length; i++) {
      fieldsets[i].disabled = bool;
    }
  }

  function disableTimeOut() {
    var inputTimeOutOptions = document.querySelector('#timeout').querySelectorAll('option');
    for (var i = (inputTimeIn.selectedIndex + 1); i < inputTimeOutOptions.length; i++) {
      inputTimeOutOptions[i].disabled = true;
    }
  }

  window.formAction = {
    disabledFieldsets: function(bool) {
      var fieldsets = document.querySelector('.notice__form').querySelectorAll('fieldset');
      for (var i = 0; i < fieldsets.length; i++) {
        fieldsets[i].disabled = bool;
      }
    }
  }

})();
