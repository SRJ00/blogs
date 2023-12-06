document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if the user previously set dark mode
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    // Set dark mode by default
    setDarkMode(isDarkModeEnabled);

    // Toggle dark mode when the user changes the checkbox
    darkModeToggle.addEventListener('change', function() {
        const isDarkMode = darkModeToggle.checked;
        setDarkMode(isDarkMode);

        // Save user preference to local storage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });

    function setDarkMode(isDarkMode) {
        body.classList.toggle('dark-mode', isDarkMode);
    }
});
