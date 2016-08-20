var injectGoogleMaps = function() {
  var googleMapsScript = document.createElement('script');
  googleMapsScript.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyB1cx6eia9GuHtAigxOzyeO8GW5dLVhiX0&callback=googleMapsCallback';
  var headTag = document.getElementsByTagName('head')[0];
  headTag.appendChild(googleMapsScript);
}

var start = new Date;
function timestamp() { return (Date.now() - start).toString() + 'ms' }

var subscribers = [];
var mapsLoaded = false;
var scriptAdded = false;

function googleMapsCallback() {
  console.log('['+timestamp()+'] Google Maps loaded')
  mapsLoaded = true;

  subscribers.forEach(function(subscriber) {
    subscriber();
  });

  // clear subscribers
  subscribers.splice(0, subscribers.length);
}

var loadMaps = function(callback) {
  if (mapsLoaded) {
    callback()
    return
  }

  if (!scriptAdded) {
    scriptAdded = true
    injectGoogleMaps()
  }

  subscribers.push(callback);
}

setTimeout(function() {
  console.log('before loadMaps series');

  var step = 500;
  for (var i = 0; i < 5; ++i) {
    (function(delay, i) {
      setTimeout(function() {
          loadMaps(function() {
            console.log('[' + timestamp() + '] :: ' + i + ' maps loaded');
          });
      }, delay);
    })(step * i, i)
  }

  console.log('after loadMaps series');
}, 2000);
