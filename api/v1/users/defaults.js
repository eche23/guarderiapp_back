/*Valida que tenga un numero, caracter especial (*, /, &) y que tenga alguna letra en mayuscula */
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;

/*Valida que tenga un arroba y un punto*/
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/;

module.exports = {
  regexPassword,
  regexEmail,
};
