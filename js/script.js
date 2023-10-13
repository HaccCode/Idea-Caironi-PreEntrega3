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
let subcategorias = ["Remeras", "Buzos", "Camperitas", "Lentes", "Collares"];
let productoBuscado;
let carrito = [];

let carritoStandBy = localStorage.getItem("carrito");
if (carritoStandBy) {
  carrito = JSON.parse(carritoStandBy);
}

renderizarCarrito(carrito);

renderizarProductos(productos, carrito);

/////////////////////////////////
/* Reserva de Entradas */ ////////////////////////////

//Precios Entradas segun edad
let entradaGral = 2200;
let descMayores = 0.75; //-75% de descuento
let descMenores = 0.5; //-50% de descuento
let descInfantes = "Entrada Gratuita";

let dniEntrada, nombreEntrada, apellidoEntrada, edadEntrada;

let valorEntrada = entradaGral;

//condicional valor entradas segun edad
if (edadEntrada < 6) {
  valorEntrada = descInfantes;
} else if (edadEntrada < 13) {
  valorEntrada = entradaGral - entradaGral * descMenores;
} else if (edadEntrada >= 65) {
  valorEntrada = entradaGral - entradaGral * descMayores;
}

let select = document.getElementById("listaFiltro");
select.addEventListener("change", () => {
  let productosFiltrados = productos.filter((producto) =>
    producto.subcategoria.includes(select.value)
  );
  renderizarProductos(productosFiltrados, carrito);
  return productosFiltrados;
});

subcategorias.forEach((text) => {
  let option = document.createElement("option");
  option.innerText = `${text}`;
  option.value = `${text}`;
  select.appendChild(option);
});



let entradas = document.getElementById("listaEntradas"); 


let opcionDefecto = document.createElement("option");
opcionDefecto.value = "0";
opcionDefecto.innerText = "Seleccionar";
select.appendChild(opcionDefecto);

// Crear opciones para números del 1 al 10
for (let i = 1; i <= 10; i++) {
  let option = document.createElement("option");
  option.value = i.toString(); // Convertir el número a una cadena
  option.innerText = i.toString();
  entradas.appendChild(option);
}

// Función para mostrar u ocultar el formulario de entradas
function mostrarFormulario() {
  let cantidadEntradas = parseInt(entradas.value);

  // Obtener el div del formulario
  let formularioDiv = document.getElementById("formularioEntradas");

  // Si la cantidad de entradas es mayor que 0, mostrar el formulario, de lo contrario, ocultarlo
  if (cantidadEntradas > 0) {
    formularioDiv.style.display = "block";
  } else {
    formularioDiv.style.display = "none";
  }
}

// Agrega un evento al cambio de selección en la lista de entradas
entradas.addEventListener("change", mostrarFormulario);

// Llama a la función una vez para asegurarte de que el formulario se muestre u oculte según la selección inicial (0 por defecto)
mostrarFormulario();


// Función para generar campos de entrada dinámicos
function generarCamposDeEntrada() {
  let cantidadEntradas = parseInt(entradas.value);
  let formularioDiv = document.getElementById("formularioEntradas");

  // Limpia cualquier contenido previo en el formulario
  formularioDiv.innerHTML = "";

  // Genera los campos de entrada según la cantidad de entradas seleccionadas
  for (let i = 1; i <= cantidadEntradas; i++) {
    // Crea un div para agrupar los campos de cada entrada
    let entradaDiv = document.createElement("div");

    // Crea campos de entrada para nombre, apellido, DNI y edad
    let nombreInput = document.createElement("input");
    nombreInput.type = "text";
    nombreInput.placeholder = "Nombre";
    nombreInput.id = `nombre${i}`;

    let apellidoInput = document.createElement("input");
    apellidoInput.type = "text";
    apellidoInput.placeholder = "Apellido";
    apellidoInput.id = `apellido${i}`;

    let dniInput = document.createElement("input");
    dniInput.type = "text";
    dniInput.placeholder = "DNI";
    dniInput.id = `dni${i}`;

    let edadInput = document.createElement("input");
    edadInput.type = "number";
    edadInput.placeholder = "Edad";
    edadInput.id = `edad${i}`;

    // Agrega los campos al div de entrada
    entradaDiv.appendChild(nombreInput);
    entradaDiv.appendChild(apellidoInput);
    entradaDiv.appendChild(dniInput);
    entradaDiv.appendChild(edadInput);

    // Agrega el div de entrada al formulario
    formularioDiv.appendChild(entradaDiv);
  }
}

