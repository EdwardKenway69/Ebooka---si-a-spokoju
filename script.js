// Mobilne menu (hamburger)
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        // Po kliknięciu w link w menu mobilnym – zamknij menu
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 700) {
                    menu.classList.remove('show');
                }
            });
        });
    }

    // Akordeon FAQ
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            if (!isOpen) {
                answer.style.display = 'block';
            }
        });
    });

    // Płynne przewijanie do sekcji
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // MODALE (footer)
    const modalLinks = document.querySelectorAll('.footer-modal-link');
    const modals = {
        'kontakt': document.getElementById('modal-kontakt'),
        'o-mnie': document.getElementById('modal-o-mnie'),
        'regulamin': document.getElementById('modal-regulamin'),
        'polityka': document.getElementById('modal-polityka')
    };
    const modalBg = document.getElementById('modal-bg');

    function closeAllModals() {
        Object.values(modals).forEach(modal => {
            if(modal) modal.style.display = 'none';
        });
        if(modalBg) modalBg.style.display = 'none';
    }
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            closeAllModals();
            const modal = modals[this.dataset.modal];
            if(modal){
                modal.style.display = 'block';
                if(modalBg) modalBg.style.display = 'block';
            }
        });
    });
    // Zamknij: po kliknięciu X lub tło
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    if(modalBg) {
        modalBg.addEventListener('click', closeAllModals);
    }
    // ESC zamyka modal
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') closeAllModals();
    });
});
