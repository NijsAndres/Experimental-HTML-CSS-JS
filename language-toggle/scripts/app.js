const languagesArray = {
  en: {
    title: "Language Toggle",
    description: "This is a simple language toggle example.",
  },
  nl: {
    title: "Taal Wisselaar",
    description: "Dit is een eenvoudig voorbeeld van een taal wisselaar.",
  },
};

// #region ***  DOM references                           ***********
// #endregion

// #region ***  Callback-Visualisation - show___         ***********

const showLanguage = () => {
  const savedLanguage = localStorage.getItem("lang") || "en";
  document.documentElement.lang = savedLanguage;
  const titleElement = document.querySelector(".js-title");
  const descriptionElement = document.querySelector(".js-description");
  titleElement.innerHTML = languagesArray[savedLanguage].title;

  descriptionElement.innerHTML = languagesArray[savedLanguage].description;
  showLanguageToggle(savedLanguage);
};

const showLanguageToggle = (language) => {
  const languageToggleButtons = document.querySelectorAll(".js-language-toggle");
  for (const button of languageToggleButtons) {
    button.classList.remove("c-language__toggle--active");
  }

  const activeButton = document.querySelector(`.js-language-toggle[data-lang="${language}"]`);
  if (activeButton) {
    activeButton.classList.add("c-language__toggle--active");
  }
};

// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
// #endregion

// #region ***  Data Access - get___                     ***********
// #endregion

// #region ***  Event Listeners - listenTo___            ***********

const listenToLanguageChange = () => {
  const languageToggleButtons = document.querySelectorAll(".js-language-toggle");
  for (const button of languageToggleButtons) {
    button.addEventListener("click", () => {
      const newLanguage = button.dataset.lang;
      document.documentElement.lang = newLanguage;
      localStorage.setItem("lang", newLanguage);
      showLanguage();
    });
  }
};
// #endregion

// #region ***  Init / DOMContentLoaded                  ***********

const init = () => {
  console.log("DOM");
  showLanguage();
  listenToLanguageChange();
};

document.addEventListener("DOMContentLoaded", init);

// #endregion
