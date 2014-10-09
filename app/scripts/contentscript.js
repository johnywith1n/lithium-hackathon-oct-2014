'use strict';

console.log('\'Allo \'Allo! Content script');

function getSubmitButton () {
  return $('input[type="submit"][value="Post Your Comment"]');
}

function createFakeSubmitButton () {
  var fakeSubmitButton, submitButton;
  fakeSubmitButton = $('<input class="lia-button lia-button-primary lia-button-Submit-action" value="Post Your Comment" type="button">');
  submitButton = getSubmitButton();

  submitButton.hide();
  submitButton.parent().append(fakeSubmitButton);

  return fakeSubmitButton;
}


$(document).ready(function () {
  createFakeSubmitButton();
});