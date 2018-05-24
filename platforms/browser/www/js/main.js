$(function(){
  // var $current_path = window.location.hash;
  // $.address.change( function(e) {
  //   $changed_path = e.path.replace(new RegExp('^'+$current_path, 'i'), '');
  //   $current_path = e.path;
  //   $level = e.pathNames.length;
  //   $changed_path_array = $changed_path.replace(/^\/|\/$/g,'').split('/');
  //   $changed_level = $level - $changed_path_array.length;
  // });
  // $('a[href^="#"]').bind('click vclick', function() {
  //   location.hash = $(this).attr('href');
  //   return false;
  // });
  $.mobile.loadPage("page-3.html", {
    type: false,
    reloadPage: false,
    type: 'get'
  });
});
