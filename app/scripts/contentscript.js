'use strict';

console.log('\'Allo \'Allo! Content script');

var fakeSubmitButtonId = '__fakeSubmitButton';
var expertsModalBodyId = '__modalBody';
var modalDoneButtonId = '__modalDoneButton';

function getSubmitButton () {
  return $('input[type="submit"][value="Post"]');
}

function getModalBody() {
  return $('#' + expertsModalBodyId);
}

function getModalDoneButton () {
  return $('#' + modalDoneButtonId);
}

function getFakeSubmitButton () {
  return $('#' + fakeSubmitButtonId);
}

function getMessageBodyElement () {
  return $('#tinyMceEditor_ifr').contents().find('#tinymce');
}

function getModalHTML () {
  return '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog">' +
              '<div class="modal-content">' +
                '<div class="modal-header">' +
                  '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                  '<h1 class="modal-title" id="myModalLabel">Ask Experts</h1>' +
                '</div>' +
                '<div id="' + expertsModalBodyId + '" class="modal-body">' +
                '</div>' +
                '<div class="modal-footer">' +
                  '<button id="'+ modalDoneButtonId +'" type="button" class="lia-btn lia-btn-primary" data-dismiss="modal">Done</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
}

function getSelectedExperts () {
  return ['user1', 'user2', 'user3'];
}

function getTopicExperts () {
  addExpertsToModal(['user1', 'user2', 'user3']);
}

function appendExpertsToBody (experts) {
  var mentions = '';

  experts.forEach(function (expert) {
    mentions = mentions + '<p>@' + expert + '</p>';
  });

  getMessageBodyElement().append(mentions);
}

function createFakeSubmitButton () {
  var fakeSubmitButton, submitButton;

  fakeSubmitButton = $('<input id="' + fakeSubmitButtonId + '" data-toggle="modal" data-target="#myModal" class="lia-button lia-button-primary lia-button-Submit-action" value="Post" type="button">');
  fakeSubmitButton.click(function () {
    getTopicExperts();
    fakeSubmitButton.off('click');
  });

  submitButton = getSubmitButton();
  submitButton.hide();
  submitButton.parent().append(fakeSubmitButton);
  submitButton.parent().append(getModalHTML());

  getModalDoneButton().click(function () {
    getModalDoneButton.off('click');
    appendExpertsToBody(getSelectedExperts());
    getFakeSubmitButton().hide();
    getSubmitButton().show();
  });

  return fakeSubmitButton;
}

function addExpertsToModal (usernames) {
  var table = $('<table class="lia-list-wide" style="width:300px"></table>');
  getModalBody().append(table);

  table.append('<thead><tr><th class="lia-data-cell-primary lia-data-cell-text t-first">Users</th></tr></thead>');

  var tbody = $('<tbody></tbody>');
  table.append(tbody);

  usernames.forEach(function (username) {
    var row = '<div class="UserProfileSummary lia-user-item lia-user-info-group">'+
                '<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">'+
                    '<a><img class="lia-user-avatar-message" src="http://skypec.i.lithium.com/t5/image/serverpage/avatar-name/wink/avatar-theme/candy/avatar-collection/Skype/avatar-display-size/message"></a>'+
                '</div>'+
                '<div class="lia-user-attributes">'+
                  '<div class="lia-user-name">'+
                    '<span class="UserName lia-user-name" style="margin-left:5px">'+
                      '<a>' + username + '</a>' +
                    '</span>'+
                  '</div>'+
                '</div>'+
              '</div>';
    tbody.append('<tr><td>'+ row + '</td></tr>');
  });
}

function main () {
  createFakeSubmitButton();
}

$(document).ready(function () {
  main();
});
