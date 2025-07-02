document.addEventListener('DOMContentLoaded', function() {
    const integrantes = document.querySelectorAll('.instrumental');
    const img = document.querySelector('.img-integrantes');
    const imagens = [
        "./img/imagem-1.jpg",
        "./img/imagem-2.jpg",
        "./img/imagem-3.jpg",
        "./img/imagem-4.jpg",
        "./img/imagem-5.jpg"
    ];
    const imagemPadrao = "./img/logocompleto.jpeg";

    integrantes.forEach((integrante, i) => {
        integrante.addEventListener('mouseenter', function() {
            img.style.backgroundImage = `url('${imagens[i]}')`;
        });
        integrante.addEventListener('mouseleave', function() {
            img.style.backgroundImage = `url('${imagemPadrao}')`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});