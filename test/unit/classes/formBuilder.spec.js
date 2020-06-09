import FormBuilder from '../../../components/FormFactory/classes/FormBuilder.js';
import Input from '../../../components/FormFactory/classes/Input.js';

describe('Building form', () => {
  it('Should contain Inputs instance', () => {
    const form = new FormBuilder();
    form.addInput('text', 'firstname');

    form.getForm().forEach(function(element) {
      expect(element).toBeInstanceOf(Input);
    });
  });

  it('Should generate input type', () => {
    const form = new FormBuilder();
    form.addInput('text', 'firstname');

    expect(form.getForm()[0]).toHaveProperty('type', 'text');
  });

  it('Should generate multiple Inputs', () => {
    const form = new FormBuilder();
    form.addInput('text', 'firstname');
    form.addInput('email', 'fake@email.com');

    expect(form.getForm()).toHaveLength(2);
  });

  it('Should throw an error if options is invalid', () => {
    const input = new Input();
    const options = 'className'; // options must be an array.

    expect(() => {
      FormBuilder.checkOptions(input, options);
    }).toThrow(`parameter options is not an array ${options}`);
  });
});
