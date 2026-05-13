document.addEventListener("DOMContentLoaded", () => {
  if (!window.mermaid) {
    return;
  }

  document.querySelectorAll("pre.mermaid > code").forEach((code) => {
    const pre = code.parentElement;
    pre.textContent = code.textContent;
  });

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
