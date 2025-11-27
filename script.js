document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos Principales
    const gataImg = document.getElementById('gataImg');
    const mainContent = document.getElementById('mainContent');
    const infoColumna = document.getElementById('infoColumna');
    const botonPrincipalInfo = document.getElementById('botonPrincipalInfo');

    // 2. Elementos de Pestañas
    const botonesTab = document.querySelectorAll('.boton-tab');
    const pestañasContenido = document.querySelectorAll('.pestaña');

    // --- FUNCIÓN PRINCIPAL DE INTERACCIÓN (CLIC EN LA IMAGEN) ---
    function toggleInfo() {
        // Alterna la clase 'activo' en el contenedor principal
        mainContent.classList.toggle('activo');
        
        // Alterna la visibilidad de la columna de información
        if (infoColumna.classList.contains('detalles-gata-oculto')) {
            infoColumna.classList.remove('detalles-gata-oculto');
            infoColumna.classList.add('detalles-gata-visible');
        } else {
            infoColumna.classList.add('detalles-gata-oculto');
            infoColumna.classList.remove('detalles-gata-visible');
        }
    }

    // --- FUNCIÓN PARA CAMBIAR PESTAÑAS ---
    function cambiarPestaña(e) {
        // Previene la acción por defecto (si fuera un enlace)
        e.preventDefault(); 
        
        const tabBoton = e.currentTarget;
        const targetTab = tabBoton.dataset.tab;

        // Desactivar todos los botones y pestañas
        botonesTab.forEach(btn => btn.classList.remove('activo'));
        pestañasContenido.forEach(pestaña => pestaña.classList.remove('activa'));

        // Activar el botón y la pestaña correspondiente
        tabBoton.classList.add('activo');
        document.querySelector(`[data-tab-content="${targetTab}"]`).classList.add('activa');
    }

    // --- ASIGNACIÓN DE EVENTOS ---
    
    // 1. Clic en la imagen para mostrar/ocultar info
    gataImg.addEventListener('click', toggleInfo);
    
    // 2. Clic en el botón grande para mostrar/ocultar info
    botonPrincipalInfo.addEventListener('click', toggleInfo);

    // 3. Clic en los botones de huella para cambiar de pestaña
    botonesTab.forEach(boton => {
        boton.addEventListener('click', cambiarPestaña);
    });
});