import FormBuilder from '../../../components/FormFactory/classes/FormBuilder.js';
import Component from '../../../components/FormFactory/classes/Component.js';
import Input from '../../../components/FormFactory/classes/Input.js';

describe('Build item form', () => {
  it('Should return a input form', () => {
    const form = new FormBuilder();
    form.addElement('Input', ['text', 'name', 'placeHolder', 'class-name']);
    form.addElement('Input', ['text', 'firstName', 'firstName', 'class-name']);

    form.getForm().forEach(function(element) {
      expect(element).toBeInstanceOf(Input);
    });
  });

  it('Should return a component form', () => {
    const form = new FormBuilder();
    form.addElement('Component', ['GeoSearch']);

    form.getForm().forEach(function(element) {
      expect(element).toBeInstanceOf(Component);
    });
  });
});
