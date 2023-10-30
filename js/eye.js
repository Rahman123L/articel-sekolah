const button = document.getElementById("button");

button.addEventListener("click", () => {
  const input = document.getElementById("input-password");
  const img = document.getElementById("img-eye");
  const type = input.type;

  if (type === "password") {
    input.setAttribute("type", "text");
    img.setAttribute("src", "images/Eye.svg");
  } else {
    input.setAttribute("type", "password");
    img.setAttribute("src", "images/Eyeslash.svg");
  }
});