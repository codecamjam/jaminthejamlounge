export const toggleDarkMode = (doc, isDarkMode) => {
  if (doc) {
    // Swap the values
    if (isDarkMode) {
      doc.current.style.setProperty("--text", "#fff");
      doc.current.style.setProperty("--background", "#000");
    } else {
      doc.current.style.setProperty("--text", "#000");
      doc.current.style.setProperty("--background", "#fff");
    }

    if (localStorage) {
      localStorage.setItem("TFT_DARK_MODE", JSON.stringify(isDarkMode));
    }
  }
};
