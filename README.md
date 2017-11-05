# Carpet Guys Mobile App

> The Android & IOS version of the Carpet Guys Mobile App

## Build Setup

``` bash
# install quasar
$ npm install -g quasar-cli

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

## Cordova Setup
``` bash
# navigate to cordova folder
$ cd cordova

# install cordova
$ npm install -g cordova

# Add Platforms
$ cordova platform add ios
$ cordova platform add android

# Emulate to platform *must quasar build first*
$ cordova emulate ios
$ cordova emulate android

# Build and push to connected device *must sign in to device and give computer permissions, as well android must be in developer mode*
$ cordova build android
$ cordova build ios
```
