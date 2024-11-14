const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = Sample
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue
function Sample(e) {
  console.log(e)
}
Sample
document.onkeydown = function (e) {
  console.log(e.key)
}
function multiply(a, b) {
  return a * b
}
console.log(multiply(2, 3))
if ("") {
  console.log("こんにちは")
}
