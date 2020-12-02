import Component from './Component.js';
import Input from './Input.js';

export default class FormBuilder {
  #form;

  constructor() {
    this.form = [];
  }

  /**
   *
   * @param {*} type
   * @param {*} name
   * @param {*} options
   */
  addElement(element, options = []) {
    if (element === 'Input') {
      this.buildInput(element, options);
    } else {
      this.buildComponent(element, options);
    }
    // switch (element) {
    //   case 'Input':
    //     this.buildInput(element, options);
    //     break;
    //   case 'GeoSearch':
    //     this.buildComponent(element, options);
    //     break;
    //   default:
    //     console.log(`This element does not exist!!`);
    // }
  }

  buildComponent(element, options) {
    const component = new Component();
    component.setElement(element);
    component.setLabel(options[0]);
    component.setEvent(options[1]);
    component.setClassName(options[2]);
    this.form.push(component);
  }

  buildInput(element, options) {
    if (!Array.isArray(options))
      throw new TypeError(`parameter options is not an array ${options}`);

    const input = new Input();

    input.setElement(element); // Attention à la majuscule pour le nom du composant!!
    input.setType(options[0]);
    input.setName(options[1]);
    input.setLabel(options[1]);
    input.setPlaceholder(options[2]);
    input.setClassName(options[3]);

    this.form.push(input);
  }

  /**
   * @return {array}
   */
  getForm() {
    return this.form;
  }
}
