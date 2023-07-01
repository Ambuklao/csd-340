let name = "Sir Arthur";
let artifact = "Emerald Scepter";
let dragon = "Inferno";
let artifact2 = "Emerald Scepter";

  document.getElementById("btn1").addEventListener("click", function() {
  document.getElementById("name").textContent = name;
});

  document.getElementById("btn2").addEventListener("click", function() {
  document.getElementById("artifact").textContent = artifact;
  document.getElementById("artifact2").textContent = artifact2;
});

  document.getElementById("btn3").addEventListener("click", function() {
  document.getElementById("dragon").textContent = dragon;
});