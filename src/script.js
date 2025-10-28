// // Existing JS (year update and form validation) ...

// // ===========================================
// // NEW CODE FOR FADE-IN ANIMATION
// // ===========================================

// // Function to check if an element is in the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Select all elements that have the 'fade-in' class
// const fadeElements = document.querySelectorAll('.fade-in');

// // Function to handle showing/hiding elements on scroll
// function handleScrollAnimation() {
//     fadeElements.forEach(element => {
//         if (isInViewport(element)) {
//             element.classList.add('show');
//         } else {
//             // Optional: If you want elements to hide again when scrolled out of view
//             // element.classList.remove('show');
//         }
//     });
// }

// // Add scroll and load event listeners
// // Run once on load to show elements already in view
// window.addEventListener('load', handleScrollAnimation);
// // Run on scroll for elements that come into view later
// window.addEventListener('scroll', handleScrollAnimation);

// // Optional: For the Navbar menu toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// if (menuToggle && navLinks) {
//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         menuToggle.classList.toggle('active');
//         const isExpanded = menuToggle.classList.contains('active');
//         menuToggle.setAttribute('aria-expanded', isExpanded);
//     });

//     // Close mobile menu when a link is clicked
//     navLinks.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//             if (navLinks.classList.contains('active')) {
//                 navLinks.classList.remove('active');
//                 menuToggle.classList.remove('active');
//                 menuToggle.setAttribute('aria-expanded', false);
//             }
//         });
//     });
// }

// // Optional: Back to Top button functionality
// const backToTopButton = document.getElementById('back-to-top');

// if (backToTopButton) {
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 300) { // Show button after scrolling 300px down
//             backToTopButton.classList.add('show');
//         } else {
//             backToTopButton.classList.remove('show');
//         }
//     });

//     backToTopButton.addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// }

// // ===========================================
// // END NEW CODE
// // ===========================================