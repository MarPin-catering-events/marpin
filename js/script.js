/* ==========================================
   FORMULARIO + EMAILJS
========================================== */

emailjs.init({
    publicKey: "GN-OLzRJcxO4DTUFU"
});

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const button = form.querySelector("button");
        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

        emailjs.sendForm(
            "marpin00@outlook.es",
            "template_e2ypl9d",
            form
        )
        .then(() => {

            alert("¡Gracias! Tu solicitud fue enviada correctamente.");

            form.reset();

        })
        .catch((error) => {

            console.error("EmailJS:", error);

            alert("No fue posible enviar la solicitud. Inténtalo nuevamente.");

        })
        .finally(() => {

            button.disabled = false;
            button.innerHTML = originalText;

        });

    });

}