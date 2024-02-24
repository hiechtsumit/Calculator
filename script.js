var allButtons = document.querySelectorAll(".all-button");
// console.log(allButtons);
var display = document.getElementById("display-content");
// var arr=Array.from(allButtons);
var result = "";
allButtons.forEach((i) => {
  i.addEventListener("click", (event) => {
    // console.log(event.target.innerHTML);
    var input = event.target.innerHTML;
    if (input == "AC") {
      // result='';
      // display.value=result;
      display.innerHTML = "";
    } else if (input == "DL") {
      var cutting = String(display.textContent).slice(0, -1);
      // display.textContent=cutting;        same work.
      display.innerHTML = cutting;
    } else if (input == "=") {
      try {
        var evalResult = String(eval(display.textContent));
        display.textContent = evalResult;
      } catch (error) {
        display.textContent = "error";
      }
    } else {
      display.innerHTML += input; // here i.innerHTML and event.target.innerHTML holds the same value.
    }
  });
});
