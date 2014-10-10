'use strict';

console.log('\'Allo \'Allo! Content script');

var fakeSubmitButtonId = '__fakeSubmitButton';
var expertsModalBodyId = '__modalBody';
var modalDoneButtonId = '__modalDoneButton';
var expertsModalTableId = '__modalExpertsTable';

//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});

var selectedUsers = {};
var spinner = new Spinner().spin();

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

function getMessageBodyTextContent () {
  return getMessageBodyElement().get(0).textContent.replace('\n', ' ');
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
  var result = [];

  for (var user in selectedUsers) {
    if (selectedUsers[user]) {
      result.push(user);
    }
  }

  return result;
}

function getTopicExperts () {
  $.post('http://10.253.190.66:8080/api/users', getMessageBodyTextContent()).done(function (res) {
    addExpertsToModal(['user1', 'user2', 'user3']);
    spinner.stop();
  }).fail(function (e) {
    console.error(e);
  });
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

  $('#' + expertsModalBodyId).append(spinner.el);

  getModalDoneButton().click(function () {
    getModalDoneButton().off('click');
    appendExpertsToBody(getSelectedExperts());
    getFakeSubmitButton().hide();
    getSubmitButton().show();
  });

  return fakeSubmitButton;
}

function addExpertsToModal (usernames) {
  var table = $('<table id="' + expertsModalTableId + '" class="lia-list-wide"></table>');
  getModalBody().append(table);

  table.append('<thead><tr><th class="lia-data-cell-primary lia-data-cell-text t-first">Users</th > <th class="lia-data-cell-primary lia-data-cell-text">Expert On</th></tr></thead>');

  var tbody = $('<tbody></tbody>');
  table.append(tbody);

  usernames.forEach(function (username) {
    var id = '__tableRow_' + username;
    var row = '<tr id="' + id + '" class="lia-list-row" >' +
                '<td>' +
                  '<div class="UserProfileSummary lia-user-item lia-user-info-group">'+
                    '<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">'+
                        '<a><img class="lia-user-avatar-message" src="' + getAvatar() + '"></a>'+
                    '</div>'+
                    '<div class="lia-user-attributes">'+
                      '<div class="lia-user-name">'+
                        '<span class="UserName lia-user-name" style="margin-left:5px">'+
                          '<a>' + username + '</a>' +
                        '</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>' +
                '</td>' +
                '<td class="lia-data-cell-primary lia-data-cell-text">Skype</td>' +
              '</tr>';

    tbody.append(row);

    $('#' + id).click(function (e) {
      if (selectedUsers[username]) {
        delete selectedUsers[username];
        $(e.currentTarget).css('background-color', 'white');
      } else {
        selectedUsers[username] = true;
        $(e.currentTarget).css('background-color', '#ededed');
      }
    });
  });
}

function getAvatar() {
  var avatars = ['http://skypec.stage.lithium.com/t5/image/serverpage/avatar-name/dog/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message',
                 'http://skypec.stage.lithium.com/t5/image/serverpage/avatar-name/bear/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message',
                 'http://skypec.stage.lithium.com/t5/image/serverpage/avatar-name/bird/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message',
                 'http://skypec.stage.lithium.com/t5/image/serverpage/avatar-name/elephant/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message',
                 'http://skypec.stage.lithium.com/t5/image/serverpage/avatar-name/pig/avatar-theme/candy/avatar-collection/animals/avatar-display-size/message']
  return avatars[Math.floor(Math.random() * 5)];
}

function main () {
  createFakeSubmitButton();
}

$(document).ready(function () {
  main();
});
