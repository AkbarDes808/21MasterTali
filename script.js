// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product-card button:nth-child(1)');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });

    const shareButtons = document.querySelectorAll('.product-card button:nth-child(2)');
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product shared!');
        });
    });

    const compareButtons = document.querySelectorAll('.product-card button:nth-child(3)');
    compareButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added for comparison!');
        });
    });

    const likeButtons = document.querySelectorAll('.product-card button:nth-child(4)');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product liked!');
        });
    });

    const subscribeButton = document.querySelector('.footer-newsletter button');
    subscribeButton.addEventListener('click', () => {
        const emailInput = document.querySelector('.footer-newsletter input');
        if (emailInput.value) {
            alert(`Subscribed with ${emailInput.value}`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// Menu toggle functionality for responsive navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the navbar links when the menu button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
