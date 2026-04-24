document.addEventListener("DOMContentLoaded", () => {
  if (!window.mermaid) {
    return;
  }

  window.mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
    },
  });

  window.mermaid.run({
    querySelector: ".mermaid",
  });
});
