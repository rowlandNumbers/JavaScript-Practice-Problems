/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const tv = {
  brightness: "High",
  toggleBrightness: function (brightnessStatus) {
    this.brightness = brightnessStatus;
  },
  volume: 55,
  toggleVolume: function (volumeStatus) {
    this.volume = volumeStatus;
  },
  powerOn: false,
  togglePower: function (powerStatus) {
    this.powerOn = powerStatus;
  },
};

console.log("The object, TV:", tv);
