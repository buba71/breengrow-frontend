import FormBuilder from './../../FormFactory/classes/FormBuilder.js';

export function productFormType() {
  const form = new FormBuilder();
  form.addInput('text', 'name', ['one']);
  form.addInput('text', 'description', ['one']);
  form.addInput('text', 'price', ['one']);
  return form.getForm();
}
