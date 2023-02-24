let addParagraphBtn = document.querySelector("#add-paragraph");
let removeParagraphBtn = document.querySelector("#remove-paragraph");
let article = document.querySelector("article");
addParagraphBtn.addEventListener("click", function () {
  let p = document.createElement("p");
  p.textContent = "Example";
  article.append(p);
});
removeParagraphBtn.addEventListener("click", function () {
  let p = document.querySelector("article p");
  if (p) {
    p.remove();
  }
});

let textDiv = document.querySelector(".text");
document.querySelector("#text-hide").addEventListener("click", function () {
  // textDiv.className = "text hide";
  textDiv.classList.add("hide");
});
document.querySelector("#text-show").addEventListener("click", function () {
  // textDiv.className = "text";
  textDiv.classList.remove("hide");
});



let tweet = document.querySelector("#tweet");
let tweetSubmitBtn = document.querySelector("#tweet-submit");
let feed = document.querySelector("#feed");

tweetSubmitBtn.addEventListener("click", function() {
  let p = document.createElement("p");

  p.textContent = tweet.value;
  tweet.value = "";

  feed.append(p);
});

let firstnameInpt = document.querySelector("#firstname");
let lastnameInpt = document.querySelector("#lastname");
let fullname = document.querySelector('#fullname');
document.querySelector("#fullname-submit").addEventListener("click", function() {
  fullname.textContent = firstnameInpt.value + " " + lastnameInpt.value;
});

// change
// input
document.querySelector("#example-1").addEventListener("input", function() {
  document.querySelector("#example-1-output").textContent = this.value.length;
})

document.querySelector("#open-sidebar").addEventListener("click", function() {
  document.querySelector("#sidebar").classList.add("show");
});
document.querySelector("#close-sidebar").addEventListener("click", function() {
  document.querySelector("#sidebar").classList.remove("show");
});