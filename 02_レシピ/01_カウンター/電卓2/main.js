const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const crossButton = document.getElementById("cross-button")
const divideButton = document.getElementById("divide-button")
const equalButton = document.getElementById("equal-button")

const keypoint = document.getElementById("key.")
const keyC = document.getElementById("keyC")
let calculate_type = NaN
let result = ""
let middle_result = 0
for (let i = 0; i <= 9; i++) {
  var button = document.getElementById(`key${i}`)

  button.onclick = function () {
    result += i.toString()
    display.textContent = result
  }
}

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  middle_result = result
  result = ""
  calculate_type = "plus"
}
minusButton.onclick = function () {
  middle_result = result
  result = ""
  calculate_type = "minus"
}
crossButton.onclick = function () {
  middle_result = result
  result = ""
  calculate_type = "cross"
}
divideButton.onclick = function () {
  middle_result = result
  result = ""
  calculate_type = "divide"
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
  result = Math.round(result * 10 ** 8) / 10 ** 8
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
