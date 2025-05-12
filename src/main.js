import "./style.css";

const screenController = () => {
  // console.log("js loaded");

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

  // Initiate toggle
  if (navigator.language !== "ja" || navigator.language !== "ja-JP") {
    languageToggle();
  }

  const languageToggleBtn = document.querySelector(".btn-language-switch");
  languageToggleBtn.addEventListener("click", languageToggle);

  const contactBtn = document.querySelector(".profile-contact-btn");
  contactBtn.addEventListener("click", () => {
    const contactModal = document.querySelector(".contact-modal");
    contactModal.showModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "t" || event.key === "T") {
      const checkbox = document.getElementById("language_mode");
      checkbox.checked = !checkbox.checked;
      languageToggle();
    }

    if (event.key === "c" || event.key === "C") {
      const contactModal = document.querySelector(".contact-modal");
      contactModal.showModal();
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

  const skillCards = document.querySelectorAll(".skills-card");
  skillCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardClass = Array.from(card.classList).find((cls) =>
        [
          "html",
          "css",
          "js",
          "ga",
          "tableau",
          "looker",
          "ads",
          "bigquery",
          "replit",
        ].includes(cls),
      );

      const dialog = document.querySelector(`dialog#${cardClass}`);

      if (dialog) {
        dialog.showModal();
      }
    });
  });

  const closeButtons = document.querySelectorAll(".modal-close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (dialog) {
        dialog.close();
      }
    });
  });

  const dialogs = document.querySelectorAll("dialog");
  dialogs.forEach((dialog) => {
    dialog.addEventListener("mousedown", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });

  const emailText = document.querySelector("#email-text-conversion");
  const copyButton = document.querySelector(".email-copy-container");
  const copyButtonModal = document.querySelector(
    ".email-copy-container.in-modal",
  );
  const copiedThumb = document.querySelector(".copied-thumb");
  const copiedThumbModal = document.querySelector(".copied-thumb.in-modal");

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText.textContent);
    console.log(`Copied ${emailText.textContent} to clipboard.`);

    copiedThumb.textContent = "Copied!";
    copiedThumb.classList.add("show");

    setTimeout(() => {
      copiedThumb.classList.remove("show");
    }, 1000);
  });

  copyButtonModal.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText.textContent);
    console.log(`Copied ${emailText.textContent} to clipboard.`);

    copiedThumbModal.textContent = "Copied!";
    copiedThumbModal.classList.add("show");

    setTimeout(() => {
      copiedThumbModal.classList.remove("show");
    }, 1000);
  });
};

document.addEventListener("DOMContentLoaded", screenController);
