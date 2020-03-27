var isValid = true;

document.querySelector("#btnc").addEventListener("click", function() {
  if (isValid) {
    var fahrenheit = document.getElementById("input").value;
    var celcius = (fahrenheit - 32) * (5 / 9);
    document.querySelector(".c").textContent =
       fahrenheit + " F is " + celcius + " C degree.";
  } else {
    isValid = false;
  }
});

document.querySelector("#btnf").addEventListener("click", function() {
  if (isValid) {
    var celcius = document.getElementById("input").value;
    var fahrenheit = (celcius * 9) / 5 + 32;
    document.querySelector(".c").textContent =  celcius + " C is " + fahrenheit + " F degree.";
  } else {
    isValid = false;
  }
});

document.querySelector("#clear").addEventListener("click", init);

function init() {
  document.querySelector("#input").value = 0;
  document.querySelector(".c").style.display = "none";
  document.querySelector(".f").style.display = "none";
}
