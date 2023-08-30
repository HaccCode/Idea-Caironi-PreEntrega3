//mensaje Bienvenida
alert(
  "Gracias por acceder al Sistema de reserva de entradas al Parque Tecno ☼\nA continuación le pediremos algunos datos para iniciar el proceso:"
);

//Ingreso Nombre y dni del comprador

let nombre;
do {
  nombre = prompt("Ingrese su Nombre");
  if (!isNaN(nombre) || nombre.trim() === "") {
    alert("Por favor, ingrese un nombre para continuar");
  }
} while (!isNaN(nombre) || nombre.trim() === "");

let dni;
do {
  dni = Number(prompt("Ingrese su DNI"));
  if (isNaN(dni) || dni <= 0) {
    alert("Debe ser un número mayor que 0.");
  }
} while (isNaN(dni) || dni <= 0);

//Precios Entradas segun edad
let entradaGral = 1200;
let descMayores = 0.75; //-75% de descuento
let descMenores = 0.5; //-50% de descuento
let descInfantes = "Entrada Gratuita";
alert(
  "Valor entrada: $" +
    entradaGral +
    "\nDescuento Mayores de 65 años: -" +
    descMayores * 100 +
    "%" +
    "\nDescuento Menores de 13 años: -" +
    descMenores * 100 +
    "%" +
    "\nDescuento Menores de 6 años: " +
    descInfantes
);

//Bucle Cantidad de entradas y Datos por entrada
let entradas, dniEntrada, nombreEntrada, apellidoEntrada, edadEntrada;

do {
  entradas = Number(prompt("Cuantas entradas desea reservar?"));
  if (isNaN(entradas) || entradas <= 0 || entradas >= 10) {
    alert("Debe ser un número mayor que 0. Máximo Reserva: 10 entradas");
  }
} while (isNaN(entradas) || entradas <= 0);

for (let i = 1; i <= entradas; i++) {
  do {
    dniEntrada = Number(prompt("Ingrese el DNI para visitante Nº " + i));
    validarDatoNum(dniEntrada);
  } while (isNaN(dniEntrada) || dniEntrada <= 0);

  do {
    nombreEntrada = prompt("Ingrese Nombre");
    validarDatoStr(nombreEntrada);
  } while (!/^[a-zA-Z]+$/.test(nombreEntrada) || nombreEntrada.trim() === "");

  do {
    apellidoEntrada = prompt("Ingrese Apellido");
    validarDatoStr(apellidoEntrada);
  } while (
    !/^[a-zA-Z]+$/.test(apellidoEntrada) ||
    apellidoEntrada.trim() === ""
  );

  do {
    edadEntrada = Number(prompt("Ingrese edad actual del visitante"));
    validarDatoNum(edadEntrada);
  } while (isNaN(edadEntrada) || edadEntrada <= 0);

  let valorEntrada = entradaGral;

  //condicional valor entradas segun edad
  if (edadEntrada < 6) {
    valorEntrada = descInfantes;
  } else if (edadEntrada < 13) {
    valorEntrada = entradaGral - entradaGral * descMenores;
  } else if (edadEntrada >= 65) {
    valorEntrada = entradaGral - entradaGral * descMayores;
  }

  //Impresion por pantalla de Datos ingresados
  alert(
    "Entrada " +
      i +
      ":\nDNI: " +
      dniEntrada +
      "\nNombre Visitante: " +
      nombreEntrada +
      " " +
      apellidoEntrada +
      "\nEdad del Visitante: " +
      edadEntrada +
      "\nValor Entrada: $" +
      valorEntrada
  );
}

//mensaje reserva exitosa
alert(
  "Reserva Exitosa " +
    nombre +
    "!\nRecuerde asistir dentro de los 10 días posteriores de la reserva, con DNI de los visitantes sin excepción\nTu Número de reserva es " +
    dni +
    " \n¡Muchas gracias! Te esperamos! Parque Tecno ☼"
);

//Funciones de validación de datos
function validarDatoNum(dato) {
  if (isNaN(dato) || dato <= 0) alert("Debe ser un número mayor que 0.");
}

function validarDatoStr(dato) {
  if (!/^[a-zA-Z]+$/.test(dato) || dato.trim() === "") {
    alert("Ingrese solo texto válido");
  }
}