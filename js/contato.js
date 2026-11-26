// Mantem o comportamento demonstrativo do formulario sem JavaScript inline.
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.form');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        window.alert('Mensagem enviada para demonstração.');
    });
});
