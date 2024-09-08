document.addEventListener('DOMContentLoaded', function() {
    const passos = document.querySelectorAll('.passo');
    let passoAtual = 0;

    function mostrarPasso(index) {
        passos.forEach((passo, i) => {
            passo.classList.toggle('ativo', i === index);
        });
    }

    document.querySelectorAll('.btn-próximo').forEach(button => {
        button.addEventListener('click', function() {
            const proximoPasso = parseInt(this.getAttribute('data-proximo'));
            if (proximoPasso < passos.length) {
                passoAtual = proximoPasso;
                mostrarPasso(passoAtual);
            }
        });
    });

    mostrarPasso(passoAtual); // Inicialmente mostra o primeiro passo
});
