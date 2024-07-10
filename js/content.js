// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    document.addEventListener('click', function (event) {

        // Don't follow the link
        event.preventDefault();

        var id = event.target.id;
        //if (id == '' && event.target.parentNode) id = event.target.parentNode.id;
        if (id.length > 3 && id.substr(0, 3) == 'opt') { 
            /*
                <form>
                    <select style="width:400px;height:40px;" />
                    <option selected>Title</option>
                    <option>Apollo 11 stones</option>
                    </select>
                </form>
            */
            id.substr(3); 
        }
        
        // Log the clicked element in the console
        console.log(event.target);

    }, false);
    
    for (var key in Object.keys(data)) {
        if (data[key].area == 1)) {
            console.log('ok');
        }
    }
    
    
}

