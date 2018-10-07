'use strict';

(function() {


  var selectHouseType = document.querySelector('#housing-type');
  selectHouseType.addEventListener('change', onFilterChange);

  var selectHousePrice = document.querySelector('#housing-price');
  selectHousePrice.addEventListener('change', onFilterChange);

  var selectHouseRooms = document.querySelector('#housing-rooms');
  selectHouseRooms.addEventListener('change', onFilterChange);

  var selectHouseGuests = document.querySelector('#housing-guests');
  selectHouseGuests.addEventListener('change', onFilterChange);

  var inputsFeatures = document.querySelectorAll('#housing-features>input[name=features]');
  inputsFeatures.forEach(function(item, i , inputsFeatures) {
    item.addEventListener('change', onFilterChange);
  });

  function onFilterChange() {
    var filterOffers = window.offers;
    filterOffers = filterTypeOfHouse(filterOffers);
    filterOffers = filterPrice(filterOffers);
    filterOffers = filterRooms(filterOffers);
    filterOffers = filterGuests(filterOffers);
    filterOffers = filterFeatures(filterOffers);
    console.log(filterOffers);
  }

  function filterTypeOfHouse(filterOffers) {
    if (selectHouseType.value !== 'any') {
      filterOffers = filterOffers.filter(function(item) {
        return item.offer.type === selectHouseType.value;
      });
    }
    return filterOffers;
  }

  function filterPrice(filterOffers) {
    switch (selectHousePrice.value) {
      case 'middle':
        filterOffers = filterOffers.filter(function(item) {
          return filterOfferPrice(item.offer.price, 10000, 50000);
        });
        break;
      case 'low':
        filterOffers = filterOffers.filter(function(item) {
          return filterOfferPrice(item.offer.price, 0, 9999);
        });
        break;
      case 'high':
        filterOffers = filterOffers.filter(function(item) {
          return filterOfferPrice(item.offer.price, 50001, Infinity);
        })
        break;
      default:
        break;
    }
    return filterOffers;
  }

  function filterOfferPrice(price, leftPrice, rightPrice) {
    if (price >= leftPrice && price <= rightPrice) {
      return true;
    }
    else {
      return false;
    }
  }

  function filterRooms(filterOffers) {
    if (selectHouseRooms.value !== 'any') {
      filterOffers = filterOffers.filter(function(item) {
        return item.offer.rooms.toString() === selectHouseRooms.value;
      });
    }
    return filterOffers;
  }

  function filterGuests(filterOffers) {
    if (selectHouseGuests.value !== 'any') {
      filterOffers = filterOffers.filter(function(item) {
        return item.offer.guests.toString() === selectHouseGuests.value;
      });
    }
    return filterOffers;
  }

  function filterFeatures(filterOffers) {
      var featureWiFi = document.querySelector('#filter-wifi');
      if (featureWiFi.checked) {
        filterOffers = filterFeature(filterOffers, 'wifi');
      }

      var featureDishWasher = document.querySelector('#filter-dishwasher');
      if (featureDishWasher.checked) {
        filterOffers = filterFeature(filterOffers, 'dishwasher');
      }

      var featureParking = document.querySelector('#filter-parking');
      if (featureParking.checked) {
        filterOffers = filterFeature(filterOffers, 'parking');
      }

      var featureWasher = document.querySelector('#filter-washer');
      if (featureWasher.checked) {
        filterOffers = filterFeature(filterOffers, 'washer');
      }

      var featureElevator = document.querySelector('#filter-elevator');
      if (featureElevator.checked) {
        filterOffers = filterFeature(filterOffers, 'elevator');
      }

      var featureConditioner = document.querySelector('#filter-conditioner');
      if (featureConditioner.checked) {
        filterOffers = filterFeature(filterOffers, 'conditioner');
      }
      return filterOffers;
  }

  function filterFeature(filterOffers, feature) {
    filterOffers = filterOffers.filter(function(item) {
      return item.offer.features.indexOf(feature) !== -1;
    });
    return filterOffers;
  }

})();
