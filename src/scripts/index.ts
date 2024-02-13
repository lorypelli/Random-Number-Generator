window.onload = () => {
    window.location.replace(`/${localStorage.getItem('lang') || 'en'}`);
};