// Agrega un evento al cambio de selección en la lista de entradas
entradas.addEventListener("change", generarCamposDeEntrada);

// Llama a la función una vez para asegurarte de que los campos se generen correctamente
generarCamposDeEntrada();

///////////////////////////
/* Funciones */ //////////////////////////////////

//Funciones de validación de datos
function validarDatoNum(dato) {
  if (isNaN(dato) || dato <= 0) alert("Debe ser un número mayor que 0.");
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
    /* alert("El ID del producto ingresado no es válido."); */
  } else if (productoBuscado.stock === 0) {
    /* alert("No hay stock disponible para este producto."); */
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
        rutaImagen: productoBuscado.rutaImagen,
      };
      carrito.push(productoNuevo);
      productoBuscado.stock--;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    renderizarCarrito(carrito);
  }
}

function renderizarCarrito(productosEnCarrito) {
  if (productosEnCarrito.length > 0) {
    let divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      let tarjProdCarrito = document.createElement("div");
      tarjProdCarrito.className = "tarjProdCarrito";
      tarjProdCarrito.innerHTML = `
    <img class="imagenEnCarrito" src=./images/${producto.rutaImagen} />
    <p>${producto.nombre}</p>
    <p>$${producto.precioUnitario}</p>
    <p>x${producto.unidades}</p>
    <p>$${producto.subtotal}</p>
    `;
      divCarrito.appendChild(tarjProdCarrito);
    });

    let botonFinalizar = document.createElement("button");
    botonFinalizar.innerHTML = "Finalizar Compra";

    botonFinalizar.addEventListener("click", finalizarCompra);
    divCarrito.appendChild(botonFinalizar);
  }
}



function finalizarCompra() {
  let carrito = document.getElementById("carrito");
  carrito.innerHTML =
    "El Carrito esta vacío y esperando que elijas lo que más te guste!";
  localStorage.removeItem("carrito");
}

finalizarCompra(carrito);




//Crea tarjetas de cada producto
function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    let tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `<h3>${producto.nombre}</h3>
    <img class=imagenProducto src=./images/${producto.rutaImagen} />
    <p class=precio>$${producto.precio}</p>
    <button id=${producto.id}>Agregar al Carrito</button>
    `;

    contenedor.appendChild(tarjeta);

    let botonAgregarAlCarrito = document.getElementById(producto.id);
    botonAgregarAlCarrito.addEventListener("click", (e) => {
      agregarProductoAlCarrito(productos, carrito, e);
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
let mensajeDiv = document.getElementById("mensaje")

let ejecutado = false;
let errorMostrado = false;

nombreComprador.addEventListener("keydown", (e) => {
  if (!ejecutado && e.key === "Enter") {
    if (validarDatoStr()) {
      ejecutado = true;
      saludoComprador();
      localStorage.setItem("nombreComprador", JSON.stringify(nombreComprador.value));
    } else {
      if (!errorMostrado) {
        mensajeError();
        errorMostrado = true;
        
      }
    }
    
  }
  
});

function validarDatoStr() {
  const nombre = nombreComprador.value.trim();
  if (!/^[a-zA-Z]+$/.test(nombre) || nombre === "") {
    return false; // El dato no es válido, devuelve false.
  } else {
    ejecutado = false;
    return true; // El dato es válido, devuelve true.
  }
  
}

function saludoComprador() {
  let saludo = document.createElement("div")
  saludo.innerHTML = `
  <h3>Hola ${nombreComprador.value}!</h3>
  <p>Estamos listos para empezar la reserva!</p>

    `;

  contenedorReservas.appendChild(saludo);
  
  
}


//DNIComprador-Enter
dniComprador.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sessionStorage.setItem("dniComprador", JSON.stringify(dniComprador.value));
  }
});

function mensajeError() {
  let mensajeError = document.createElement("div");
  mensajeError.innerHTML = `
  <h3>Dato Incorrecto</h3>
  <p>Por favor, ingrese un dato válido</p>
    `;

  contenedorReservas.appendChild(mensajeError);
}



