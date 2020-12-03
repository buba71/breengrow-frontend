export default class MetaDataExtractor {
  /**
   *
   * @param {*} metaData
   */
  static extractGeopoint(metaData) {
    return metaData.geometry.coordinates;
  }

  static extractCityMetaData(metaData) {
    return {
      city: metaData.properties.city,
      geoPoint: metaData.geometry.coordinates
    };
  }
}
