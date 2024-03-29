export const preventResizeAnime = (doc) => {
  if (doc) {
    let resizeTimer;
    window.addEventListener("resize", () => {
      doc.current.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        doc.current.classList.remove("resize-animation-stopper");
      }, 400);
    });
  }
};
