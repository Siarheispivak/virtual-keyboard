import './style.scss';

const body = document.querySelector('body');
class elementBuilder {
    constructor(type, parentElement, classes, attributes) {
        this.element = document.createElement(type)
        if (Array.isArray(classes)) {
            for (let i = 0; i < classes.length; i++) {
                this.element.classList.add(classes[i]);
            }
        }
        if (Array.isArray(attributes)) {
            for (let i = 0; i < attributes.length; i++) {
                this.element.add.attributes(attributes[i])
            }
        }
        parentElement.appendChild(this.element)
    }
    getElement() {
        return this.element;
    }
}
const container = new elementBuilder('div', body, ['container']).getElement();
const textarea = new elementBuilder('textarea', container, ['textarea'],).getElement();
textarea.setAttribute('rows', '5');
textarea.setAttribute('cols', '10');
textarea.setAttribute('id', 'textareaId');
const keyboard = new elementBuilder('div', container, ['keyboard']).getElement();

const keys_en_rows = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", `${"\\"}`],
    ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
    ["ctrl", "win", "alt", "space", "⇦", "⇧", "⇩", "⇨"]
];
for (let i = 1; i <= 5; i++) {
    const rowCreate = document.createElement("div");
    rowCreate.classList.add(`row`);
    rowCreate.setAttribute('id', `${i}`);
    keyboard.appendChild(rowCreate);
}
for (let i = 0; i < keys_en_rows.length; i++) {
    for (let k = 0; k < keys_en_rows[i].length; k++) {
        const keyboardDiv = document.createElement('div');
        keyboardDiv.classList.add('keyboard-key')
        keyboardDiv.innerHTML = `${keys_en_rows[i][k]}`;
        document.getElementById(`${i + 1}`).appendChild(keyboardDiv);
        keyboardDiv.addEventListener('click', keyboardClick);
    }
}
function keyboardClick(data) {
    if (this.innerHTML === 'space') {
        document.getElementById('textareaId').value += ' ';
    } else if (this.innerHTML === 'Enter') {
        newLine();
    } else if (this.innerHTML === 'Tab') {
        document.getElementById('textareaId').value += '    ';
    } else if (this.innerHTML === 'caps') {
        document.getElementById('textareaId').value += '';
    } else if (this.innerHTML === 'Shift') {
        document.getElementById('textareaId').value += '';
    } else if (this.innerHTML === 'ctrl') {
        document.getElementById('textareaId').value += '';
    } else if (this.innerHTML === 'win') {
        document.getElementById('textareaId').value += '';
    } else if (this.innerHTML === 'alt') {
        document.getElementById('textareaId').value += '';
    } else if (this.innerHTML === 'Backspace') {
        let currentText = document.getElementById('textareaId').value;
        currentText = currentText.substring(0, currentText.length - 1);
        document.getElementById('textareaId').value = currentText;
    } else {
        document.getElementById('textareaId').value += this.innerHTML;
    }
}
document.addEventListener('keydown', (keyboardPush) => {
    document.getElementById('textareaId').value += keyboardPush.key;
})
function newLine() {
    document.getElementById('textareaId').value += '\r\n';
}