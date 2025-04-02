document.addEventListener('DOMContentLoaded', () => {
    // Existing navbar toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Modal functionality
    const people = document.querySelectorAll('.person');
    const modal = document.querySelector('#bio-modal');
    const modalBody = modal.querySelector('.modal-body');
    const modalClose = modal.querySelector('.modal-close');

    // Open modal when a person is clicked, but not when clicking the CV link
    people.forEach(person => {
        person.addEventListener('click', (e) => {
            // Check if the clicked element is the CV link or a child of it
            if (e.target.classList.contains('cv-link') || e.target.closest('.cv-link')) {
                return; // Do nothing, let the link navigate
            }

            // Otherwise, open the modal
            const bioContent = person.querySelector('.bio-content').innerHTML;
            modalBody.innerHTML = bioContent;
            modal.classList.add('active');
        });
    });

    // Prevent CV link clicks from bubbling up to the person card
    const cvLinks = document.querySelectorAll('.cv-link');
    cvLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop the click from reaching the parent .person
        });
    });

    // Close modal when the close button is clicked
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}); 
