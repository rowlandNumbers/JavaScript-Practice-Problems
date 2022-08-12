/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

/*class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack; */


/* class purse {
  constructor(
    // Defines Paramenters:
    designer,
    color,
    type,
    size,
    model,
  ) {
    //Defines Properties:
    this.designer = designer;
    this.color = color;
    this.type = type;
    this.size = size;
    this.model = model;

    //Add methods like normal functions:
    function() {
    return this.size + " " + this.color + " " + this.designer +" " + this.type +" " + "bag."


  }


  

}; */

import purse from "./file.js";
const everydayPurse = new purse (
    "Chanel",
    "Black",
    "Crossbody",
    "small",
    4,
    "Everyday Purse",
);

console.log("The object Everyday Purse: ", everydayPurse);



  
const eveningPurse = new purse (
  "Fendi",
  "Gold",
  "Clutch",
  "medium",
  1,
  "Evening Purse",
);

console.log("The object Evening Purse: ", eveningPurse);

const workPurse = new purse (
  "Coach",
  "Beige",
  "Satchel",
  "Medium",
  12,
  
);
console.log("The object work purse: ", workPurse);