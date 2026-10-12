(function () {
  "use strict";

  var visualizador = document.getElementById("visualizador");
  var imagemAmpliada = document.getElementById("imagem-ampliada");
  var legendaImagem = document.getElementById("imagem-legenda");
  if (!visualizador || !imagemAmpliada || !legendaImagem) return;
  var acionadorImagem = null;
  var overflowAnterior = "";

  document.querySelectorAll(".ampliar-imagem").forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Mantém abrir em nova aba e o link direto quando dialog não é suportado.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
          typeof visualizador.showModal !== "function") return;
      event.preventDefault();
      acionadorImagem = link;
      var original = link.querySelector("img");
      imagemAmpliada.src = link.href;
      imagemAmpliada.alt = original.alt;
      legendaImagem.textContent = original.alt;
      overflowAnterior = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      visualizador.showModal();
    });
  });
  visualizador.querySelector(".visualizador-fechar").addEventListener("click", function () {
    visualizador.close();
  });
  visualizador.addEventListener("click", function (event) {
    if (event.target === visualizador) visualizador.close();
  });
  visualizador.addEventListener("close", function () {
    document.body.style.overflow = overflowAnterior;
    imagemAmpliada.removeAttribute("src");
    if (acionadorImagem) acionadorImagem.focus({ preventScroll: true });
  });
})();
