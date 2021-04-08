import { VALIDATORS } from '../constants/forms';

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