// Elemek és gombok lekérése
var theme = document.querySelector('#theme');
var themeButtons = document.querySelectorAll('.theme');
var isDarkMode = false; // Alapértelmezetten világos mód van beállítva

// Függvény a sötét móddal való váltáshoz
function toggleDarkMode() {
    isDarkMode = !isDarkMode; // Kapcsold át a sötét módot
    var themeName = isDarkMode ? getDarkTheme() : getLightTheme(); // Kapd meg a megfelelő téma nevét
    setTheme(themeName); // Állítsd be a téma nevét
}

// Függvény a téma beállításához
function setTheme(themeName) {
    theme.setAttribute('href', themeName);
    updateThemeButtons();
}

// Függvény a gombok frissítéséhez
function updateThemeButtons() {
    var iconSrc = isDarkMode ? 'assets/lightmode-icon.svg' : 'assets/darkmode-icon.svg';
    themeButtons.forEach(function (button) {
        button.src = iconSrc;
    });
}

// Függvény a sötét mód stíluslap nevének lekéréséhez
function getDarkTheme() {
    var currentTheme = theme.getAttribute('href');
    switch (currentTheme) {
        case 'styles/fooldal.css':
            return 'styles/fooldal_dark.css';
        case 'styles/rolam.css':
            return 'styles/rolam_dark.css';
        case 'styles/a_kepzesrol.css':
            return 'styles/a_kepzesrol_dark.css';
        case 'styles/az_autom.css':
            return 'styles/az_autom_dark.css';
        default:
            return currentTheme; // Ha nem talál sötét mód stíluslapot, akkor csak visszatérünk a jelenlegi stílussal
    }
}

// Függvény a világos mód stíluslap nevének lekéréséhez
function getLightTheme() {
    var currentTheme = theme.getAttribute('href');
    // Egyszerűen töröld ki a "_dark" részt a stíluslap nevéből
    return currentTheme.replace('_dark', '');
}

// Kattintás eseményfigyelő hozzáadása a gombokhoz
themeButtons.forEach(function (themeButton) {
    themeButton.addEventListener('click', toggleDarkMode);
});
