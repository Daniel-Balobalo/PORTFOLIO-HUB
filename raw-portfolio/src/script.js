// Particles.js Initialization
particlesJS.load('particles-js', 'public/assets/particles.json', function() {
    console.log('Particles.js loaded!');
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});