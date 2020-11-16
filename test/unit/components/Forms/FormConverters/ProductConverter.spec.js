import ProductConverter from './../../../../../components/Forms/FormConverters/ProductConverter.js';

describe('Product data converter', () => {
  it('Should convert data from product form to a product Dto', () => {
    const productData = {
      name: 'new product',
      description: 'new product description',
      price: '2.9'
    };

    const shouldBe = {
      hive: {
        products: [
          {
            name: 'new product',
            description: 'new product description',
            price: 2.9 // Should convert string to float.
          }
        ]
      }
    };

    const resultDto = ProductConverter.convertFormDataToDto(productData);

    expect(resultDto).toEqual(shouldBe);
  });
});
