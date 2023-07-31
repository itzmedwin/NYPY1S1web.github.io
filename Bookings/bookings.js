var available = document.getElementsByClassName("Availability-button");
var i;
for (i = 0; i < available.length; i++) {
  available[i].addEventListener("click", function() {
    this.classList.toggle("press");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();
const resultsList = document.getElementById("results")



new URLSearchParams(window.location.search).forEach((value,
    name) => {
        resultsList.append(`${name}: ${value}`)
        resultsList.append(document.createElement("br"))
    })