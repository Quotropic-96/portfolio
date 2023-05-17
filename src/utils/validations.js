const validations = (value, typeOfValue) => {
  if (typeOfValue === 'name') {
    const nameRegex = /^[a-zA-ZáéíóúàèòÁÉÍÓÚÀÈÒäëïöüÄËÏÖÜºªñ\s]+$/;
    if (nameRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  } else if (typeOfValue === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (emailRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  } else if (typeOfValue === 'message') {
    const messageRegex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ0-9\s\p{Diacritic}'¡!?¿.,;:=()%&/""]{1,200}$/u;
    if (messageRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  }
};

export default validations;