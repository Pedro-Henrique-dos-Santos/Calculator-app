import { Screnn } from "./screen.js";

interface Calculator {
  labels: NodeList;
  dataTheme: NodeList;
  mathPanel: Element;
  numbers: NodeList;
  operators: NodeList;
  resources: NodeList;
  result: Element;
}

class Calculator extends Screnn {
  functionsCalculator(): void {
    this.mathPanel = document.querySelector(".math-panel");
    this.numbers = document.querySelectorAll(".number");
    this.operators = document.querySelectorAll(".operator");
    this.resources = document.querySelectorAll(".resources");
    this.result = document.querySelector(".result");

    this.numbers.forEach((number:Element) => {
      number.addEventListener("click", () => {
        this.mathPanel.textContent += number.textContent;
      });
    });
    this.operators.forEach((operator:Element) => {
      operator.addEventListener("click", () => {
        if (
          this.mathPanel.innerHTML.includes("+") ||
          this.mathPanel.innerHTML.includes("-") ||
          this.mathPanel.innerHTML.includes("x") ||
          this.mathPanel.innerHTML.includes("/")
        ) {
          return;
        }
        this.mathPanel.textContent += operator.textContent;
      });
    });
    this.resources.forEach((data:Element) => {
      data.addEventListener("click", () => {
        if (data.textContent === "reset") {
          this.mathPanel.innerHTML = "";
        }
        if (data.innerHTML === "del") {
          const att: String = this.mathPanel.innerHTML;
          this.mathPanel.textContent = att.slice(0, -1);
        }
      });
    });

    this.result.addEventListener("click", () => {
      if (this.mathPanel.innerHTML.includes("+")) {
        let panel: String = this.mathPanel.innerHTML;
        const previus = panel.split("+");
        const resultOperation: Number =
          parseInt(previus[0]) + parseInt(previus[1]);
        this.mathPanel.textContent = resultOperation.toString();
      }

      if (this.mathPanel.innerHTML.includes("-")) {
        let panel: String = this.mathPanel.innerHTML;
        const previus = panel.split("-");
        const resultOperation: Number =
          parseInt(previus[0]) - parseInt(previus[1]);
        this.mathPanel.textContent = resultOperation.toString();
      }

      if (this.mathPanel.innerHTML.includes("/")) {
        let panel: String = this.mathPanel.innerHTML;
        const previus = panel.split("/");
        const resultOperation: Number =
          parseInt(previus[0]) / parseInt(previus[1]);
        this.mathPanel.textContent = resultOperation.toString();
      }

      if (this.mathPanel.innerHTML.includes("x")) {
        let panel: String = this.mathPanel.innerHTML;
        const previus = panel.split("x");
        const resultOperation: Number =
          parseInt(previus[0]) * parseInt(previus[1]);
        this.mathPanel.textContent = resultOperation.toString();
      }
    });
  }

  alterTheme(): void {
    this.labels = document.querySelectorAll(".label-radio");
    this.dataTheme = document.querySelectorAll("[data-theme]");
    this.labels.forEach((label:Element) => {
      label.addEventListener("click", () => {
        this.labels.forEach((item:Element) =>{
            item.classList.remove("selected");
        });
        label.classList.add("selected");

        const corresponding = label.getAttribute("for");

        if (corresponding === "radio-one") {
          this.dataTheme.forEach((data:Element) => {
            data.setAttribute("data-theme", "one");
          });
        } else if (corresponding == "radio-two") {
          this.dataTheme.forEach((data:Element) => {
            data.setAttribute("data-theme", "two");
          });
        } else if (corresponding == "radio-three") {
          this.dataTheme.forEach((data:Element) => {
            data.setAttribute("data-theme", "three");
          });
        }
      });
    });
  }
}

export { Calculator };
