const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was a dark and stormy night when :insertx: decided to go for a midnight stroll. As they wandered through the eerie forest, they stumbled upon :inserty:. Suddenly, a bolt of lightning struck nearby, illuminating the scene. Startled, :insertx: quickly :insertz:. Fortunately, they made it home safely, shaken but unharmed.";

const insertX = ["Alice", "John", "Emily"];
const insertY = ["an old abandoned mansion", "a mysterious cave", "a spooky graveyard"];
const insertZ = ["ran back home", "hid behind a tree", "called for help"];

randomize.addEventListener('click', function () {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let name = "Bob";
  if(customName.value !== "") {
    name = customName.value;
  }

  storyText = `It was a dark and stormy night when ${xItem} decided to go for a midnight stroll. As they wandered through the eerie forest, they stumbled upon ${yItem}. Suddenly, a bolt of lightning struck nearby, illuminating the scene. Startled, ${xItem} quickly ${zItem}. Fortunately, they made it home safely, shaken but unharmed.`;

  story.style.visibility = "visible";
  story.innerText = storyText;
});

