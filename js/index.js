// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    //if (!event.target.matches('.box')) ;

    // Don't follow the link
    event.preventDefault();

    var id = event.target.id;
    if (id == '' && event.target.parentNode) id = event.target.parentNode.id;
    
    if (id.length > 4 && id.substr(0, 4) == 'menu') { location.href = 'content.html?area=' + id.substr(4); }
    
    // Log the clicked element in the console
    console.log(event.target);

}, false);
}

