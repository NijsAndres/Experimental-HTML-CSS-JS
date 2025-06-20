const html = document.documentElement;

// #region ***  DOM references                           ***********
// #endregion

// #region ***  Callback-Visualisation - show___         ***********

const showTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    html.classList.add(savedTheme);
    listenToThemeChange();
}


// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
// #endregion

// #region ***  Data Access - get___                     ***********
// #endregion

// #region ***  Event Listeners - listenTo___            ***********

const listenToThemeChange = () => {
    const themeToggleButton = document.querySelector('.js-theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        html.classList.toggle('dark');
        const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    })
}

// #endregion

// #region ***  Init / DOMContentLoaded                  ***********

const init = () => {
    showTheme();
}

document.addEventListener('DOMContentLoaded',init);

// #endregion