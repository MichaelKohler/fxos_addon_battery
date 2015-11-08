(function () {
  if (document.documentElement) {
    initialize();
  } else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  var containerEl;

  function initialize() {
    var statusBarEl = document.querySelector('.statusbar');
    containerEl = document.querySelector('#statusbar-batterypercentage');

    if (statusBarEl.contains(containerEl)) {
      statusBarEl.removeChild(containerEl);
    }

    // Build the battery percentage element
    statusBarEl.appendChild(createPercentageElement());

    attachListeners();
  }

  function getBatteryLevel() {
    return Math.floor(window.navigator.battery.level * 100) + '%';
  }

  function attachListeners() {
    battery.addEventListener('levelchange', function() {
      containerEl.textContent = getBatteryLevel();
    });
  }

  function createPercentageElement() {
    var containerEl = document.createElement('div');

    containerEl.setAttribute('id', 'statusbar-batterypercentage');
    containerEl.style.order = '2';
    containerEl.style.fontSize = '1.4rem';
    containerEl.style.fontWeight = '400';
    containerEl.style.lineHeight = '1.6rem';
    containerEl.textContent = getBatteryLevel();

    return containerEl;
  }
}());
