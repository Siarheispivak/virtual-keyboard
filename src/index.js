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


