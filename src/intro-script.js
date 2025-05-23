// Particles.js Initialization
particlesJS.load('particles-js', 'public/assets/particles.json', function() {
    console.log('Particles.js loaded!');
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Initially hide cursor
cursor.style.opacity = '0';

// Show cursor when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    cursor.style.opacity = '1';
});

// Title Element
const title = document.querySelector('.intro-title');

// Button Element
const button = document.querySelector('.enter-button');

// Profile Picture Element
const profilePic = document.querySelector('.profile-pic');

// Mouse Move Event
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Lens-like effect for the title
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

// Box-like hover effect for the button (without cursor expansion)
button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
    button.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.5)';
    button.style.background = 'rgba(255, 255, 255, 0.1)';
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '0 0 10px rgba(0, 255, 204, 0.5)';
    button.style.background = 'rgba(0, 255, 204, 0.2)';
});

// Hide custom cursor on profile picture hover
profilePic.addEventListener('mouseenter', () => {
    cursor.style.opacity = '0'; // Hide custom cursor
    document.body.style.cursor = 'none'; // Hide default cursor
});

profilePic.addEventListener('mouseleave', () => {
    cursor.style.opacity = '1'; // Show custom cursor
    document.body.style.cursor = 'auto'; // Show default cursor
});