import FormBuilder from '../../FormFactory/classes/FormBuilder.js';

export function growerFormType() {
  const form = new FormBuilder();
  form.addElement('Input', ['text', 'firstName', 'firstName', 'two']);
  form.addElement('Input', ['text', 'lastName', 'lastName', 'two']);
  form.addElement('Input', ['email', 'email', 'email', 'one']);
  form.addElement('Input', ['password', 'password', 'password', 'one']);
  form.addElement('Input', [
    'password',
    'repeat_password',
    'repeat password',
    'one'
  ]);
  return form.getForm();
}

export function growerCompanyAddressFormType() {
  const form = new FormBuilder();
  form.addElement('Input', ['text', 'name', 'name', 'two']);
  form.addElement('Input', ['text', 'siret_number', 'siret number', 'two']);
  form.addElement('Input', ['text', 'street', 'street', 'one']);
  form.addElement('GeoSearch', ['city', 'submit-geocode', 'two']);
  form.addElement('Input', ['text', 'zip_code', 'zip code', 'two']);
  return form.getForm();
}
