const containerEl = document.querySelector('body')
let num1El = document.getElementById('number1')
let num2El = document.getElementById('number2')
let errorMsg = document.getElementById('error-msg')
let result = document.querySelector('#result')
const resetButton = document.getElementById('reset')
let answer;
result.innerText;

containerEl.addEventListener('click', function (e) {
    let num1 = parseInt(num1El.value)
    let num2 = parseInt(num2El.value)
    const target = e.target
    const addNums = target.dataset.addNumbers
    const subtractNums = target.dataset.subtractNumbers
    const multiplyNums = target.dataset.multiplyNumbers
    const divideNums = target.dataset.divideNumbers
    const moduloNums = target.dataset.moduloNumbers


    // From Gina Russo
  if (addNums && !isNaN(num1) && addNums && !isNaN(num2)) {
        answer = num1 + num2
        result.innerText = answer
        } else if (subtractNums && !isNaN(num1) && subtractNums && !isNaN(num2)) {
            answer = num1 - num2
            result.innerText = answer
        } else if (multiplyNums && !isNaN(num1) && multiplyNums && !isNaN(num2)) {
            answer = num1 * num2
            result.innerText = answer
        } else if ((divideNums && num2 !== 0) && (divideNums && !isNaN(num2))) {
            answer = num1 / num2
            result.innerText = parseFloat(answer.toFixed(1))
        } else if ((moduloNums && num2 !== 0) && (moduloNums && !isNaN(num2))) {
            answer = num1 % num2
            result.innerText = answer
        } else if (moduloNums && num2 === 0) {
                errorMsg.innerHTML = `<p class="error-msg">Invalid 2nd number for modulo (0)</p>`
                result.innerText = ""
                const myTimeout = setTimeout(resetBtn, 2000);
            }
    resetButton.addEventListener('click', resetBtn)
    }
 )

function resetBtn() {
    answer = ""
    result.innerText = answer
    num1El.value = ""
    num2El.value = ""
    num1El.innerText = num1El
    num2El.innerText = num2El
    errorMsg.innerHTML = `Choose how to calculate`
}