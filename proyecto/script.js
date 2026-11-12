document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL VISOR MODAL DE IMÁGENES ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModalBtn = document.getElementById('closeModal');

    // Asigna la función de ampliación a todas las imágenes que tengan la clase .zoomable-img
    document.querySelectorAll('.zoomable-img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalCaption.textContent = img.alt || "Vista previa ampliada de la evidencia";
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    const closeModal = () => {
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // --- NAVEGACIÓN SUAVE AL HACER CLIC EN LOS ENLACES DE LA BARRA LATERAL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log("Seismic Sentinel: Scripts inicializados con éxito.");
});