let timeout;

$('.portfolio-button').mousedown(function () {
    timeout = setInterval(function () {
        window.scrollBy(0, -1); // Adjust the value to control the scroll speed
    }, 0);
    return false;
});

$('.portfolio-button').mouseup(function () {
    clearInterval(timeout);
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.5; // Adjust this value to control scroll speed
    const offset = scrollPosition * parallaxSpeed;
    document.body.style.backgroundPosition = `center ${offset}px`;
});