import { Calculator } from "./scripts/class/calculator.js";
const app = function () {
    const calculator = new Calculator();
    calculator.renderCalculator();
    calculator.alterTheme();
    calculator.functionsCalculator();
};
export { app };
