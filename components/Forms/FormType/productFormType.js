import FormBuilder from './../../FormFactory/classes/FormBuilder.js';

export function productFormType() {
  const form = new FormBuilder();
  form.addElement('Input', ['text', 'name', 'one']);
  form.addElement('Input', ['text', 'description', 'description', 'one']);
  form.addElement('Input', ['text', 'price', 'price', 'one']);
  return form.getForm();
}
