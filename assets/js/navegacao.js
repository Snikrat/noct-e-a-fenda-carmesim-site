(function () {
  "use strict";

  var barra = document.getElementById("barra-progresso");
  var links = Array.prototype.slice.call(document.querySelectorAll(".topo-nav a[href^='#']"));
  var secoes = links.map(function (l) { return document.querySelector(l.getAttribute("href")); });
  function aoRolar() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (barra) barra.style.transform = "scaleX(" + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ")";
    var atual = -1;
    for (var s = 0; s < secoes.length; s++) {
      if (secoes[s] && secoes[s].getBoundingClientRect().top < window.innerHeight * 0.4) atual = s;
    }
    links.forEach(function (l, j) {
      l.classList.toggle("atual", j === atual);
      if (j === atual) l.setAttribute("aria-current", "location");
      else l.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", aoRolar, { passive: true });
  window.addEventListener("resize", aoRolar);
  aoRolar();
})();
