document.addEventListener('DOMContentLoaded', function() {
    const integrantes = document.querySelectorAll('.instrumental');
    const img = document.querySelector('.img-integrantes');
    const imagens = [
        "../animation/img/imagem-1.jpg",
        "../animation/img/imagem-2.jpg",
        "../animation/img/imagem-3.jpg",
        "../animation/img/imagem-4.jpg",
        "../animation/img/imagem-5.jpg"
    ];
    const imagemPadrao = "../animation/img/logocompleto.jpeg";

    integrantes.forEach((integrante, i) => {
        integrante.addEventListener('mouseenter', function() {
            img.style.backgroundImage = `url('${imagens[i]}')`;
        });
        integrante.addEventListener('mouseleave', function() {
            img.style.backgroundImage = `url('${imagemPadrao}')`;
        });
    });
});