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

  var form = document.querySelector('.notice__form');
  form.addEventListener('submit', onFormSubmit);

  var inputTypeOfHouse = form.querySelector('#type');
  inputTypeOfHouse.addEventListener('change', onTypeOfHouseChange);

  var inputTimeIn = form.querySelector('#timein');
  inputTimeIn.addEventListener('change', onInputTimeInChange);

  window.formAction.disableFieldsets(true);
  disableInputTimeOut();
  initForm();

  function onFormSubmit(evt) {
    evt.preventDefault();
    window.load('https://js.dump.academy/keksobooking', 'POST', onDownloadSuccess, window.pinsAction.onLoadError);
    resetForm();
  }

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

  function resetForm() {
    var inputTitle = document.querySelector('#title');
    inputTitle.value = '';

    var inputType = document.querySelector('#type');
    inputType.value = 'flat';

    var inputPrice = document.querySelector('#price');
    inputPrice.value = 1000;

    var inputTimeIn = document.querySelector('#timein');
    inputTimeIn.value = '12:00';

    var inputTimeOut = document.querySelector('#timeout');
    inputTimeOut.value = '12:00';

    var inputRooms = document.querySelector('#room_number');
    inputRooms.value = '1';

    var inputGuests = document.querySelector('#capacity');
    inputGuests.value = '3';

    var inputsFeatures = document.querySelectorAll('.form__element>input[name=features]');
    for (var i = 0; i < inputsFeatures.length; i++) {
      inputsFeatures[i].checked = false;
    }

    var textareaDescription = document.querySelector('#description');
    textareaDescription.value = '';
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
    form.method = 'POST';
    form.enctype = 'multipart/form-data';

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

  function onDownloadSuccess() {
    alert('Данные отправлены');
  }

})();
