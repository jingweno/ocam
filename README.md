# OCam

A camera powered by Owen & [Tessel](https://tessel.io).

# Installation

* Plug in the [camera module](https://tessel.io/docs/camera) to port D
* Plug in the [audio module](https://tessel.io/docs/audio) to port B
* Plug in Tessel to your computer

# Running

```
$ npm install -g tessel
$ npm install
$ npm start
```

Press the [config button](https://tessel.io/docs/hardware) to take pictures. Taken pictures will be available in `./pics`.

# What does it do?

When you press the config button, OCam takes a picture, flashes the blue LED light and plays the shutter sound, just like what a boring camera would do.

# Demo

It's [live](https://www.youtube.com/watch?v=Qnx3irrP0Gc).
