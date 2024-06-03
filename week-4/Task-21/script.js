const container = document.querySelector('.container');
const numCircles = 10;
const numCircles2 = 10;
const numCircles3 = 10;

function randomD(max, min){
    return Math.random() * (max - min) + min;
}

function createCircle(){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = `${randomD(20, container.clientWidth - 80)}px`
    container.appendChild(circle);

    circle.addEventListener('mouseover', function(){
        circle.classList.add('hovered');
        const computedStyle = window.getComputedStyle(circle);
        circle.style.top = computedStyle.top;
        circle.style.transition = 'none'
    });

    circle.addEventListener('mouseout', function(){
        circle.classList.remove('hovered');
        animateCircle(circle);
    });
    
    animateCircle(circle);
}

for(let i=0; i < numCircles; i++){
    createCircle();
}

function createCircle2(){
    const circle2 = document.createElement('div');
    circle2.classList.add('circle2');
    circle2.style.left = `${randomD(20, container.clientWidth - 50)}px`
    container.appendChild(circle2);

    circle2.addEventListener('mouseover', function(){
        circle2.classList.add('hovered');
        const computedStyle = window.getComputedStyle(circle2);
        circle2.style.top = computedStyle.top;
        circle2.style.transition = 'none'
    });

    circle2.addEventListener('mouseout', function(){
        circle2.classList.remove('hovered');
        animateCircle(circle2);
    });
    
    animateCircle(circle2);
}

for(let i=0; i < numCircles2; i++){
    createCircle2();
}

function createCircle3(){
    const circle3 = document.createElement('div');
    circle3.classList.add('circle3');
    circle3.style.left = `${randomD(20, container.clientWidth - 20)}px`
    container.appendChild(circle3);

    circle3.addEventListener('mouseover', function(){
        circle3.classList.add('hovered');
        const computedStyle = window.getComputedStyle(circle3);
        circle3.style.top = computedStyle.top;
        circle3.style.transition = 'none'
    });

    circle3.addEventListener('mouseout', function(){
        circle3.classList.remove('hovered');
        animateCircle(circle3);
    });
    
    animateCircle(circle3);
}

function animateCircle(circle){
    const startPosition = container.clientHeight;
    const duration = randomD(10, 50);
    const endPosition = -60;

    circle.style.top = `${startPosition}px`;
    circle.style.transition = `top ${duration}s linear`;

    setTimeout(() => {
        circle.style.top = `${endPosition}px`;
    });

    circle.addEventListener('transitionend', function(){
        if(!circle.classList.contains('hovered')) {
            circle.style.top = `${startPosition}px`;
            circle.style.transition = 'none';

            setTimeout(() => {
                circle.style.transition = `top ${duration}s linear`;
                circle.style.top = `${endPosition}px`;
            });
        }
    });
}

for(let i=0; i < numCircles3; i++){
    createCircle3();
}

// window.addEventListener('resize', function(){
//     document.querySelectorAll('.circle').forEach(circle => {
//         if(!circle.classList.contains('hovered')) {
//             circle.style.left = `${random(0, container.clientWidth -40)}px`;
//         }
//     });
// });
