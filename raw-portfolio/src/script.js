// Particles.js Initialization
particlesJS.load('particles-js', 'public/assets/particles.json', function() {
    console.log('Particles.js loaded!');
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Title Element
const title = document.querySelector('.portfolio-title');

// Mouse Move Event
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Title Hover Effect
title.addEventListener('mouseenter', () => {
    cursor.style.width = '60px';
    cursor.style.height = '60px';
    cursor.style.background = 'rgba(0, 255, 204, 0.2)';
    cursor.style.boxShadow = '0 0 20px #00ffcc, 0 0 40px #00ffcc';
});

title.addEventListener('mouseleave', () => {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.background = 'rgba(0, 255, 204, 0.5)';
    cursor.style.boxShadow = '0 0 10px #00ffcc, 0 0 20px #00ffcc';
});