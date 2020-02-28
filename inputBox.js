class inputBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode : "open"});


        const inputBoxWrapper = document.createElement('wrapper');
        const inputLeft = document.createElement('section');
        const boxLabel = document.createElement('p');
            let labelText = this.getAttribute('labelText');
            boxLabel.textContent = labelText;
        const inputRight = document.createElement('section');
        const instructions = document.createElement('p');
            let instructionsText = this.getAttribute('instructionsText');
            instructions.textContent = instructionsText;
        const inputBox = document.createElement('input');
        const validation = document.createElement('p');
            let validationText = this.getAttribute('validationText');
            validation.textContent = validationText;

        const linkElem = document.createElement('link');

        let style = document.createElement('style');
        style.textContent = `* {color: green;}`

        shadow.appendChild(linkElem);
        shadow.appendChild(style);

    shadow.appendChild(inputBoxWrapper);
        inputBoxWrapper.appendChild(inputLeft);
            inputLeft.appendChild(boxLabel);
        inputBoxWrapper.appendChild(inputRight);
            inputRight.appendChild(instructions);
            inputRight.appendChild(inputBox);
            inputRight.appendChild(validation);
    }
}

customElements.define('input-form', inputBox);