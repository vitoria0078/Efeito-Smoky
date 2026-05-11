const letters = document.querySelectorAll('.smoky span');
const container = document.querySelector('.smoky');

// Função para aplicar/remover a fumaça com delay entre as letras
function toggleSmoke(active) {
    letters.forEach((span, index) => {
        // Multiplicamos o index por 100ms para criar o efeito cascata
        setTimeout(() => {
            if (active) {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        }, index * 300); 
    });
}

// Evento quando o mouse entra na área da palavra
container.addEventListener('mouseenter', () => {
    toggleSmoke(true);
});

// Evento quando o mouse sai da área da palavra
container.addEventListener('mouseleave', () => {
    toggleSmoke(false);
});