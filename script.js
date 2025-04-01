document.addEventListener('DOMContentLoaded', () => {
    // Existing navbar toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // New functionality: Toggle bio on person click
    const people = document.querySelectorAll('.person');

    people.forEach(person => {
        person.addEventListener('click', () => {
            // Close all other bios
            people.forEach(p => {
                const bio = p.querySelector('.bio');
                if (p !== person && bio.classList.contains('active')) {
                    bio.classList.remove('active');
                }
            });

            // Toggle the clicked person's bio
            const bio = person.querySelector('.bio');
            bio.classList.toggle('active');
        });
    });
});
