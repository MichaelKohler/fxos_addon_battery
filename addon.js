(function () {
  // If injecting into an app that was already running at the time
  // the app was enabled, simply initialize it.
  if (document.documentElement) {
    initialize();
  }

  // Otherwise, we need to wait for the DOM to be ready before
  // starting initialization since add-ons are usually (always?)
  // injected *before* `document.documentElement` is defined.
  else {
    window.addEventListener('DOMContentLoaded', initialize);
  }
  
  var containerEl;

  function initialize() {
    var battery = window.navigator.battery;
    
    // Get the status bar bar
    var statusBarEl = document.getElementById('statusbar-maximized');

    // If there is a old one, remove it first
    containerEl = document.getElementById('statusbar-batterypercentage');
    if (statusBarEl.contains(containerEl)) {
      statusBarEl.removeChild(containerEl);
    }
    
    // Build the battery percentage element
    containerEl = document.createElement('div');
    containerEl.setAttribute('id', 'statusbar-batterypercentage');
    containerEl.style.order = '-3';
    containerEl.style.fontSize = '1.5rem';
    containerEl.style.fontWeight = '400';
    containerEl.style.lineHeight = '1.6rem';
    containerEl.textContent = battery.level * 100 + '%';
    
    statusBarEl.appendChild(containerEl);
   
    battery.addEventListener('levelchange', function() {
      containerEl.textContent = battery.level * 100 + '%';
    });
  }
}());
