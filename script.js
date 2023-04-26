function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";

  var x = document.getElementById("nav");
  x.className = "";
}

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

window.onscroll = function () {
  efectoHabilidades();
};

function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("react").classList.add("barra-progreso3");
    document.getElementById("node").classList.add("barra-progreso4");
  }
}

const btn = document.getElementById("buttonEnviar");
const form = document.getElementById("form")
form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_bokwylh";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar Mensaje";
      alert("Mensaje enviado correctamente!");
      form.reset();
    },
    (err) => {
      btn.value = "Enviar Mensaje";
      alert(JSON.stringify(err));
    }
  );
});
