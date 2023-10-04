/* Variables */ //////////////////////////

let productos = [
  {
    id: "1001",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Agua",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Azul",
    rutaImagen: "remera_agua.png",
  },
  {
    id: "1002",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Aire",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Gris",
    rutaImagen: "remera_aire.png",
  },
  {
    id: "1003",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Tierra",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Marron",
    rutaImagen: "remera_tierra.png",
  },
  {
    id: "1004",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Fuego",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Rojo",
    rutaImagen: "remera_fuego.png",
  },
  {
    id: "1005",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Luz",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Blanco",
    rutaImagen: "remera_luz.png",
  },
  {
    id: "1006",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Sombra",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Negro",
    rutaImagen: "remera_dark.png",
  },
  {
    id: "1007",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Nature",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Verde",
    rutaImagen: "remera_nature.png",
  },
  {
    id: "1008",
    categoria: "Indumentaria",
    subcategoria: "Remeras",
    nombre: "Remera Sol",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 7000,
    stock: 5,
    color: "Amarillo",
    rutaImagen: "remera_sol.png",
  },
  {
    id: "1101",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Agua",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Azul",
    rutaImagen: "buzo_agua.png",
  },
  {
    id: "1102",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Aire",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Gris",
    rutaImagen: "buzo_aire.png",
  },
  {
    id: "1103",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Tierra",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Marron",
    rutaImagen: "buzo_tierra.png",
  },
  {
    id: "1104",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Fuego",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Rojo",
    rutaImagen: "buzo_fuego.png",
  },
  {
    id: "1105",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Luz",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Blanco",
    rutaImagen: "buzo_luz.png",
  },
  {
    id: "1106",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Sombra",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Negro",
    rutaImagen: "buzo_dark.png",
  },
  {
    id: "1107",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Nature",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Verde",
    rutaImagen: "buzo_nature.png",
  },
  {
    id: "1108",
    categoria: "Indumentaria",
    subcategoria: "Buzos",
    nombre: "Buzo Sol",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 11000,
    stock: 5,
    color: "Amarillo",
    rutaImagen: "buzo_sol.png",
  },
  {
    id: "1201",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Agua",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Azul",
    rutaImagen: "camperita_agua.png",
  },
  {
    id: "1202",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Aire",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Gris",
    rutaImagen: "camperita_aire.png",
  },
  {
    id: "1203",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Tierra",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Marron",
    rutaImagen: "camperita_tierra.png",
  },
  {
    id: "1204",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Fuego",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Rojo",
    rutaImagen: "camperita_fuego.png",
  },
  {
    id: "1205",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Luz",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Blanco",
    rutaImagen: "camperita_luz.png",
  },
  {
    id: "1206",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Sombra",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Negro",
    rutaImagen: "camperita_dark.png",
  },
  {
    id: "1207",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Nature",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Verde",
    rutaImagen: "camperita_nature.png",
  },
  {
    id: "1208",
    categoria: "Indumentaria",
    subcategoria: "Camperitas",
    nombre: "Camperita Sol",
    modelo: ["xx", "xy", "ch"],
    talle: ["xs", "s", "m", "l", "xl", "xxl"],
    precio: 18000,
    stock: 5,
    color: "Amarillo",
    rutaImagen: "camperita_sol.png",
  },
  {
    id: "2001",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Agua",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Azul",
    rutaImagen: "lentes_agua.png",
  },
  {
    id: "2002",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Aire",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Gris",
    rutaImagen: "lentes_aire.png",
  },
  {
    id: "2003",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Tierra",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Marron",
    rutaImagen: "lentes_tierra.png",
  },
  {
    id: "2004",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Fuego",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Rojo",
    rutaImagen: "lentes_fuego.png",
  },
  {
    id: "2005",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Luz",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Blanco",
    rutaImagen: "lentes_luz.png",
  },
  {
    id: "2006",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Sombra",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Negro",
    rutaImagen: "lentes_dark.png",
  },
  {
    id: "2007",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Nature",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Verde",
    rutaImagen: "lentes_nature.png",
  },
  {
    id: "2008",
    categoria: "Accesorios",
    subcategoria: "Lentes",
    nombre: "Lentes Sol Sol",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 22000,
    stock: 3,
    color: "Amarillo",
    rutaImagen: "lentes_sol.png",
  },
  {
    id: "2101",
    categoria: "Accesorios",
    subcategoria: "Collares",
    nombre: "Oxitocina",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 14000,
    stock: 3,
    rutaImagen: "oxitocina.png",
  },
  {
    id: "2102",
    categoria: "Accesorios",
    subcategoria: "Collares",
    nombre: "Dopamina",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 14000,
    stock: 3,
    rutaImagen: "dopamina.png",
  },
  {
    id: "2103",
    categoria: "Accesorios",
    subcategoria: "Collares",
    nombre: "Serotonina",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 14000,
    stock: 3,
    rutaImagen: "serotonina.png",
  },
  {
    id: "2104",
    categoria: "Accesorios",
    subcategoria: "Collares",
    nombre: "THC",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 14000,
    stock: 3,
    rutaImagen: "thc.png",
  },
  {
    id: "2105",
    categoria: "Accesorios",
    subcategoria: "Collares",
    nombre: "LSD",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 14000,
    stock: 3,
    rutaImagen: "lsd.png",
  },
  {
    id: "2106",
    categoria: "Accesorios",
    subcategoria: "Collares",
    nombre: "DMT",
    modelo: ["xx", "xy", "ch"],
    talle: ["-", "-"],
    precio: 14000,
    stock: 3,
    rutaImagen: "dmt.png",
  },
];
let productoBuscado;
let carrito = [];
let carritoStandBy = localStorage.getItem("carrito")
if (carritoStandBy) {
  carrito = JSON.parse(carritoStandBy);
}

