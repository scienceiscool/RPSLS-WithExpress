// inspiration for the following from:
// http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
$.getScript("router/main.js", function() {
  alert("Script loaded and executed.");

// got the idea for the following from:
// http://www.lynda.com/Ajax-tutorials/Sending-JSON-data-page/114900/120879-4.html
  $.getJSON('router/main.js', function(data) {
/*    var output = '<div class="update">';
    $.each(data, function(key, val) {
      output.stringify
    });
    output += '</div>';*/
    $('#update').html(data);
  });
});

var main = function () {
  "use strict";
  
};

$(document).ready(main);
