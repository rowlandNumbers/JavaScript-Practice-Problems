/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class purse {
  constructor(
    // Defines Paramenters:
    designer,
    color,
    type,
    size,
    pockets,
    
  ){
    // Define Properties:
    this.designer = designer;
    this.color = color;
    this.type = type;
    this.size = size;
    this.pockets = pockets;
    this.model = {
    return: this.size + " " + this.color + " " + this.designer + " " + this.type + " " + "Bag."
  };
  }
  /*// Add methods like normal functions:
  this.model = function() {
    return this.size + " " + this.color + " " + this.designer + " " + this.type + " " + "bag."
  }*/

}

export default purse;
