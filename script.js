/*//mensaje Bienvenida
alert(
  "Gracias por acceder al Sistema Parque Tec ☼\nA continuación le pediremos algunos datos para iniciar el proceso:"
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

let opcion = prompt("Selecciona una opción:\n1. Reservar entradas para el Parque\n2. Tienda\n3. Festeja tu Cumple \n4. Retira tu Foto \n5. Salir");
opcion = parseInt(opcion);

switch (opcion) {
  case 1: //Reserva de Entradas
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
    break;
  case 2: // Tienda
    
    alert("Has seleccionado Ver mensajes.");
    break;
  case 3: //Festeja tu cumple
    // Lógica para configuración
    alert("Has seleccionado Configuración.");
    break;
  case 4: // Retira tu foto
    // Lógica para configuración
    alert("Has seleccionado Configuración.");
    break;
  case 5: // Salir
    // Lógica para salir
    alert("Gracias por usar nuestro sistema. ¡Hasta luego!");
    break;
  default:
    // Opción no válida
    alert("Opción no válida. Por favor, selecciona una opción válida.");
}
*/





//Listado Remeras
let remeraAgua = {id: "1001", nombre: "Remera Agua", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000};

let remeraAire = {id: "1002", nombre: "Remera Aire", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

let remeraTierra = {id: "1003", nombre: "Remera Tierra", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

let remeraFuego = {id: "1004", nombre: "Remera Fuego", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

let remeraLuz = {id: "1005", nombre: "Remera Luz", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

let remeraSombra = {id: "1006", nombre: "Remera Sombra", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

let remeraNature = {id: "1007", nombre: "Remera Nature", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

let remeraSol = {id: "1008", nombre: "Remera Sol", modelo: ["xx", "xy", "ch"], talle: ["xs", "s", "m", "l", "xl", "xxl"], precio: 7000}

//listado de Remeras
let remeras = [remeraAgua, remeraAire, remeraFuego, remeraLuz, remeraSombra, remeraTierra, remeraNature, remeraSol];

//IDs para cada producto
function generarNuevosIDs(producto) {
  let nuevosID = [];

  for (let i = 0; i < producto.modelo.length; i++) {
    for (let j = 0; j < producto.talle.length; j++) {
      let nuevoId = producto.id+i+j;
      let combinacion = {
        id: nuevoId,
        nombre: producto.nombre,
        modelo: producto.modelo[i],
        talle: producto.talle[j],
        precio: producto.precio
      };
      nuevosID.push(combinacion);
    }
  }

  return nuevosID;
}

let idsRemerasAgua = generarNuevosIDs(remeraAgua);
let idsRemerasAire = generarNuevosIDs(remeraAire);
let idsRemerasTierra = generarNuevosIDs(remeraTierra);
let idsRemerasFuego = generarNuevosIDs(remeraFuego);
let idsRemerasLuz = generarNuevosIDs(remeraLuz);
let idsRemerasSombra = generarNuevosIDs(remeraSombra);
let idsRemerasNature = generarNuevosIDs(remeraNature);
let idsRemerasSol = generarNuevosIDs(remeraSol);


// Combinar las nuevosID de ambos productos en un solo arreglo
let nuevosID = [idsRemerasAgua, idsRemerasAire, idsRemerasTierra, 
  idsRemerasFuego, idsRemerasLuz, idsRemerasSombra, idsRemerasNature, idsRemerasSol];

console.log(nuevosID);


//STOCK

let stockRemeras = {};

stockRemeras["Remera Agua"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Tierra"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Fuego"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Luz"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Sombra"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Nature"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Sol"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

stockRemeras["Remera Aire"] = {
  "xx": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "xy": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  },
  "ch": {
    "xs": 5,
    "s": 5,
    "m": 5,
    "l": 5,
    "xl": 5,
    "xxl": 5
  }
};

// Acceder al stock de una remera específica, modelo y talla
let stockRemeraAguaModeloXXTalleS = stockRemeras["Remera Agua"]["xx"]["s"];
console.log("Stock de Remera Agua, Modelo XX, Talle S:", stockRemeraAguaModeloXXTalleS);

console.log(stockRemeras)

