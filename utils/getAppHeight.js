const appHeight = (doc) => {
  doc.current.style.setProperty("--app-height", `${window.innerHeight}px`);
};

export const getAppHeight = (doc) => {
  if (doc) {
    window.addEventListener("resize", () => appHeight(doc));
    appHeight(doc);
  }
};
