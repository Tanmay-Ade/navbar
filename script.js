document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('nav a');
    var icon = document.querySelector('nav i');
    var container = document.querySelector('nav ul'); // Adicione esta linha

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove a classe 'active' de todos os links
            links.forEach(function (otherLink) {
                otherLink.parentNode.classList.remove('active');
            });

            // Adiciona a classe 'active' ao link clicado
            link.parentNode.classList.add('active');

            // Calcula a posição do link clicado em relação ao contêiner pai
            var leftPosition = link.getBoundingClientRect().left - container.getBoundingClientRect().left; // Modifique esta linha

            // Move o ícone para a posição do link clicado
            icon.style.left = leftPosition + 'px';

            // Ajusta o width do ícone com base no link clicado
            if (link.textContent.trim() === 'Sugestões') {
                icon.style.width = '134px';
            } else if (link.textContent.trim() === 'Apps') {
                icon.style.width = '90px';
            } else {
                // Reseta o width para o valor padrão
                icon.style.width = '100px';
            }
        });
    });
});