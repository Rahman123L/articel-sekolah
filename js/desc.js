let deskripsi = document.getElementById("desc");
let allText = document.getElementById("all");

let value = deskripsi.innerText;
deskripsi.innerText = value.substring(0, 65);

const allTextChange = (e) => {
  if (e == "all") {
    allText.style.display = "none";
    deskripsi.style.animation = "fadeIn 1s";
    deskripsi.innerText = value.substring(0, value.length);
  } else {
    allText.style.display = "inline";
    deskripsi.style.animation = "";
    deskripsi.innerText = value.substring(0, 65);
  }
};
