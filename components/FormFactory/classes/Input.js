export default class Input {
  #className; // css class
  #component;
  #label;
  #type;
  #name;
  #placeholder;

  /**
   *
   * @param {*} className
   * Add a class css to input form.
   */
  setClassName(className) {
    this.className = className;
  }

  /**
   *
   * @param {*} input
   */
  setComponent(input) {
    this.component = input;
  }

  /**
   *
   * @param {*} label
   */
  setLabel(label) {
    this.label = label;
  }

  /**
   *
   * @param {*} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   *
   * @param {*} placeholder
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
  }

  /**
   *
   * @param {*} type
   */
  setType(type) {
    this.type = type;
  }
}
