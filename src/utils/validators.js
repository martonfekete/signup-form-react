import { VALIDATORS } from '../constants/forms';
import { SIGNUP_FIELD_KEYS } from '../constants/forms';

export function validateInputField(value, validators) {
  let isValid = false;
  if (validators[VALIDATORS.required]) {
    isValid = !!value;
  }
  if (validators[VALIDATORS.pattern]) {
    isValid = !!value.match(validators.pattern);
  }
  return isValid;
}

export function updateFormFieldsValidity(controls, values) {
  Object.keys(controls).forEach(key => {
    const formControlEntry = Object.assign({}, controls[key], {
      valid: validateInputField(values[key], controls[key].validators)
    });
    if (!formControlEntry.valid) {
      formControlEntry.error = 'Please provide a valid value';
    } else {
      formControlEntry.error = '';
    }
    if (key === SIGNUP_FIELD_KEYS.password &&
      (values.password === values.firstName || values.password === values.lastName)) {
      formControlEntry.valid = false;
      formControlEntry.error = 'Password cannot be the same as either of the names';
    }
    controls[key] = formControlEntry;
  });
}