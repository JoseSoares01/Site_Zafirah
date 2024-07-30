document.addEventListener('DOMContentLoaded', () => {
    const facebookButton = document.getElementById('facebook');
    const instagramButton = document.getElementById('instagram');
    const searchButton = document.querySelector('.search-btn');

    facebookButton.addEventListener('click', () => {
        alert('Você será redirecionado para o Facebook.');
    });

    instagramButton.addEventListener('click', () => {
        alert('Você será redirecionado para o Instagram.');
    });

    searchButton.addEventListener('click', () => {
        const searchQuery = prompt('Digite sua busca:');
        if (searchQuery) {
            alert(`Você buscou por: ${searchQuery}`);
        }
    });
});
