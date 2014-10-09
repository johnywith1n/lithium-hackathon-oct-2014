'use strict';

console.log('\'Allo \'Allo! Content script');

var fakeSubmitButtonId = "__fakeSubmitButton";
var expertsModalBodyId = "__modalBody";
var modalDoneButtonId = "__modalDoneButton";

function getSubmitButton () {
  return $('input[type="submit"][value="Post"]');
}

function getModalBody() {
  return $('#' + expertsModalBodyId);
}

function getModalDoneButton () {
  return $('#' + modalDoneButtonId);
}

function getModalHTML () {
  return '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog">' +
              '<div class="modal-content">' +
                '<div class="modal-header">' +
                  '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                  '<h4 class="modal-title" id="myModalLabel">Ask Experts</h4>' +
                '</div>' +
                '<div id="' + expertsModalBodyId + '" class="modal-body">' +
                  'hello' +
                '</div>' +
                '<div class="modal-footer">' +
                  '<button id="'+ modalDoneButtonId +'" type="button" class="lia-btn lia-btn-primary" data-dismiss="modal">Done</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
}

function appendExpertsToBody (experts) {

}

function createFakeSubmitButton () {
  var fakeSubmitButton, submitButton;

  fakeSubmitButton = $('<input id="' + fakeSubmitButtonId + '" data-toggle="modal" data-target="#myModal" class="lia-button lia-button-primary lia-button-Submit-action" value="Post" type="button">');
  fakeSubmitButton.click(function () {
    getTopicExperts();
  });

  submitButton = getSubmitButton();
  submitButton.hide();
  submitButton.parent().append(fakeSubmitButton);
  submitButton.parent().append(getModalHTML());

  getModalDoneButton().click(function () {
    appendExpertsToBody();
    getFakeSubmitButton().hide();
    getSubmitButton().show();
  });

  return fakeSubmitButton;
}

function getFakeSubmitButton () {
  return $('#' + fakeSubmitButtonId);
}

function getTopicExperts () {

}

function main () {
  createFakeSubmitButton();
}

$(document).ready(function () {
  main();
});
