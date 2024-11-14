const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const crossButton = document.getElementById("cross-button")
const divideButton = document.getElementById("divide-button")
const equalButton = document.getElementById("equal-button")

const keypoint = document.getElementById("key.")
const keyC = document.getElementById("keyC")
for (let i = 0; i <= 9; i++) {
  var button = document.getElementById(`key${i}`)

  button.onclick = function () {
    result += i.toString()
    display.textContent = result
  }
}
let calculate_type = NaN
let result = ""
let middle_result = 0
// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // result を更新
  middle_result = result
  result = ""
  calculate_type = "plus"
  // display.textContent = ""
  // result を表示
}
minusButton.onclick = function () {
  // result を更新
  middle_result = result
  result = ""
  calculate_type = "minus"
  // result を表示
}
crossButton.onclick = function () {
  // result を更新
  middle_result = result
  result = ""
  calculate_type = "cross"
  // display.textContent = 0
}
divideButton.onclick = function () {
  // result を更新
  middle_result = result
  result = ""
  calculate_type = "divide"
  // display.textContent = 0
}
equalButton.onclick = function () {
  // result を更新
  if (calculate_type === "plus") {
    result = Number(middle_result) + Number(result)
  } else if (calculate_type === "minus") {
    result = Number(middle_result) - Number(result)
  } else if (calculate_type === "cross") {
    result = Number(middle_result) * Number(result)
  } else if (calculate_type === "divide") {
    result = Number(middle_result) / Number(result)
  }

  calculate_type = NaN
  // result を表示
  display.textContent = result
}
keyC.onclick = function () {
  // result を更新
  result = ""
  // result を表示
  display.textContent = 0
}
keypoint.onclick = function () {
  // result を更新
  if (result === "") {
    result += "0."
  } else {
    result += "."
  }
  // result を表示
  display.textContent = result
}
