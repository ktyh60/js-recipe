const display = document.getElementById("display")
let limit = 15
let count = 0
const countUp = function () {
  count += 1
  if (count >= limit) {
    clearInterval(id)
  }

  if (count % 3 === 0) {
    display.textContent = count + "!!!"
  } else {
    display.textContent = count
  }
}
let id = null

id = setInterval(countUp, 1000)
