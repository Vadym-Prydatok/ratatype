const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailPlaceholder = document.getElementById('emailPlaceholder');
const passwordPlaceholder = document.getElementById('passwordPlaceholder');

const emailLabel = document.getElementById('emailLabel');
const passwordLabel = document.getElementById('passwordLabel');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const submitButton = document.getElementById('submitButton');
const requestData = document.getElementById('request-popup');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const showError = (error, label) => {
  error.classList.remove('hidden');
  error.classList.add('block');
  label.classList.add('border-otherRed');
  label.classList.remove('border-borderPrimary');
};

const hideError = (error, label) => {
  error.classList.remove('block');
  error.classList.add('hidden');
  label.classList.remove('border-otherRed');
  label.classList.add('border-borderPrimary');
};

const validateEmail = () => {
  if (emailInput.value === '') {
    showError(emailError, emailLabel);
    return false;
  }
  if (!emailRegex.test(emailInput.value)) {
    showError(emailError, emailLabel);
    return false;
  }
  hideError(emailError, emailLabel);
  return true;
};

const validatePassword = () => {
  if (passwordInput.value.trim().length < 4) {
    showError(passwordError, passwordLabel);
    return false;
  }
  hideError(passwordError, passwordLabel);
  return true;
};

const focusPlaceholder = (placeholder) => {
  placeholder.classList.add('text-sm','xl:text-base');
  placeholder.classList.remove('absolute');
};

const blurPlaceholder = (placeholder) => {
  placeholder.classList.remove('text-sm','xl:text-base');
  placeholder.classList.add('absolute');
};

emailInput.addEventListener('focus', () => {
  focusPlaceholder(emailPlaceholder);
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value === '') {
    blurPlaceholder(emailPlaceholder);
  }
});

passwordInput.addEventListener('focus', () => {
  focusPlaceholder(passwordPlaceholder);
});

passwordInput.addEventListener('blur', () => {
  if (passwordInput.value === '') {
    blurPlaceholder(passwordPlaceholder);
  }
});

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

const hideMessage = () => {
  setTimeout(() => {
    requestData.classList.remove('flex');
    requestData.classList.add('hidden');
  }, 3000);
};

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!validateEmail() || !validatePassword()) {
    return
  }

  requestData.classList.add('flex');
  requestData.classList.remove('hidden');
  requestData.children[1].textContent = `Ел. пошта: ${emailInput.value}`;
  requestData.children[2].textContent = `Пароль: ${passwordInput.value}`; 
  emailInput.value = '';
  passwordInput.value = ''; 
  hideMessage();

  if (document.activeElement !== emailInput) {
    blurPlaceholder(emailPlaceholder);
  }

  if (document.activeElement !== passwordInput) {
    blurPlaceholder(passwordPlaceholder);
  }
});
