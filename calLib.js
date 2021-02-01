const OPERATORS_KEYS = {
    ADDITION: "ADDITION",
    MULTIPLICATION: "MULTIPLICATION",
    SUBTRACTION: "SUBTRACTION",
    PERCENTAGE: "PERCENTAGE",
    DIVISION: "DIVISION"
  };
  const OPERATORS = {
    [OPERATORS_KEYS.ADDITION]: "+",
    [OPERATORS_KEYS.SUBTRACTION]: "-",
    [OPERATORS_KEYS.DIVISION]: "/",
    [OPERATORS_KEYS.PERCENTAGE]: "%",
    [OPERATORS_KEYS.MULTIPLICATION]: "*"
  };
  const PRECEDENCE = [
    OPERATORS[OPERATORS_KEYS.DIVISION],
    OPERATORS[OPERATORS_KEYS.PERCENTAGE],
    OPERATORS[OPERATORS_KEYS.MULTIPLICATION],
    OPERATORS[OPERATORS_KEYS.ADDITION],
    OPERATORS[OPERATORS_KEYS.SUBTRACTION]
  ];
  class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
    modulous(a, b) {
      return a % b;
    }
    divide(a, b) {
      if (b === 0) {
        throw new Error("DIVISION_BY_ZERO");
      }
      return a / b;
    }
    mutiply(a, b) {
      return a * b;
    }
    isNumber(intended) {
      return !isNaN(intended) && isFinite(intended);
    }
    splitQueryStringToArray(querString) {
      let splitBySpace = querString.split(" ");
      return splitBySpace.map((each) => {
        return this.isNumber(each) ? +each : each;
      });
    }
    solve(s) {
      let splitted = this.splitQueryStringToArray(s);
      let executed = splitted;
      for (let index = 0; index < PRECEDENCE.length; index++) {
        const operator = PRECEDENCE[index];
        const helper = (array) => {
          let index = array.indexOf(operator);
          if (index === -1) return;
          let valueBefore = array[index - 1];
          let valueAfter = array[index + 1];
          if (valueAfter === undefined || valueBefore === undefined) {
            throw new Error("UNEXPECTED_END_OF_INPUT");
          }
      }
          let append;
          switch (operator) {
            case OPERATORS[OPERATORS_KEYS.ADDITION]:
              append = this.add(valueBefore, valueAfter);
              break;
            case OPERATORS[OPERATORS_KEYS.SUBTRACTION]:
              append = this.subtract(valueBefore, valueAfter);
              break;
            case OPERATORS[OPERATORS_KEYS.MULTIPLICATION]:
              append = this.mutiply(valueBefore, valueAfter);
              break;
            case OPERATORS[OPERATORS_KEYS.DIVISION]:
              append = this.divide(valueBefore, valueAfter);
              break;
            case OPERATORS[OPERATORS_KEYS.PERCENTAGE]:
              append = this.percentage(valueBefore, valueAfter);
              break;
            default:
              break;
          }
          executed.splice(index - 1, 3, append);
          helper(executed);
      };
  }
  }
  