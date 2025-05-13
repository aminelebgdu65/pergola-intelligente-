// Quand on clique sur "Envoyer", on affiche un message
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Merci pour votre message !");
});
