const EMAIL_VALIDATIONS = {
  required: {
    value: true,
    message: "Campo obligatorio",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Ingrese un correo válido",
  },
};

const REQUIRED_VALIDATION = {
  required: {
    value: true,
    message: "Campo obligatorio",
  },
};

export { EMAIL_VALIDATIONS, REQUIRED_VALIDATION };
