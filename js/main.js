(function() {

  adjustMedia();

  $(window).on('resize orientationChange', function(e) {
    adjustMedia();
  });

  function adjustMedia() {
    var vph = $(window).height();   // viewport
    $('#content').height(vph);
  }

})();
