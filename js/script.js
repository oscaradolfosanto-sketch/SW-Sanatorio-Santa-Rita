function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-turnos');
    const btnAbrir = document.getElementById('btn-abrir-turnos');
    const btnCerrar = document.getElementById('btn-cerrar-turnos');

    if (btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            modal.classList.add('show');
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});