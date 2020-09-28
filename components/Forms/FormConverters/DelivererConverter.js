export default class DelivererConverter {
  /**
   *
   * @param {*} delivererData
   * @returns {*} delivererData
   */
  static convertFormDataToDto(delivererData) {
    delivererData.role = ['ROLE_DELIVERER'];

    return delivererData;
  }
}
