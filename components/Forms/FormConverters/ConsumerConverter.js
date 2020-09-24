export default class ConsumerConverter {
  /**
   *
   * @param {*} consumerData
   * @param {*} consumerAddressData
   * @returns {*} consumerData
   */
  static convertFormDataToDto(consumerData, consumerAddressData) {
    consumerData.addresses = [];
    consumerData.addresses.push(consumerAddressData);
    consumerData.role = ['ROLE_CONSUMER'];

    return consumerData;
  }
}
