$(document).ready(function(){

  $("form#survey").submit(function(event){
  var heightInput = parseInt("input#height");
    $(".height").text(heightInput);

    if (height < 36) {
      $('#rides1').show();
    } else if (height < 48) {
      $('#rides1').show();
      $('#rides2').show();
    } else {
      $('#rides1').show();
      $('#rides2').show();
      $('#rides3').show();
    }

    event.preventDefault();

  });
});
