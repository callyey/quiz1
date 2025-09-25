function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('/quiz1/', '');
        if (href === '/' && sectionId === 'home' || href === `/${sectionId}`) {
            link.classList.add('active');
        }
    });
}

function navigateTo(sectionId) {
    const basePath = '/quiz1/';
    const path = sectionId === 'home' ? basePath : `${basePath}${sectionId}`;
    history.pushState({ sectionId }, '', path);
    showSection(sectionId);
}

window.onpopstate = function(event) {
    const path = window.location.pathname;
    const sectionId = path === '/quiz1/' ? 'home' : path.replace('/quiz1/', '') || 'home';
    showSection(sectionId);
};

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const sectionId = path === '/quiz1/' ? 'home' : path.replace('/quiz1/', '') || 'home';
    showSection(sectionId);
});
