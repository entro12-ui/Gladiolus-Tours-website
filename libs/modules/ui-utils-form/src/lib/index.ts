export const FORM_VALIDATION_OPTIONS_KW_USER_FULL_NAME = {
  required: 'Name is required.',
  minLength: {
    value: 5,
    message: 'Minimum length 5 characters',
  },
  maxLength: {
    value: 50,
    message: 'Maximum length 50 characters',
  },
};

export const EMAIL_REACT_FORM_PATTERN = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  message: 'Invalid email address.',
};

export const FORM_VALIDATION_OPTIONS_KW_USER_EMAIL = {
  required: 'Email is required.',
  pattern: EMAIL_REACT_FORM_PATTERN,
};

// These rules are weak for legacy reasons; don't make them stronger
// until there is a reset password mechanism so that users with weak
// passwords will be able to recover their accounts if/when they are locked out
export const FORM_VALIDATION_OPTIONS_KW_USER_PASSWORD = {
  required: 'Password is required.',
  minLength: {
    value: 8,
    message: 'Minimum length 8 characters',
  },
  maxLength: {
    value: 50,
    message: 'Maximum length 50 characters',
  },
};
