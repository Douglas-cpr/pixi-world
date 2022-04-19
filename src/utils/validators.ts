export function validateEmptyAndMinLength6(value: string): string | boolean {
  if (!value) {
    return 'This field is required'
  }

  value = value.trim()

  if (value.length < 6) {
    return 'This field must be at least 6 characters long'
  }

  return true;
}

export function isValidEmail(value: string): string | boolean {
  if (!value) {
    return 'This field is required'
  }

  value = value.trim()

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address'
  }

  return true;
}