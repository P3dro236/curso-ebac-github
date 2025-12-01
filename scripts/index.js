$(document).ready(function () {
  $("nav button").on("click", ()=>{
    $("nav").toggleClass("navigate-open", [200])
    setTimeout(() => {
      $(".hidden").toggleClass("flex-box", [100])
    }, 250);
  })
  $("#input-tel").mask("(000) 00000-0000", {
    placeholder:"(012) 12345-6789"
  })
  $("form").on("submit", (e) => {
    e.preventDefault()
  })
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = $($(this).attr('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }
});
});