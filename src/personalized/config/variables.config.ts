// const URL = "http://localhost:3000/api";
// const URL = "http://gestcitasapi.herokuapp.com/api";
const URL = "https://apisalud.herokuapp.com/api/";

let requisitosPassword = (password: string, passwordRep: string) => {
  return [
    { mensaje: 'Contraseña no Vacía', noCumple: password == '' },
    { mensaje: 'Longitud entre 6 y 20', noCumple: password.length < 6 || password.length >= 20 },
    { mensaje: 'Por lo menos un caracter especial o símbolo', noCumple: password.search(/[\W_]+/) == -1 },
    { mensaje: 'Por lo menos un caracter Mayúscula', noCumple: password.search(/[A-Z]+/) == -1 },
    { mensaje: 'Por lo menos un caracter minúscula', noCumple: password.search(/[a-z]+/) == -1 },
    { mensaje: 'Por lo menos un caracter número', noCumple: password.search(/[0-9]+/) == -1 },
    { mensaje: 'Ambas contraseña coinciden', noCumple: password != passwordRep },
  ];
};

export { URL, requisitosPassword };
