const getDefaultLanguage = () => {
    const supportLanguages = ['th', 'ja', 'es', 'en'];
    let userLanguages = navigator.languages.map(language => language.split('-')[0]);
    const search = window.location.search.split('?');
    if (search.length > 0) {
        userLanguages = [search[1], ...userLanguages];
    }
    for (let i = 0; i < userLanguages.length; i++) {
        if (supportLanguages.find(lang => lang === userLanguages[i])) {
            return userLanguages[i];
        }
    }
    return 'en';
};

{
    const language = getDefaultLanguage();
    const elements = document.getElementsByTagName('span');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.hasAttribute('lang') && element.getAttribute('lang') !== language) {
            element.remove(); i--;
        }
    }

    document.getElementById('spinner').remove();
}
