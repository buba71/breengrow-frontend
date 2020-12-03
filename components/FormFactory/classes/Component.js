export default class component {
  #className;
  #element;
  #event;
  #label;
  #path;

  /**
   *
   * @param {*} element
   */
  setElement(element) {
    this.element = element;
  }

  /**
   *
   * @param {*} event
   */
  setEvent(event) {
    this.event = event;
  }

  /**
   *
   * @param {*} name
   */
  setClassName(className) {
    this.className = className;
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
   * @param {*} path
   */
  setPath(path) {
    this.path = path;
  }
}
