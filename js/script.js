document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL BANNER ---
    const imagenbanner = document.getElementById("imagenbanner");
    const banner = [
        "imagens/imagen1.png",
        "imagens/imagen2.png"
    ];
    let indiceBanner = 0;

    if (imagenbanner && banner.length > 0) {
        setInterval(() => {
            imagenbanner.style.opacity = 0; // Se desvanece

            setTimeout(() => {
                indiceBanner = (indiceBanner + 1) % banner.length;
                imagenbanner.src = banner[indiceBanner];
                imagenbanner.style.opacity = 1; // Aparece la nueva
            }, 500); // Tiempo que dura el desvanecimiento
        }, 6000); // Cambia cada 6 segundos
    }

    // --- LÓGICA DEL FORMULARIO ---
    const miFormulario = document.querySelector("form");
    const resultadoFormulario = document.getElementById("resultadoFormulario");

    if (miFormulario) {
        miFormulario.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Captura de datos
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const modalidad = document.querySelector('input[name="modalidad"]:checked');

            // 1. VALIDACIÓN ESTRICTA
            if (nombre === "" || email === "") {
                alert("Por favor, completa los campos obligatorios.");
                return;
            }

            // Validación simple de formato de correo
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

            // 2. PROCESAMIENTO
            const modalidadTexto = modalidad ? modalidad.value : "No seleccionada";
            
            console.log("Formulario Validado:", {
                nombre,
                email,
                modalidad: modalidadTexto
            });

            // 3. RESPUESTA VISUAL
            if (resultadoFormulario) {
                resultadoFormulario.style.display = "block";
                resultadoFormulario.innerHTML = `
                    <strong>¡Registro exitoso!</strong><br>
                    Hola ${nombre}, gracias por tu interés en ${modalidadTexto}. 
                    Te enviaremos información a <u>${email}</u>.
                `;
                
                // Limpia el formulario para el siguiente uso
                miFormulario.reset();
            }
        });
    }
});