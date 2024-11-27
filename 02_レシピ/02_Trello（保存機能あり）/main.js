const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
let memo = []
addButton.onclick = function () {
  memo.push(inputElement.value)
  container.textContent = ""
  inputElement.value = ""
  for (let i = 0; i < memo.length; i++) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = memo[i]
    container.append(card)
  }
  localStorage.memo = JSON.stringify(memo)
}
if (localStorage.memo) {
  console.log(JSON.parse(localStorage.memo))
  const localMemo = JSON.parse(localStorage.memo)
  memo = localMemo
  for (let i = 0; i < localMemo.length; i++) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = localMemo[i]
    container.append(card)
  }
}
