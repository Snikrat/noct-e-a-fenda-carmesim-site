(function () {
  "use strict";

  var kindleUrl = (window.NOCT_CONFIG || {}).kindleUrl;
  if (kindleUrl) {
    try {
      var destinoKindle = new URL(kindleUrl);
      if (destinoKindle.protocol === "https:") {
        document.querySelectorAll(".kindle-link").forEach(function (link) {
          link.href = destinoKindle.href;
          link.textContent = "Comprar no Kindle";
          link.removeAttribute("aria-disabled");
          link.removeAttribute("role");
        });
        document.querySelectorAll(".disponibilidade").forEach(function (aviso) {
          aviso.textContent = "Disponível na Amazon Kindle.";
        });
      }
    } catch (e) { /* Mantém o aviso de lançamento se o endereço não for válido. */ }
  }
})();
