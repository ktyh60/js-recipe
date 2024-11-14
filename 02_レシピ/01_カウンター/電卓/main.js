const display = document.getElementById("display")
const input1 = document.getElementById("input-text1")
const input2 = document.getElementById("input-text2")

const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const crossButton = document.getElementById("cross-button")
const divideButton = document.getElementById("divide-button")
const equalButton = document.getElementById("equal-button")

let result = 0
console.log(input1)
// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // result を更新
  result += input1.valueAsNumber + input2.valueAsNumber
  // result を表示
  display.textContent = result
}
minusButton.onclick = function () {
  // result を更新
  result -= 1
  // result を表示
  display.textContent = result
}
crossButton.onclick = function () {
  // result を更新
  result *= 2
  // result を表示
  display.textContent = result
}