renderizarCarrito(carrito)

renderizarProductos(productos, carrito);


///////////////////////////
/* let nombre;
do {
  nombre = prompt("Ingrese su Nombre");
  if (!isNaN(nombre) || nombre.trim() === "") {
    mensajeError()
  }
} while (!isNaN(nombre) || nombre.trim() === "");

let dni;
do {
  dni = Number(prompt("Ingrese su DNI"));
  if (isNaN(dni) || dni <= 0) {
    alert("Debe ser un número mayor que 0.");
  }
} while (isNaN(dni) || dni <= 0); */

////////////////////////////////
/* Reserva de Entradas */ ////////////////////////////

//Precios Entradas segun edad
let entradaGral = 2200;
let descMayores = 0.75; //-75% de descuento
let descMenores = 0.5; //-50% de descuento
let descInfantes = "Entrada Gratuita";
/* alert(
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
); */

//Bucle Cantidad de entradas y Datos por entrada
let entradas, dniEntrada, nombreEntrada, apellidoEntrada, edadEntrada;

/* do {
  entradas = Number(prompt("Cuantas entradas desea reservar?"));
  if (isNaN(entradas) || entradas <= 0) {
    alert("Debe ser un número mayor que 0.");
  } else if (entradas >= 10) {
    alert("Máximo Reserva: 10 entradas");
  }
} while (isNaN(entradas) || entradas <= 0 || entradas >= 10);

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
  } while (isNaN(edadEntrada) || edadEntrada <= 0); */

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
/* alert(
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
  ); */

//mensaje reserva exitosa
/* alert(
  "Reserva Exitosa.!" +
    nombre +
    "!\nRecuerde asistir dentro de los 10 días posteriores de la reserva, con DNI de los visitantes sin excepción\nTu Número de reserva es " +
    dni +
    " \n¡Muchas gracias! Te esperamos! Parque Tecno ☼"
); */


///////////////////////////
/* Funciones */ //////////////////////////////////

/* //Funciones de validación de datos
function validarDatoNum(dato) {
  if (isNaN(dato) || dato <= 0) alert("Debe ser un número mayor que 0.");
}

function validarDatoStr(dato) {
  if (!/^[a-zA-Z]+$/.test(dato) || dato.trim() === "") {
    alert("Ingrese solo texto válido");
  }
} */

function listaProductos(productos) {
  return productos
    .map(
      (producto) =>
        producto.id + " - " + producto.subcategoria + " - " + producto.nombre
    )
    .join("\n");
}

function mostrarInfoProducto(producto) {
  alert(
    "ID: " +
      producto.id +
      "\nCategoría: " +
      producto.categoria +
      "\nSubcategoría: " +
      producto.subcategoria +
      "\nNombre: " +
      producto.nombre +
      "\nModelo: " +
      producto.modelo.join(", ") +
      "\nTalle: " +
      producto.talle.join(", ") +
      "\nPrecio: $" +
      producto.precio +
      "\nStock: " +
      producto.stock
  );
}

function buscarPorID(id) {
  return productos.find((producto) => producto.id === id);
}

// Crea Tarjetas ya Filtradas
function filtrarYRenderizar(productos, carrito) {
  let productosFiltrados = productos.filter((producto) =>
    producto.nombre.includes(buscador.value)
  );
  renderizarProductos(productosFiltrados, carrito);
  return productosFiltrados;
}


