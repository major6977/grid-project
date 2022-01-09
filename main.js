
function change() {
    let i = 0;
    let circle1 = document.getElementById("circle");
    let color = ["#35deff", "#694bff", "#f97aff", "#f1cfb1"];
  circle1.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
  setInterval(change, 1000);
}
change();
