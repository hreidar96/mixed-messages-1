function generateRandomNumber(num) {
  // Gets random number from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

// Message database
const whichHouseAndWand = {
  house: ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"],
  wood: [
    "Ash",
    "Willow",
    "Yew",
    "Fir",
    "Elm",
    "Vine",
    "Holly",
    "Hawthorn",
    "Cypress",
    "Elder",
  ],
  core: [
    "Troll Whisker",
    "Coral",
    "Horned Serpent",
    "Unicorn Tail Hair",
    "Phoenix Feather",
    "Dragon Heartstring",
    "Basilisk Horn",
    "Rougarou Hair",
    "Veela Hair",
    "Thestral Hair",
  ],
};

// way to store message

let assignedHouseAndWand = [];

// Iterate over the the objects
