var tessel = require('tessel');
var audio = require('audio-vs1053b').use(tessel.port['B']);
var camera = require('camera-vc0706').use(tessel.port['D']);
var fs = require('fs');

var flashLight = tessel.led[1];

function onButtonPress() {
  flashLight.high();
}

function onButtonRelease() {
  flashLight.low();
  takePicture();
}

function playShutterSound() {
  audio.setOutput('headphones', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    var sound = fs.readFileSync('shutter.mp3');
    audio.play(sound, function(err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

function takePicture() {
  camera.takePicture(function(err, image) {
    if (err) {
      console.log('error taking image', err);
    } else {
      var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
      console.log('Picture saving as', name, '...');
      process.sendfile(name, image);

      playShutterSound();
    }
  });
}

camera.on('ready', function() {
  audio.on('ready', function() {
    console.log('OCam is ready...');

    tessel.button.on('press', onButtonPress);
    tessel.button.on('release', onButtonRelease);
  });
});

camera.on('error', function(err) {
  camera.disable();
  console.error(err);
});
