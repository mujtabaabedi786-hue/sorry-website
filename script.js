const text = "I am really sorry... Please forgive me 💔";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("message").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

window.onload = typeWriter;
