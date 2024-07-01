function loadTranslations(language, callback) {
  fetch(`locale/${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
}

function changeLanguage(language) {
  loadTranslations(language, (translations) => {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      element.innerHTML = translations[key];
    });

    document.querySelectorAll("[data-translate-attr]").forEach((element) => {
      const attrData = element.getAttribute("data-translate-attr").split(":");
      const attr = attrData[0];
      const key = attrData[1];
      console.log('key: ', key);
      console.log('translations[key]: ', translations[key]);
      element.setAttribute(attr, translations[key]);
    });

    document.documentElement.lang = language;
  });
}

// Set default language
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("de");
});
