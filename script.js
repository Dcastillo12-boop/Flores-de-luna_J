const botonesIzq = document.querySelectorAll('.carrusel-btn.izq');
const botonesDer = document.querySelectorAll('.carrusel-btn.der');
const carruseles = document.querySelectorAll('.carrusel');

botonesIzq.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        carruseles[idx].scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
});

botonesDer.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        carruseles[idx].scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});
