const catImage = document.getElementById("cat-image")
const dogImage = document.getElementById("dog-image")

const refleshButton = document.getElementById("reflesh")
const choiceButton = document.getElementById("dog-choice")
const dogOptions = document.getElementById("options")

// 指定したサーバーにデータを取りに行く
fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    catImage.src = data[0].url // 画像を表示する
  })
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    dogImage.src = data.message
  })
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    const dogBreeds = Object.keys(data.message)
    dogOptions.textContent = ""
    for (let i = 0; i < dogBreeds.length; i++) {
      const option = document.createElement("option")
      option.textContent = dogBreeds[i]
      dogOptions.append(option)
    }
  })
choiceButton.onclick = function () {
  const choice = document.getElementById("options")
  const pictureNumber = document.getElementById("picture-number").value
  const selectedValue = choice.value
  fetch(
    `https://dog.ceo/api/breed/${selectedValue}/images/random/${pictureNumber}`,
  )
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      dogImage.textContent = ""
      for (let i = 0; i < pictureNumber; i++) {
        const Image = document.createElement("img")
        Image.src = data.message[i]
        dogImage.append(Image)
      }
    })
}
refleshButton.onclick = function () {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      console.log("ok")
      catImage.src = data[0].url // 画像を表示する
    })
}
