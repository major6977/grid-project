
// function change() {
//     let i = 0;
//     let circle1 = document.getElementById("circle");
//     let color = ;
//   circle1.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
//   setInterval(change, 1000);
// }
// change();

// Using jQuery and JS

var colors = ["#35deff", "#694bff", "#f97aff", "#f1cfb1"];

var currentColor = 0;
function switchColor1() {    
    if (currentColor >= colors.length) currentColor = 0;

    $('.circle-1').css('background-color', colors[currentColor++]);

    setTimeout(switchColor1, 1000);
}
switchColor1();