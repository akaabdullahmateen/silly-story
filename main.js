const protagonistNameField = document.getElementById("protagonist-name");
const generateButton = document.querySelector(".generate");
const storyElement = document.querySelector(".story");

const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

let protagonistName;

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

generateButton.addEventListener("click", generate);

function generate() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (protagonistNameField.value !== "") {
    protagonistName = protagonistNameField.value;
    newStory = newStory.replace("Bob", protagonistName);
  }

  if (document.getElementById("metric").checked) {
    const pound = 300;
    const stone = pound / 14;
    const weight = `${Math.round(stone).toString()} stone`;

    const fahrenheit = 94;
    const centigrade = ((fahrenheit - 32) * 5) / 9;
    const temperature = `${Math.round(centigrade).toString()} centigrade`;

    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  storyElement.textContent = newStory;
}
