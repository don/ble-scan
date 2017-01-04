var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var div = document.querySelector('.app');
        div.appendChild(document.createTextNode('Scanning...'));
        div.appendChild(document.createElement('br'));
        
        // scan for any BLE devices for 10 seconds
        ble.scan([], 10, app.onDeviceDiscovered);
        
        setTimeout(app.scanComplete, 10500);
    },

    onDeviceDiscovered: function(peripheral) {
        // print peripheral details to the the console and the UI
        var peripheralString = JSON.stringify(peripheral, null, 2);
        console.log(peripheralString);

        var div = document.querySelector('.app');
        div.appendChild(document.createTextNode('Found Device'));
        var pre = document.createElement('pre');
        pre.innerText = peripheralString;
        div.appendChild(pre);
    },

    scanComplete: function() {
        // update the UI indicating the scan is complete
        var div = document.querySelector('.app');
        div.appendChild(document.createTextNode('Scan complete.'));
    }    

};

app.initialize();