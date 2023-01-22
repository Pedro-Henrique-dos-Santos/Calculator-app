import { Screnn } from "./screen.js";
class Calculator extends Screnn {
    functionsCalculator() {
        this.mathPanel = document.querySelector(".math-panel");
        this.numbers = document.querySelectorAll(".number");
        this.operators = document.querySelectorAll(".operator");
        this.resources = document.querySelectorAll(".resources");
        this.result = document.querySelector(".result");
        this.numbers.forEach((number) => {
            number.addEventListener("click", () => {
                this.mathPanel.textContent += number.textContent;
            });
        });
        this.operators.forEach((operator) => {
            operator.addEventListener("click", () => {
                if (this.mathPanel.innerHTML.includes("+") ||
                    this.mathPanel.innerHTML.includes("-") ||
                    this.mathPanel.innerHTML.includes("x") ||
                    this.mathPanel.innerHTML.includes("/")) {
                    return;
                }
                this.mathPanel.textContent += operator.textContent;
            });
        });
        this.resources.forEach((data) => {
            data.addEventListener("click", () => {
                if (data.textContent === "reset") {
                    this.mathPanel.innerHTML = "";
                }
                if (data.innerHTML === "del") {
                    const att = this.mathPanel.innerHTML;
                    this.mathPanel.textContent = att.slice(0, -1);
                }
            });
        });
        this.result.addEventListener("click", () => {
            if (this.mathPanel.innerHTML.includes("+")) {
                let panel = this.mathPanel.innerHTML;
                const previus = panel.split("+");
                const resultOperation = parseInt(previus[0]) + parseInt(previus[1]);
                this.mathPanel.textContent = resultOperation.toString();
            }
            if (this.mathPanel.innerHTML.includes("-")) {
                let panel = this.mathPanel.innerHTML;
                const previus = panel.split("-");
                const resultOperation = parseInt(previus[0]) - parseInt(previus[1]);
                this.mathPanel.textContent = resultOperation.toString();
            }
            if (this.mathPanel.innerHTML.includes("/")) {
                let panel = this.mathPanel.innerHTML;
                const previus = panel.split("/");
                const resultOperation = parseInt(previus[0]) / parseInt(previus[1]);
                this.mathPanel.textContent = resultOperation.toString();
            }
            if (this.mathPanel.innerHTML.includes("x")) {
                let panel = this.mathPanel.innerHTML;
                const previus = panel.split("x");
                const resultOperation = parseInt(previus[0]) * parseInt(previus[1]);
                this.mathPanel.textContent = resultOperation.toString();
            }
        });
    }
    alterTheme() {
        this.labels = document.querySelectorAll(".label-radio");
        this.dataTheme = document.querySelectorAll("[data-theme]");
        this.labels.forEach((label) => {
            label.addEventListener("click", () => {
                this.labels.forEach((item) => {
                    item.classList.remove("selected");
                });
                label.classList.add("selected");
                const corresponding = label.getAttribute("for");
                if (corresponding === "radio-one") {
                    this.dataTheme.forEach((data) => {
                        data.setAttribute("data-theme", "one");
                    });
                }
                else if (corresponding == "radio-two") {
                    this.dataTheme.forEach((data) => {
                        data.setAttribute("data-theme", "two");
                    });
                }
                else if (corresponding == "radio-three") {
                    this.dataTheme.forEach((data) => {
                        data.setAttribute("data-theme", "three");
                    });
                }
            });
        });
    }
}
export { Calculator };
