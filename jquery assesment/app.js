$(document).ready(function(){
$("#passchackerinut").on('focus',function () {
  $(".formbox ul li").slideDown();
}) 
  });

$("#passchackerinut").on("blur",function () {
  $(".formbox ul li").slideUp();
})

$("#passchackerinut").on("keyup",function () {
  passValue = $(this).val();

  if (passValue.match(/[a-z]/g)) {
    $(".lowercase").addClass("active");
  } else {
    $(".lowercase").removeClass("active");
  }
  if (passValue.match(/[A-Z]/g)) {
    $(".upercase").addClass("active");
  } else {
    $(".upercase").removeClass("active");
  }
  if (passValue.match(/[0-9]/g)) {
    $(".Numbric").addClass("active");
  } else {
    $(".Numbric").removeClass("active");
  }
  if (passValue.match(/[~!@#$%^&*]/g)) {
    $(".spacial").addClass("active");
  } else {
    $(".spacial").removeClass("active");
  }
  if (passValue.length == 8 || passValue.length > 8) {
    $(".least").addClass("active");
  } else {
    $(".least").removeClass("active");
  }
})