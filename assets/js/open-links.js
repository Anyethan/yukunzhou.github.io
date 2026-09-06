document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.getAttribute("href").startsWith("#")) {
      link.removeAttribute("target");
      link.removeAttribute("rel");
      return;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
