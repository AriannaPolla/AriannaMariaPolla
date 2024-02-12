document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
    divisor.style.width = slider.value+"%";
}
