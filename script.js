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

    // Open modal when a person is clicked
    people.forEach(person => {
        person.addEventListener('click', () => {
            const bioContent = person.querySelector('.bio-content').innerHTML;
            modalBody.innerHTML = bioContent;
            modal.classList.add('active');
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
