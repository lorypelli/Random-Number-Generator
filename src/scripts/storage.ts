let theme = localStorage.getItem('theme');
const html = document.querySelector('html');
const meta = document.querySelector('meta[name=\'color-scheme\']');
if (theme != 'light' && theme != 'dark') {
    theme = 'light';
}
localStorage.setItem('theme', theme);
if (html) {
    html.setAttribute('data-theme', theme);
}
if (meta) {
    meta.setAttribute('content', theme);
}
const themeElement = document.querySelector('#theme');
if (themeElement) {
    themeElement.addEventListener('click', () => {
        let theme = localStorage.getItem('theme');
        if (theme != 'light' && theme != 'dark') {
            theme = 'light';
        }
        switch (theme) {
        case 'light': {
            localStorage.setItem('theme', 'dark');
            if (html) {
                html.setAttribute('data-theme', 'dark');
            }
            if (meta) {
                meta.setAttribute('content', 'dark');
            }
            break;
        }
        case 'dark': {
            localStorage.setItem('theme', 'light');
            if (html) {
                html.setAttribute('data-theme', 'light');
            }
            if (meta) {
                meta.setAttribute('content', 'light');
            }
            break;
        }
        }
    });
}
const langElement = document.querySelector('#lang');
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