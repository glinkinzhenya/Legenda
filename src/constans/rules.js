export const rulesText = {
  required: (field) => `Треба ввести ${field}.`,
};
export const addFormRulesImage = {
  required: (field) => `Треба додати ${field}.`,
};

export const adminRules = {
  login: {
    required: { value: true, message: rulesText.required('логін') },
  },
  password: {
    required: { value: true, message: rulesText.required('пароль') },
  },
};

export const addFormRules = {
  name: {
    required: { value: true, message: rulesText.required('Ім`я') },
  },
  surname: {
    required: { value: true, message: addFormRulesImage.required('Прізвище') },
  },
  mail: {
    required: { value: true, message: rulesText.required('E-mail') },
  },
  number: {
    required: { value: true, message: addFormRulesImage.required('Номер телефону') },
  },
  city: {
    required: { value: true, message: addFormRulesImage.required('Місто') },
  },
  department: {
    required: { value: true, message: rulesText.required('яка у вас пошта') },
  },
  postOffice: {
    required: { value: true, message: addFormRulesImage.required('номер відділення') },
  },
};
