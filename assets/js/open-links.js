document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.origin === window.location.origin) {
      link.removeAttribute("target");
      link.removeAttribute("rel");
      return;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
