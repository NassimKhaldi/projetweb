function isValidName(name) {
  return name.match(/^[a-zA-Z]+$/) !== null;
}

function isValidEmail(email) {
  return email.match(/^\S+@\S+$/) !== null;
}

document
  .querySelector(".contact__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.querySelector(".contact__form-el--name").value;
    var email = document.querySelector(".contact__form-el--email").value;

    if (!isValidName(name)) {
      alert("Le nom ne doit contenir que des lettres.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    this.submit();
  });

let a = prompt("Quel est votre nom ?");
alert("Bonjour, " + a + " !");
