$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var heightInput = parseInt($("input#height").val());
    if (heightInput < 36) {
      $('#rides1').show();
    } else if (heightInput < 48) {
      $('#rides2').show();
    } else {
      $('#rides3').show();
    }
    event.preventDefault();
  });
});
