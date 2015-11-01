(function () {
  // If injecting into an app that was already running at the time
  // the app was enabled, simply initialize it. Otherwise initialize it after it
  // is loaded.
  if (document.documentElement) {
    initialize();
  } else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  var containerEl;

  function initialize() {
    var battery = window.navigator.battery;
    var statusBarEl = document.querySelector('.statusbar');
    containerEl = document.getElementById('statusbar-batterypercentage');

    if (statusBarEl.contains(containerEl)) {
      statusBarEl.removeChild(containerEl);
    }

    // Build the battery percentage element
    containerEl = document.createElement('div');
    containerEl.setAttribute('id', 'statusbar-batterypercentage');
    containerEl.style.order = '2';
    containerEl.style.fontSize = '1.5rem';
    containerEl.style.fontWeight = '400';
    containerEl.style.lineHeight = '1.6rem';
    containerEl.textContent = Math.floor(battery.level * 100) + '%';

    statusBarEl.appendChild(containerEl);

    battery.addEventListener('levelchange', function() {
      containerEl.textContent = Math.floor(battery.level * 100) + '%';
    });
  }
}());