function agregarProductoAlCarrito(productos, carrito, e) {
  let productoBuscado = productos.find(
    (producto) => producto.id === e.target.id
  );
  let productoEnCarrito = carrito.find(
    (producto) => producto.id === productoBuscado.id
  );

  if (!productoBuscado) {
    alert("El ID del producto ingresado no es válido.");
  } else if (productoBuscado.stock === 0) {
    alert("No hay stock disponible para este producto.");
  } else {
    productoEnCarrito = carrito.find(
      (producto) => producto.id === productoBuscado.id
    );

    if (productoEnCarrito) {
      // Si ya está en el carrito, sumarlo
      productoEnCarrito.unidades++;
      productoEnCarrito.subtotal =
        productoEnCarrito.unidades * productoEnCarrito.precioUnitario;
      productoBuscado.stock--;
      
    } else {
      // Si no está en el carrito, agregarlo
      let productoNuevo = {
        id: productoBuscado.id,
        subcategoria: productoBuscado.subcategoria,
        nombre: productoBuscado.nombre,
        unidades: 1,
        precioUnitario: productoBuscado.precio,
        subtotal: productoBuscado.precio,
      };
      carrito.push(productoNuevo);
      productoBuscado.stock--;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    renderizarCarrito(carrito);
  }
}



function renderizarCarrito(productosEnCarrito) {
  let divCarrito = document.getElementById("carrito");
  divCarrito.innerHTML = "";

  productosEnCarrito.forEach((producto) => {
    let tarjProdCarrito = document.createElement("div");
    tarjProdCarrito.className = "tarjProdCarrito"
    tarjProdCarrito.innerHTML = `
    <p>${producto.nombre}</p>
    <p>$${producto.precioUnitario}</p>
    <p>x${producto.unidades}</p>
    <p>$${producto.subtotal}</p>
    `;
    divCarrito.appendChild(tarjProdCarrito);
  });
}



function finalizarCompra(carrito) {
  if (carrito.length === 0) {
    /* alert("No hay productos en el carrito."); */
  } else {
    let totalUnidades = carrito.reduce((total, producto) => {
      return total + producto.unidades;
    }, 0);

    while (true) {
      /* alert(
        "\nProductos en carrito: " +
          totalUnidades +
          "\n" +
          listaProductos(carrito) +
          "\nTotal: $" +
          carrito.reduce((total, producto) => {
            return total + producto.subtotal;
          }, 0) 
      );*/

      opcion = Number(
        /* prompt(
          "¿Estás seguro que querés finalizar la compra?\n1. Para continuar agregando productos\n0. Para Finalizar"
        ) */
      );

      if (opcion === 0) {
        /* alert("Compra realizada con Éxito!"); */
        break;
      } else {
        break;
      }
    }
  }
}




//Crea tarjetas de cada producto
function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    let tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `<h3>${producto.nombre}</h3>
    <img class=imagenProducto src=./images/${producto.rutaImagen} />
    <p>$${producto.precio}</p>
    <button id=${producto.id}>Agregar al Carrito</button>
    `;

    contenedor.appendChild(tarjeta);

    let botonAgregarAlCarrito = document.getElementById(producto.id);
    botonAgregarAlCarrito.addEventListener("click", (e) => {
      agregarProductoAlCarrito(productos, carrito, e)
  });
  });
}

let buscador = document.getElementById("buscador"); // Casilla Buscador
let botonBuscar = document.getElementById("botonBuscar"); //Boton Busqueda
botonBuscar.addEventListener("click", (e) =>
  filtrarYRenderizar(productos, carrito)
);

let botonVerOcultar = document.getElementById("verOcultar");
//Ver ocultar carrito
botonVerOcultar.addEventListener("click", verOcultarCarrito);

function verOcultarCarrito() {
  let carrito = document.getElementById("carrito");
  let contenedorProductos = document.getElementById("contenedorProductos");

  carrito.classList.toggle("oculta");
  contenedorProductos.classList.toggle("oculta");
}

let contenedorReservas = document.getElementById("contenedorReservas");
let dniComprador = document.getElementById("dniComprador");
let nombreComprador = document.getElementById("nombreComprador");

//NombreComprador-Enter
nombreComprador.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    saludoComprador();
  }
})

function saludoComprador() {
  let saludo = document.createElement("div");
  saludo.innerHTML = `
  <h3>Hola ${nombreComprador.value}!</h3>
  <p>Estamos listos para empezar a reservar. Y vos? Comencemos:</p>
    `;

  contenedorReservas.appendChild(saludo);
}

function mensajeError() {
  let mensajeError = document.createElement("div");
  mensajeError.innerHTML = `
  <h3>Dato Incorrecto</h3>
  <p>Por favor, ingrese un dato válido</p>
    `;
    
  contenedorReservas.appendChild(mensajeError);
}


//Finalizar compra
finalizarCompra(carrito);











