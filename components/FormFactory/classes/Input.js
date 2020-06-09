export default class Input {
  #className;
  #component;
  #label;
  #type;
  #name;
  #placeholder;

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
