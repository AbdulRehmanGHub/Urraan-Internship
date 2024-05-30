const slides = document.querySelectorAll(".images");
const img_text = document.querySelectorAll(".text-on-img");
const slideContainer = document.querySelector(".slide-container");
let img = 0;

function prevbtn() {
    if (img > 0) {
        img--;
    } else {
        img = slides.length - 1;
    }
    slideImage();
};

function nextbtn() {
    if (img < slides.length - 1) {
        img++;
    } else {
        img = 0;
    }
    slideImage();
};

function slideImage() {
    slideContainer.style.transform = `translateX(-${img * 100}%)`;
    updateDots();
};

function updateDots() {
    document.getElementById('dot1').style.backgroundColor = 'transparent';
    document.getElementById('dot2').style.backgroundColor = 'transparent';
    document.getElementById('dot3').style.backgroundColor = 'transparent';

    if (img === 0) {
        document.getElementById('dot1').style.backgroundColor = 'white';
    } else if (img === 1) {
        document.getElementById('dot2').style.backgroundColor = 'white';
    } else if (img === 2) {
        document.getElementById('dot3').style.backgroundColor = 'white';
    }
}

var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');

dot1.onclick = function() {
    img = 0;
    slideImage();
}

dot2.onclick = function() {
    img = 1;
    slideImage();
}

dot3.onclick = function() {
    img = 2;
    slideImage();
}
