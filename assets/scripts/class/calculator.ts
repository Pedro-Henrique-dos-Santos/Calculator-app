import { Screnn } from "./screen.js"

interface Calculator {
    labels: any
    dataTheme: any
    mathPanel: any
    numbers: any
    operators: any
    resources: any
    result: any
}

class Calculator extends Screnn {

    functionsCalculator(): void {
        this.mathPanel = document.querySelector('.math-panel')
        this.numbers = document.querySelectorAll('.number')
        this.operators = document.querySelectorAll('.operator')
        this.resources = document.querySelectorAll('.resources')
        this.result = document.querySelector('.result')
        this.numbers.forEach(number => {
            number.addEventListener('click', () => {
                this.mathPanel.innerHTML += number.innerText
            })
        })
        this.operators.forEach(operator => {
            operator.addEventListener('click', () => {
                if(this.mathPanel.innerHTML.includes('+') || this.mathPanel.innerHTML.includes('-') || this.mathPanel.innerHTML.includes('x') || this.mathPanel.innerHTML.includes('/')){
                    return
                }
                this.mathPanel.innerHTML += operator.innerText
            })
        })
        this.resources.forEach(data => {
            data.addEventListener('click', () => {
                if (data.innerHTML === 'reset') {
                    this.mathPanel.innerHTML = ''

                }
                if (data.innerHTML === 'del') {
                    const att: any = this.mathPanel.innerHTML
                    this.mathPanel.innerText = att.slice(0, -1)

                }
            })

        })

        this.result.addEventListener('click', () => {
            if (this.mathPanel.innerHTML.includes('+')) {
                let panel: any = this.mathPanel.innerHTML
                const previus =  panel.split('+')
                const resultOperation: Number = parseInt(previus[0]) + parseInt(previus[1])
                this.mathPanel.innerHTML = resultOperation
            }

            if (this.mathPanel.innerHTML.includes('-')) {
                let panel: any = this.mathPanel.innerHTML
                const previus =  panel.split('-')
                const resultOperation: Number = parseInt(previus[0]) - parseInt(previus[1])
                this.mathPanel.innerHTML = resultOperation
            }

            if (this.mathPanel.innerHTML.includes('/')) {
                let panel: any = this.mathPanel.innerHTML
                const previus =  panel.split('/')
                const resultOperation: Number = parseInt(previus[0]) / parseInt(previus[1])
                this.mathPanel.innerHTML = resultOperation
            }

            if (this.mathPanel.innerHTML.includes('x')) {
                let panel: any = this.mathPanel.innerHTML
                const previus =  panel.split('x')
                const resultOperation: Number = parseInt(previus[0]) * parseInt(previus[1])
                this.mathPanel.innerHTML = resultOperation
            }
        })


    }

    alterTheme(): void {
        this.labels = document.querySelectorAll('.label-radio')
        this.dataTheme = document.querySelectorAll('[data-theme]')
        this.labels.forEach(label => {

            label.addEventListener('click', () => {
                this.labels.forEach(item => {
                    item.classList.remove('selected')
                })
                label.classList.add('selected')

                const corresponding = label.getAttribute('for')

                if (corresponding === 'radio-one') {
                    this.dataTheme.forEach(data => {
                        data.setAttribute('data-theme', 'one')
                    })
                } else if (corresponding == 'radio-two') {
                    this.dataTheme.forEach(data => {
                        data.setAttribute('data-theme', 'two')
                    })
                } else if (corresponding == 'radio-three') {
                    this.dataTheme.forEach(data => {
                        data.setAttribute('data-theme', 'three')
                    })
                }
            })

        })
    }
}





export { Calculator }