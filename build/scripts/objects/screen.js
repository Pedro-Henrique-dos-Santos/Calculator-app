export class Screnn {
    constructor() {
        this.location = document.querySelector('#root');
    }
    renderCalculator() {
        this.location.innerHTML += `
        <main class="main-content">
            <section data-theme="three" class="box-one">
                    <h3 class="indicator" data-theme="three">calc</h3>
                    <div class="content-theme">
                    <small data-theme="three" class="small-indicator">Theme</small>
                        <span data-theme="three" class="span-indicator">1</span>
                        <span data-theme="three" class="span-indicator">2</span>
                        <span data-theme="three" class="span-indicator">3</span>
                        <div data-theme="three" class="box-radio">
                            <label data-theme="three" class="label-radio selected" for="radio-one"></label>
                            <label data-theme="three" class="label-radio" for="radio-two"></label>
                            <label data-theme="three" class="label-radio" for="radio-three"></label>
                            <input type="radio" name="radio-theme" id="radio-one" checked />
                            <input type="radio" name="radio-theme" id="radio-two"/>
                            <input type="radio" name="radio-theme" id="radio-three"/>
                        </div>
                    </div>
            </section>

            <section data-theme="three" class="box-two">
                <div data-theme="three" class="math-panel">  
                    125564757573,476545613121212121255
                </div>
            </section>

            <section data-theme="three" class="box-three">
                <button class="number">7</button>
                <button class="number">8</button>
                <button class="number">9</button>
                <button class="resources">del</button>
                <button class="number">4</button>
                <button class="number">5</button>
                <button class="number">6</button>
                <button class="operator">+</button>
                <button class="number">1</button>
                <button class="number">2</button>
                <button class="number">3</button>
                <button class="operator">-</button>
                <button class="operator">.</button>
                <button class="number">0</button>
                <button class="operator">/</button>
                <button class="operator">x</button>
                <button class="span-two resources">reset</button>
                <button class="span-two operator result">=</button>
            </section>
        </main>

        <footer>
            <div data-theme="three" class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Leeondras</a>.
            </div>
        </footer>
        
        `;
    }
}
