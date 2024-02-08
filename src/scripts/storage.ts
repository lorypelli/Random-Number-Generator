let theme = localStorage.getItem('theme');
const html = document.getElementsByTagName('html')[0];
if (theme != 'light' && theme != 'dark') {
    theme = 'light';
}
localStorage.setItem('theme', theme);
html.setAttribute('data-theme', theme);
const themeElement = document.getElementById('theme');
if (themeElement) {
    themeElement.addEventListener('click', () => {
        let theme = localStorage.getItem('theme');
        if (theme != 'light' && theme != 'dark') {
            theme = 'light';
        }
        switch (theme) {
        case 'light': {
            localStorage.setItem('theme', 'dark');
            html.setAttribute('data-theme', 'dark');
            break;
        }
        case 'dark': {
            localStorage.setItem('theme', 'light');
            html.setAttribute('data-theme', 'light');
            break;
        }
        }
    });
}
const langElement = document.getElementById('lang');
if (langElement) {
    langElement.addEventListener('change', () => {
        for (let i = 0; i < langElement.children.length; i++) {
            if (i == (langElement as HTMLSelectElement).selectedIndex) {
                const lang = langElement.children[i].getAttribute('data-short');
                if (lang) {
                    const path = window.location.pathname.split('/')[2];
                    const params = window.location.search;
                    window.location.replace(
                        `/${lang}${path ? '/' + path : ''}${params}`,
                    );
                    localStorage.setItem('lang', lang);
                }
            }
        }
    });
}