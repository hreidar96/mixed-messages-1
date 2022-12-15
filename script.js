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

for (let prop in whichHouseAndWand) {
  let optionIdx = generateRandomNumber(whichHouseAndWand[prop].length);

  switch (prop) {
    case "house":
      assignedHouseAndWand.push(
        `You have been assigned the house: "${whichHouseAndWand[prop][optionIdx]}".`
      );
      break;
    case "wood":
      assignedHouseAndWand.push(
        `The wood in your assigned wand is made of: "${whichHouseAndWand[prop][optionIdx]}".`
      );
      break;
    case "core":
      assignedHouseAndWand.push(
        `The core in your assigned wand is made of: "${whichHouseAndWand[prop][optionIdx]}".`
      );
      break;
    default:
      assignedHouseAndWand.push("There is not enough info.");
  }
}

function formatHouseandWand(assignedValues) {
  const formatted = assignedHouseAndWand.join("\n");
  console.log(formatted);
}

formatHouseandWand(assignedHouseAndWand);
