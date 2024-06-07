const container = document.querySelector('.container');
const numCircles = 10;

function random(max, min) {
    return Math.random() * (max - min) + min;
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = `${random(0, container.clientWidth - 40)}px`;
    container.appendChild(circle);

    circle.addEventListener('mouseover', function () {
        circle.classList.add('hovered');
    });

    circle.addEventListener('mouseout', function () {
        circle.classList.remove('hovered');
        animateCircle(circle);
    });

    animateCircle(circle);
}

function animateCircle(circle) {
    const startPosition = container.clientHeight;
    const duration = random(5, 10);
    const endPosition = -40;

    circle.style.top = `${startPosition}px`;
    circle.style.transition = `top ${duration}s linear`;
    setTimeout(() => {
        circle.style.top = `${endPosition}px`;
    }, 10);

    circle.addEventListener('transitionend', function () {
        if (!circle.classList.contains('hovered')) {
            circle.style.top = `${startPosition}px`;
            circle.style.transition = 'none';
            setTimeout(() => {
                circle.style.transition = `top ${duration}s linear`;
                circle.style.top = `${endPosition}px`;
            }, 10);
        }
    });
}

for (let i = 0; i < numCircles; i++) {
    createCircle();
}

window.addEventListener('resize', () => {
    document.querySelectorAll('.circle').forEach(circle => {
        if (!circle.classList.contains('hovered')) {
            circle.style.left = `${random(0, container.clientWidth - 40)}px`;
        }
    });
});