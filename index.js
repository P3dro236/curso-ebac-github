$(document).ready(function () {

  $("header a").click(function(){
    $("header a").removeClass("active")
    $(this).addClass("active")
  })
});