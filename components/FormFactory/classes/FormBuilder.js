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
   */
  addInput(type, name, options = []) {
    const input = new Input();

    FormBuilder.checkOptions(input, options);

    input.setComponent('Input'); // Attention à la majuscule pour le nom du composant!!
    input.setType(type);
    input.setName(name);
    input.setPlaceholder(name);
    this.form.push(input);
  }

  /**
   *
   * @param {*} input
   * @param {*} options
   */
  static checkOptions(input, options) {
    if (!Array.isArray(options))
      throw new TypeError(`parameter options is not an array ${options}`);

    FormBuilder.setOptions(input, options);
  }

  getForm() {
    return this.form;
  }

  /**
   *
   * @param {*} input
   * @param {*} options
   * @returns new Input
   */
  static setOptions(input, options) {
    input.setClassName(options[0]);

    return input;
  }
}
