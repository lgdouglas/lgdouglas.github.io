document.addEventListener('DOMContentLoaded', () => {
    // Existing navbar toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Collapsible sections for publications
    const sectionToggles = document.querySelectorAll('.section-toggle');
    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const grid = toggle.nextElementSibling;
            toggle.classList.toggle('collapsed');
            grid.classList.toggle('active');
        });
    });

    // Show More functionality for publications grids
    const publicationGrids = document.querySelectorAll('.publications-grid');
    publicationGrids.forEach(grid => {
        const items = grid.querySelectorAll('.publication-item');
        const showCount = parseInt(grid.getAttribute('data-show')) || items.length; // Default to all items if no data-show
        const showMoreBtn = grid.nextElementSibling;

        // Initially hide all items beyond the showCount
        items.forEach((item, index) => {
            if (index >= showCount) {
                item.style.display = 'none';
            }
        });

        // Show the "Show More" button if there are more items to show
        if (items.length > showCount) {
            showMoreBtn.style.display = 'block';
            let visibleCount = showCount;

            showMoreBtn.addEventListener('click', () => {
                visibleCount += showCount;
                items.forEach((item, index) => {
                    if (index < visibleCount) {
                        item.style.display = 'block';
                    }
                });

                // Hide the button if all items are visible
                if (visibleCount >= items.length) {
                    showMoreBtn.style.display = 'none';
                }
            });
        }
    });

    // Modal functionality (for People page)
    const people = document.querySelectorAll('.person');
    const modal = document.querySelector('#bio-modal');
    const modalBody = modal ? modal.querySelector('.modal-body') : null;
    const modalClose = modal ? modal.querySelector('.modal-close') : null;

    if (people && modal && modalBody && modalClose) {
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
    }
});
