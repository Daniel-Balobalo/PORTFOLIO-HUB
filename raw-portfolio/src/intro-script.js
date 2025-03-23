// Particles.js Initialization
particlesJS.load('particles-js', 'public/assets/particles.json', function() {
    console.log('Particles.js loaded!');
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Mouse Move Event
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});