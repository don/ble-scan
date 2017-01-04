# BLE Scan

This project a very simple app that uses [cordova-plugin-ble-central](https://github.com/don/cordova-plugin-ble-central) to scan for Bluetooth low energy peripherals. 

## iOS

    $ git clone https://github.com/don/ble-scan.git
    $ cd ble-scan
    $ cordova platform add ios
    $ cordova run ios --device

Note: the first time you run on iOS, you might need to open Xcode and set the development team used for code signing.

    $ open platforms/ios/BLE\ Scan.xcworkspace/

## Android

    $ git clone https://github.com/don/ble-scan.git
    $ cd ble-scan
    $ cordova platform add android
    $ cordova run android --device

