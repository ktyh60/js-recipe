const FizzBuzz = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        console.log("FizzBuzz")
      } else {
        console.log("Fizz")
      }
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}
FizzBuzz(50)
const yuto_FizzBuzz = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else {
      if (n % 3 === 0) {
        console.log(`Fizz`)
      } else if (n % 5 === 0) {
        console.log(`Buzz`)
      } else {
        console.log(n)
      }
    }
  }
}
const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`FizzBuzz`)
    } else {
      console.log(n)
    }
  }
}
alert("本当にこの選択肢でよろしいですか？")
