








let example1 = document.querySelector("p");
let example2 = document.querySelector(".example-class");
let example3 = document.querySelector("#example-id");
let example4 = document.querySelector("p:nth-child(4)");

example1.textContent = "😀" + example1.textContent + "😀";

example2.style.backgroundColor = "tomato";
example2.style.color = "white";

example3.style.backgroundImage = "url(/panda.JPG)";

example4.style.width = "200px";
example4.style.height = "200px";
example4.style.margin = "30px";
example4.style.transform = "rotate(-45deg)";

let list = document.createElement("ul"); // step 1
document.body.append(list); // step 2
for (let i = 1; i <= 10; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = "Example " + i;
  list.append(listItem);
}


let helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", function() {
  alert("Hello!");
});

let addParagraphBtn = document.querySelector("#add-paragraph");
addParagraphBtn.addEventListener("click", function() {
  let article = document.querySelector("article");
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem atque consectetur rem totam saepe sint et, perspiciatis porro at debitis!";
  article.append(newParagraph);
});

let addListItemBtn = document.querySelector("#add-list-item");
addListItemBtn.addEventListener("click", function() {
  let newListItem = document.createElement("li");
  newListItem.textContent = "Example";
  list.append(newListItem);
});

let example1Btn = document.querySelector("#example-1");
let example2Btn = document.querySelector("#example-2");
let example1Paragraph = document.querySelector("#example-1-target");
example1Btn.addEventListener("click", function(){
  example1Paragraph.className = "hidden";
});
example2Btn.addEventListener("click", function(){
  example1Paragraph.className = "";
})

let toggleBtn = document.querySelector("#toggle");
let toggleParagraph = document.querySelector("#toggle-target");
toggleBtn.addEventListener("click", function() {
  toggleParagraph.classList.toggle("hidden");
});