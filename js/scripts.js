/* TPO 2022 - JmZ */

const formContacto = document.getElementById("form");
const boton_enviar = document.getElementById("botonEnviar");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const terms = document.getElementById("terms");

const formEsValido = {
    nombre: false,
    email: false,
    terms: false,
};

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

nombre.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formEsValido.nombre = true;
});

email.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formEsValido.email = true;
});

terms.addEventListener("change", (e) => {
    formEsValido.terms = e.target.checked;
    e.target.checked
        ? boton_enviar.removeAttribute("disabled")
        : boton_enviar.setAttribute("disabled", true);
});

const validateForm = () => {
    const formValues = Object.values(formEsValido);
    const valid = formValues.findIndex((value) => value == false);
    if (valid == -1) formContacto.submit();
    else alert("Algo está mal. ¡Revisar!");
};
