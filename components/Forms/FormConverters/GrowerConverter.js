export default class GrowerConverter {
  /**
   *
   * @param {*} growerData
   * @param {*} growerCompanyData
   * @return {*} growerData
   */
  static convertFormDataToDto(growerData, growerCompanyData) {
    growerData.hive = growerCompanyData;
    growerData.role = ['ROLE_GROWER'];

    return growerData;
  }
}
