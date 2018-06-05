// $(document).ready(function(){
  // $('#beatles-page').on("pagebeforecreate", function(event) {
  //   $('#beatles-listview').listview('option', 'filterCallback', defaultSearch);
  //   console.log("page created");
  //   alert('test');
  // });
  // $("#beatles-page").on("pagecontainerload", function(event, ui) {

  // $(document).on("pagecreate", function(event, ui) {
  //   // alert("Test");
  //   console.log("page created");
  // });
// $(function(){
  $(document).on("pagecontainercreate", function(event, ui) {
    console.log("page loaded");
    // $('#beatles-listview').listview('option', 'filterCallback', defaultSearch);
  });
// });
// });
function defaultSearch( text, searchValue) {
  console.log("Text: " + text, ", SearchValue: " + searchValue);
  return text.toLowerCase().indexOf(searchValue) ===  -1;
};

// as of 1.4, filterCallback is deprecated
