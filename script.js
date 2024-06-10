//your JS code here. If required.
var div = document.getElementById('browser-info');
var browserName = navigator.appName;
var version = navigator.appVersion;
div.innerHTML = "You are using " + browserName + " version " + version;