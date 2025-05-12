document.addEventListener("DOMContentLoaded", () => {
  const emailSpans = document.querySelectorAll("#email-text-conversion");
  emailSpans.forEach((emailSpan) => {
    emailSpan.textContent = "JonahKF@gmail.com";
  });
});
