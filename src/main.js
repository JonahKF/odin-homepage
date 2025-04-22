import "./style.css";

const screenController = () => {
  console.log("js loaded");

  const languageToggle = () => {
    const isJapanese = document.getElementById("language_mode").checked;

    const englishElements = document.querySelectorAll('.lang-text[lang="en"]');
    const japaneseElements = document.querySelectorAll('.lang-text[lang="ja"]');

    if (isJapanese) {
      englishElements.forEach((el) => (el.style.display = "none"));
      japaneseElements.forEach((el) => (el.style.display = "inline-block"));
      document.documentElement.lang = "ja";
    } else {
      japaneseElements.forEach((el) => (el.style.display = "none"));
      englishElements.forEach((el) => (el.style.display = "inline-block"));
      document.documentElement.lang = "en";
    }
  };

  languageToggle();

  const languageToggleBtn = document.querySelector(".btn-language-switch");
  languageToggleBtn.addEventListener("click", languageToggle);

  document.addEventListener("keydown", (event) => {
    if (event.key === "t" || event.key === "T") {
      const checkbox = document.getElementById("language_mode");
      checkbox.checked = !checkbox.checked;
      languageToggle();
    }
  });

  const kbds = document.querySelectorAll("kbd");
  kbds.forEach((kbd) => {
    document.addEventListener("keydown", (event) => {
      if (
        event.key === kbd.textContent.toLowerCase() ||
        event.key === kbd.textContent.toUpperCase()
      ) {
        kbd.style.background = "#859900";
        kbd.style.color = "var(--bg)";
        kbd.nextSibling.nextSibling.style.opacity = "1";
      }
    });

    document.addEventListener("keyup", () => {
      kbd.style.background = "inherit";
      kbd.style.color = "var(--text)";
      kbd.nextSibling.nextSibling.style.opacity = "0";
    });
  });
};

document.addEventListener("DOMContentLoaded", screenController);
