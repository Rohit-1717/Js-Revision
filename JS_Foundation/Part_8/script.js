// Todo Example 1

const button = document.getElementById("changeTextButton");
button.addEventListener("click", () => {
  const paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "Paragraph has been changed!!";
  paragraph.style.color = "red";
});

// Todo Example 2
const citiesList = document.getElementById("citiesList");

const Example2Btn = document.getElementById("highlightFirstCity");

Example2Btn.addEventListener("click", () => {
  citiesList.firstElementChild.classList.add("highlights");
});

// Todo Example 3

document.getElementById("changeOrder").addEventListener("click", () => {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.background = "Cyan";
  coffeeType.style.color = "Black";
});

// Todo Example 4
document.getElementById("addNewItems").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "Fruits";

  document.getElementById("shoppingList").appendChild(newItem);
});

// Todo Example 5
document.getElementById("removeLastTask").addEventListener("click", () => {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});

//Todo Example 6

document.getElementById("clickMeButton").addEventListener("click", () => {
  alert("ChaiCOde");
});

// Todo Example 7

document.getElementById("teaList").addEventListener("click", (event) => {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected:" + event.target.textContent);
  }
});

// Todo Example 8
document.getElementById("feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let feedbackInput = document.getElementById("feedbackInput").value;

  document.getElementById(
    "feedbackDisplay"
  ).textContent = `FeedBack is: ${feedbackInput}`;
});

//Todo Example 9
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

//Todo Example 10

document.getElementById("toggleHighlight").addEventListener("click", () => {
  let descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.toggle("highlights");
});
