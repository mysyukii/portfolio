const form = document.getElementById("contactForm");
const successBox = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop instant redirect

  // show success box
  form.style.display = "none";
  successBox.style.display = "block";

  // continue actual form submission
  setTimeout(() => {
    form.submit();
  }, 500);
});
