
// Challenge 1
window.onload = function () {
  var userSpan = document.getElementById("user");
  userSpan.innerHTML = "NAYAN KUMAR RAJ";
};

// Challenge 2
var btnClick = document.getElementById("btn-click");
btnClick.onclick = function () {
  btnClick.style.backgroundColor = "darkblue";
};

// Challenge 3
function makeSentence() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;
  var statementDiv = document.getElementById("statement");

  var sentence = noun + " " + verb + " " + adverb;
  statementDiv.innerHTML = sentence;
}

var buildButton = document.getElementById("build-button");
buildButton.addEventListener("click", makeSentence);

// Challenge 4.1
var grandparentDiv = document.getElementById("grandparent");
var parentDiv = document.getElementById("parent");
var childDiv = document.getElementById("child");

childDiv.addEventListener("click", function () {
  console.log("Child clicked");
});

parentDiv.addEventListener("click", function () {
  console.log("Parent clicked");
});

grandparentDiv.addEventListener("click", function () {
  console.log("Grandparent clicked");
});

// Challenge 4.2
grandparentDiv.addEventListener(
  "click",
  function () {
    console.log("Grandparent clicked");
  },
  true
);

parentDiv.addEventListener(
  "click",
  function () {
    console.log("Parent clicked");
  },
  true
);

childDiv.addEventListener(
  "click",
  function () {
    console.log("Child clicked");
  },
  true
);

// Challenge 5
var categoryUl = document.getElementById("category");
categoryUl.addEventListener("click", function (event) {
  if (event.target.id === "blazers") {
    console.log("blazers");
  }
});




// categoryUl.addEventListener("click", function (event) {
//   console.log(event.target.classList)

//   if (event.target.className==='ft gt') {

//     var childElement = event.target;
//     console.log("Clicked on element with class 'ft':", childElement);
//     console.log(typeof childElement.attributes.id.value)
//   }
// });
