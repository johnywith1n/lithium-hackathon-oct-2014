'use strict';

console.log('\'Allo \'Allo! Content script');

var fakeSubmitButtonId = "__fakeSubmitButton";

function getSubmitButton () {
  return $('input[type="submit"][value="Post"]');
}

function createFakeSubmitButton () {
  var fakeSubmitButton, submitButton;
  fakeSubmitButton = $('<input id="' + fakeSubmitButtonId + '" class="lia-button lia-button-primary lia-button-Submit-action" value="Post" type="button">');
  submitButton = getSubmitButton();

  submitButton.hide();
  submitButton.parent().append(fakeSubmitButton);

  return fakeSubmitButton;
}

function getFakeSubmitButton () {
  return $('#' + fakeSubmitButtonId);
}

function main () {
  createFakeSubmitButton();
}

$(document).ready(function () {
  main();
});
