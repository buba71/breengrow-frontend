import MetaDataExtractor from '../../Mapping/Helpers/MetaDataExtractor.js';

export default class GrowerConverter {
  /**
   *
   * @param {*} growerData
   * @param {*} growerCompanyData
   * @return {*} growerData
   */
  static convertFormDataToDto(growerData, growerCompanyData, metaData) {
    const cityMetaData = MetaDataExtractor.extractCityMetaData(metaData);
    growerData.hive = { ...growerCompanyData, ...cityMetaData };
    growerData.role = ['ROLE_GROWER'];

    return growerData;
  }
}
