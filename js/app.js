(function (window) {
    'use-strict';

    const bodytag = document.querySelector('[data-bodytag]');
    const themeToggleButton = document.querySelector('[data-themeToggle]');

    function toggleLightDark() {
        bodytag.classList.toggle('light-theme');
    }

    themeToggleButton.addEventListener('click', toggleLightDark);
})(window);