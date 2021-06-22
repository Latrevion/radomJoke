const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText =
  "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";

let insertX = ["怪兽威利", "大老爹", "圣诞老人"];

let insertY = ["肯德基", "迪士尼乐园", "白宫"];

let insertZ = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];

randomize.addEventListener("click", result);

function result() {
  let xItem = randomValueFromArray(insertX);
  console.log(xItem);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let newStory = storyText
    .replace(":inserta:", xItem)
    .replace(":insertb:", yItem)
    .replace(":insertc:", zItem)
    .replace(":inserta:", xItem);
  
  console.log(newStory);

  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("李雷", name);
    console.log(newStory);
  }

  if (document.getElementById("american").checked) {
    let weight = Math.round(140 * 2.2046);
    let temperature = Math.round(34 * 1.8+32);
    newStory = newStory.replace("34 摄氏度", temperature + "华氏度");
    newStory = newStory.replace("130 公斤", weight + "磅");
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
