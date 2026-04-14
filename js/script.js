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

    const serviceCards = document.querySelectorAll('.service-card');
    const serviceToggles = document.querySelectorAll('.service-toggle');
    serviceToggles.forEach((button) => {
        button.addEventListener('click', () => {
            const card = button.closest('.service-card');
            const shouldExpand = !card.classList.contains('expanded');

            serviceCards.forEach((otherCard) => {
                const otherButton = otherCard.querySelector('.service-toggle');
                if (otherCard === card && shouldExpand) {
                    otherCard.classList.add('expanded');
                    if (otherButton) {
                        otherButton.textContent = '-';
                        otherButton.setAttribute('aria-expanded', 'true');
                    }
                } else {
                    otherCard.classList.remove('expanded');
                    if (otherButton) {
                        otherButton.textContent = '+';
                        otherButton.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    });

    const doctorCards = document.querySelectorAll('.doctor-card');
    const doctorToggles = document.querySelectorAll('.doctor-toggle');
    doctorToggles.forEach((button) => {
        button.addEventListener('click', () => {
            const card = button.closest('.doctor-card');
            const shouldExpand = !card.classList.contains('expanded');

            doctorCards.forEach((otherCard) => {
                const otherButton = otherCard.querySelector('.doctor-toggle');
                if (otherCard === card && shouldExpand) {
                    otherCard.classList.add('expanded');
                    otherCard.classList.remove('shrink');
                    if (otherButton) {
                        otherButton.textContent = '-';
                        otherButton.setAttribute('aria-expanded', 'true');
                    }
                } else {
                    otherCard.classList.remove('expanded');
                    otherCard.classList.remove('shrink');
                    if (otherButton) {
                        otherButton.textContent = '+';
                        otherButton.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    });
});