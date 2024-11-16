const figure = document.getElementById("figure")
// figure.addEventListener("click", function () {
//   if (figure.classList.contains("triangled")) {
//     figure.classList.remove("triangled")
//   } else if (figure.classList.contains("rounded")) {
//     figure.classList.add("triangled")
//     figure.classList.remove("rounded")
//   } else {
//     figure.classList.add("rounded")
//   }
// })

figure.onclick = function () {
  if (figure.classList.contains("triangled")) {
    figure.classList.remove("triangled")
  } else if (figure.classList.contains("rounded")) {
    figure.classList.add("triangled")
    figure.classList.remove("rounded")
  } else {
    figure.classList.add("rounded")
  }
}
