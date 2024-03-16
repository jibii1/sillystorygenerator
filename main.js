const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// New story template
let storyText = "Once upon a time, in a land far away, :insertx: decided to embark on an epic journey to :inserty:. Along the way, they encountered :insertz:. It was a thrilling adventure that they would never forget.";

const insertX = ["a brave knight", "a curious explorer", "an adventurous pirate"];
const insertY = ["a hidden treasure trove", "an enchanted castle", "a mysterious island"];
const insertZ = ["a fierce dragon", "a magical unicorn", "a cunning sorcerer"];

randomize.addEventListener('click', function () {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  storyText = `Once upon a time, in a land far away, ${xItem} decided to embark on an epic journey to ${yItem}. Along the way, they encountered ${zItem}. It was a thrilling adventure that they would never forget.`;

  story.style.visibility = "visible";
  story.innerText = storyText;
});

