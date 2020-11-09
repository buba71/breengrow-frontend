export default class ProductConverter {
  /**
   *
   * @param {*} productData
   * @return {*} growerData
   */
  static convertFormDataToDto(productData) {
    productData.price = parseFloat(productData.price);
    const growerDto = {
      hive: {
        products: [productData]
      }
    };

    return growerDto;
  }
}
