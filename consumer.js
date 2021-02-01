let buttons = document.querySelectorAll(".button-div button");
let inputNum = document.querySelector("#inputNum");

function setOutput(text) {
  inputNum.innerText = text;
}

let calculator = new Calculator();

function handleCalculatorButtonClick(event) {

    event.preventDefault()

  let key = event.target.dataset.key;

  switch (key) {
    case KEYS[KEYS_NAME.CLEAR_ALL]:
      calculator.clear();
      setOutput("");
      break;
    case KEYS[KEYS_NAME.DELETE]:
      let newQuery = calculator.delete();
      setOutput(newQuery);
      break;
    case KEYS[KEYS_NAME.EQUALS]:
      try {
        let solution = calculator.solve();
        calculator.query = solution.toString();
        setOutput(solution.toString());
      } catch (e) {
        setOutput(e.message);
      }
      break;
    default:
      let newQ = calculator.updateQuery(key);
      setOutput(newQ);
    //Handle other keys
  }
}
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", handleCalculatorButtonClick);
});