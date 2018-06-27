$(document).bind("mobileinit", function(){
  // $.extend($.mobile, {
  //   property: value
  // });
  // $.mobile.ns = "jquerymobiletv-";
  $.extend($.mobile, {
    ns: "jquerymobiletv-",
    autoInitializePage: false,
    activePageClass: "ui-page-active ui-jqmtv-page-active"
  });
});
