/**
 * The reveal-slider
 *
 * The speaker can use this plugin to control their reveal slides.
 */
var UI = require('ui');
var Vibe = require('ui/vibe');
var Vector2 = require('vector2');
var Settings = require('settings');

 var slideShow = new UI.Text({
     position: new Vector2(0, 60),
     size: new Vector2(144, 168),
     font: 'gothic-24',
     text: '1 - 1',
     color: 'black',
     backgroundColor: 'white',
     textAlign: 'center'
 });

Settings.config(
    { url: 'http://leftstick.github.io/pebble-reveal-slider/' },
  function(e) {
      console.log('opening configurable: ' +  Settings.option('address'));
  },
  function(e) {
      var address = Settings.option('address');
      if(!address){
          return;
      }
      subTitle.text('current position');
      wind.add(slideShow);
  }
);

var wind = new UI.Window();

var title = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    font: 'gothic-24-bold',
    text: 'Reveal Slider',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center'
});
wind.add(title);

var subTitle = new UI.Text({
    position: new Vector2(0, 30),
    size: new Vector2(144, 168),
    font: 'gothic-18',
    text: 'current position',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center'
});

var address = Settings.option('address');

if(!address){
    subTitle.text('Slide address has not been set. Please configure it first!');
}

wind.add(subTitle);

if(address){
    wind.add(slideShow);
}

wind.show();

wind.on('click', 'up', function() {
  console.log('Up clicked!');
});

wind.on('click', 'down', function() {
  console.log('down clicked!');
});

wind.on('click', 'select', function() {
  console.log('select clicked!');
});