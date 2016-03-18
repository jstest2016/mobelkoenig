$(function() {
  // Run only once
  if (window.initXSS) {
    return;
  }
  window.initXSS = true;
  
  // Notify
  console.log("hello console");

  // Clear the text box
  $('[name=ctl17$tbSearch]')[0].value = '';
  
});
