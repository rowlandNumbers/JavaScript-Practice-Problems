/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const jar = {
  material: "plastic",
  contents: "shea butter",
  volume: 32,
  lidClosed: true,
  toggleLid: function (lidStatus) {
    this.lidClosed = lidStatus;
  },
};

console.log("Object: Jar's contents", jar.contents);

const can = {
  material: "aluminum",
  volume: 12,
  tabOpen: false,
  toggleTab: function (tabStatus) {
    this.tabOpen = tabStatus;
  },
  contents: {
    liquid: 0.5,
    gas: 0.5,
  },
};

console.log("The Can object's contents: ", can.contents);

const mug = {
  material: "ceramic",
  color: "Navy Blue",
  size: 20,
  contents: {
    coffee: true,
    toggleCoffee: function (coffeeStatus) {
      this.coffee = coffeeStatus;
    },
    creamer: true,
    toggleCreamer: function (creamerStatus) {
      this.creamer = creamerStatus;
    },
  },
  empty: false,
  toggleEmpty: function (emptyStatus) {
    this.Empty = emptyStatus;
  },
};

console.log("The mug object's creamer status", mug.contents);
