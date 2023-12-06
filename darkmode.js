document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});
