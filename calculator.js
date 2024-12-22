let calculation = "";
      let number = "";
      let answer = 0;
      let num1 = 0;
      let num2 = 0;
      let opaerterForCal = "";
      let display = "";
      document.querySelector(".js-answer").innerHTML = `0`;

      function readingPart(number) {
        if (
          number === "+" ||
          number === "-" ||
          number === "*" ||
          number === "/"
        ) {
          opaerterForCal = number;
          num1 = Number(calculation);
          display += number;
          document.querySelector(".js-answer").innerHTML = `${display}`;
          calculation = "";
        } else if (number === "=") {
          num2 = Number(calculation);
          answer = calculationPart(num1, num2, opaerterForCal);
          document.querySelector(".js-answer").innerHTML = `${answer}`;
          calculation = "";
        } else if (number === "clear") {
          document.querySelector(".js-answer").innerHTML = `0`;
          calculation = "";
          num1 = 0;
          num2 = 0;
          opaerterForCal = "";
          display = "";
        } else {
          calculation += number;
          display += number;
          document.querySelector(".js-answer").innerHTML = `${display}`;
        }
      }

      function calculationPart(num1, num2, opaerterForCal) {
        answer = 0;
        if (opaerterForCal === "+") {
          answer = num1 + num2;
        } else if (opaerterForCal === "-") {
          answer = num1 - num2;
        } else if (opaerterForCal === "*") {
          answer = num1 * num2;
        } else if (opaerterForCal === "/") {
          answer = num1 / num2;
        }
        return answer;
      }