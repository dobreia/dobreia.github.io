var theme = document.querySelector('#theme');
var themeButton = document.querySelector('#theme-icon');

themeButton.addEventListener('click', function () {
    if (theme.getAttribute('href') == 'styles/a_kepzesrol.css') {
        theme.setAttribute('href', 'styles/a_kepzesrol_dark.css');
        themeButton.src = 'assets/lightmode-icon.svg';
    }
    else {
        theme.setAttribute('href', 'styles/a_kepzesrol.css');
        themeButton.src = 'assets/darkmode-icon.svg';
    }
})