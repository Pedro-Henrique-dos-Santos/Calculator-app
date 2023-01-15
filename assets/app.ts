import { Calculator } from "./scripts/class/calculator.js"

const app = function (): void {
    const calculator:Calculator = new Calculator()
    calculator.renderCalculator()
    calculator.alterTheme()
    calculator.functionsCalculator()
    
}


export { app }
