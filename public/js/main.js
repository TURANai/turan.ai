(() => {
  // <stdin>
  $(function() {
    $(".nav-contact").click(function(e) {
      e.preventDefault();
      $("body").removeClass("base info").addClass("contact");
    });
    $(".nav-info").click(function(e) {
      e.preventDefault();
      $("body").removeClass("base contact").addClass("info");
    });
    $(".nav-back").click(function(e) {
      e.preventDefault();
      $("body").removeClass("info contact").addClass("base");
    });
  });
})();
