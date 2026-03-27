// script.js - Handles interactivity for the Ritdha High School UI


document.addEventListener('DOMContentLoaded', () => {
   
    // Select HTML elements
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');


    // Function to open the hidden menu
    function openMenu() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
    }


    // Function to close the hidden menu
    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }


    // Event Listeners
    hamburgerBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
   
    // Also close the menu if the user clicks the dark background overlay outside the menu
    menuOverlay.addEventListener('click', closeMenu);


    // Optional: Close button listener for the top right EP tab 'X'
    const closeEpBtn = document.querySelector('.close-btn');
    if(closeEpBtn) {
        closeEpBtn.addEventListener('click', () => {
            alert('Navigation: Closing EP View. (This is a demonstration interaction)');
        });
    }


    // --- News Popup / Modal Logic ---
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const newsModal = document.getElementById('news-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');


    // Open Modal and populate data
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const content = btn.getAttribute('data-content');
           
            modalTitle.textContent = title;
            modalBody.textContent = content; // Or use innerHTML if you have HTML formatted text
           
            newsModal.classList.add('active');
        });
    });


    // Close Modal
    function closeNews() {
        newsModal.classList.remove('active');
    }


    closeModalBtn.addEventListener('click', closeNews);
   
    // Close modal if user clicks outside of the box
    newsModal.addEventListener('click', (e) => {
        if (e.target === newsModal) {
            closeNews();
        }
    });


});





