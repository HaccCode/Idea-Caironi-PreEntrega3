//Mensaje de Bienvenida al Portal
alert(
  "Gracias por acceder al Portal de Parque Tec ☼\nA continuación le pediremos algunos datos para iniciar el proceso:"
);

//Ingreso Nombre y DNI del Usuario
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

//Variables
let carrito = [];
let productoBuscado;

//Array de Productos Totales
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
  },
];

//Menu Principal
let opcion;
do {
  opcion = parseInt(
    prompt(
      "Selecciona una opción:\n1. Reservar entradas para el Parque\n2. Tienda\n3. Festeja tu Cumple \n4. Retira tu Foto \n0. Salir"
    )
  );

  switch (opcion) { //Switch Menu Principal
    case 1: //Reserva de Entradas
      //Precios Entradas segun edad
      let entradaGral = 2200;
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
        } while (
          !/^[a-zA-Z]+$/.test(nombreEntrada) ||
          nombreEntrada.trim() === ""
        );

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
        "Reserva Exitosa.!" +
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
      let opcion;

      do {
        opcion = Number(
          prompt(
            "Selecciona una opción:\n1. Buscar por Categoria\n2. Buscar por Subcategoria\n3. Ver Informacion completa de un producto \n4. Agregar al Carrito \n5. Finalizar compra \n0. Volver al Menú Inicial"
          )
        );

        //Switch Tienda
        switch (opcion) {
          case 1: //Buscar por Categoría
            let opcionCategoria = Number(
              prompt(
                "Selecciona una Categoría:\n1. Indumentaria\n2. Accesorios \n0. Salir"
              )
            );
            if (opcionCategoria === 1) {
              let porCategoria = productos.filter((producto) =>
                producto.categoria.includes("Indumentaria")
              );
              alert(listaProductos(porCategoria));
            } else if (opcionCategoria === 2) {
              let porCategoria = productos.filter((producto) =>
                producto.categoria.includes("Accesorios")
              );
              alert(listaProductos(porCategoria));
            } else {
              alert("La opción ingresada en incorrecta")
            }

            break;

          case 2: //Buscar por Subcategoria
            let opcionSubcategoria = Number(
              prompt(
                "Selecciona una Subcategoría:\n1. Remeras\n2. Buzos \n3. Camperitas \n4. Lentes \n5. Collares\n0. Salir"
              )
            );
            if (opcionSubcategoria === 1) {
              let porSubcategoria = productos.filter((producto) =>
                producto.subcategoria.includes("Remera")
              );
              alert(listaProductos(porSubcategoria));
            } else if (opcionSubcategoria === 2) {
              let porSubcategoria = productos.filter((producto) =>
                producto.subcategoria.includes("Buzos")
              );
              alert(listaProductos(porSubcategoria));
            } else if (opcionSubcategoria === 3) {
              let porSubcategoria = productos.filter((producto) =>
                producto.subcategoria.includes("Camperitas")
              );
              alert(listaProductos(porSubcategoria));
            } else if (opcionSubcategoria === 4) {
              let porSubcategoria = productos.filter((producto) =>
                producto.subcategoria.includes("Lentes")
              );
              alert(listaProductos(porSubcategoria));
            } else if (opcionSubcategoria === 5) {
              let porSubcategoria = productos.filter((producto) =>
                producto.subcategoria.includes("Collares")
              );
              alert(listaProductos(porSubcategoria));
            } else {
              alert("La opción ingresada en incorrecta")
            }
        
            break;

          case 3: //Ver Informacion Completa del Producto
            let productoBuscadoID = prompt("Ingrese ID del Producto:");
            productoBuscado = buscarPorID(productoBuscadoID);

            if (productoBuscado) {
              mostrarInfoProducto(productoBuscado);
            } else {
              alert("Producto no encontrado. Por favor, ingrese un ID válido.");
            }
            break;

          case 4: //Agregar al carrito
            let id = prompt("Ingrese ID del Producto:\n");
            productoBuscado = buscarPorID(id);

            if (productoBuscado) {
              let productoEnCarrito = carrito.find(
                (producto) => producto.id === productoBuscado.id
              );

              if (productoEnCarrito) {
                // Si ya está en el carrito
                productoEnCarrito.unidades++;
                productoEnCarrito.subtotal =
                  productoEnCarrito.unidades * productoEnCarrito.precioUnitario;
                alert("Se sumó una unidad más del producto al carrito");
              } else {
                // Agregar el producto al carrito
                let productoNuevo = {
                  id: productoBuscado.id,
                  subcategoria: productoBuscado.subcategoria,
                  nombre: productoBuscado.nombre,
                  unidades: 1,
                  precioUnitario: productoBuscado.precio,
                  subtotal: productoBuscado.precio,
                };
                carrito.push(productoNuevo);
                alert("El producto se agregó al carrito.");
              }
            } else {
              alert("El ID del producto ingresado no es válido.");
            }

            break;

          case 5: //Finalizar compra
            if (carrito.length === 0) {
              alert("No hay productos en el carrito.");
            } else {
              let totalUnidades = carrito.reduce((total, producto) => {
                return total + producto.unidades;
              }, 0);

              while (true) {
                alert(
                  "\nProductos en carrito: " +
                    totalUnidades +
                    "\n" +
                    listaProductos(carrito) +
                    "\nTotal: $" +
                    carrito.reduce((total, producto) => {
                      return total + producto.subtotal;
                    }, 0)
                );

                opcion = Number(
                  prompt(
                    "¿Estás seguro que querés finalizar la compra?\n1. Para continuar agregando productos\n0. Para Finalizar"
                  )
                );

                if (opcion === 0) {
                  alert("Compra realizada con Éxito!");
                  break;
                } else {
                  break;
                }
              }
            }

            break;

          case 0: // Volver al Menu
            break;

          default: // Opción no válida
            alert("Opción no válida. Por favor, selecciona una opción válida.");
            break;
        }
      } while (opcion !== 0);

      break;
    case 3: //Festeja tu cumple
      alert(
        "Has seleccionado Festeja tu cumple.\nProximamente más información"
      );
      break;
    case 4: // Retira tu foto
      alert("Has seleccionado Retirar tu foto.\nProximamente más información");
      break;
    case 0: // Salir
      alert("Gracias por usar nuestro sistema. ¡Hasta luego!");
      break;
    default:
      // Opción no válida
      alert("Opción no válida. Por favor, selecciona una opción válida.");
      break;
  }
} while (opcion !== 0);

//Funciones
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

//<prueba