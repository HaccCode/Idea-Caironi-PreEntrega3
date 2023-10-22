fetch("./info.json")
  .then((respuesta) => respuesta.json())
  .then((productos) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    renderizarProductos(productos)

    let subcategorias = [
      "Remeras",
      "Buzos",
      "Camperitas",
      "Lentes",
      "Collares",
    ]
    let productoBuscado

    renderizarCarrito(carrito)

    renderizarProductos(productos)

    let entradaGral = 2200
    let descMayores = 0.75
    let descMenores = 0.5
    let descInfantes = "Entrada Gratuita"

    let entradas = document.getElementById("listaEntradas")

    let opcionDefecto = document.createElement("option")
    opcionDefecto.value = "0"
    opcionDefecto.innerText = "Seleccionar"
    entradas.appendChild(opcionDefecto)

    for (let i = 1; i <= 5; i++) {
      let option = document.createElement("option")
      option.value = i.toString()
      option.innerText = i.toString()
      entradas.appendChild(option)
    }

    function mostrarFormulario() {
      let cantidadEntradas = parseInt(entradas.value)

      let formularioDiv = document.getElementById("formularioEntradas")

      if (cantidadEntradas > 0) {
        formularioDiv.style.display = "block"
      } else {
        formularioDiv.style.display = "none"
      }
    }

    entradas.addEventListener("change", mostrarFormulario)

    mostrarFormulario()

    function generarCamposDeEntrada() {
      let cantidadEntradas = parseInt(entradas.value)
      let formularioDiv = document.getElementById("formularioEntradas")
      formularioDiv.className = "formulario"

      formularioDiv.innerHTML = ""

      for (let i = 1; i <= cantidadEntradas; i++) {
        let entradaDiv = document.createElement("div")
        entradaDiv.className = "entradaDiv"

        let numeroEntrada = document.createElement("p")
        numeroEntrada.innerText = `Entrada ${i}`
        entradaDiv.appendChild(numeroEntrada)

        let nombreInput = document.createElement("input")
        nombreInput.type = "text"
        nombreInput.placeholder = "Nombre"
        nombreInput.id = `nombre${i}`
        nombreInput.required = true
        nombreInput.classList.add("campo-vacio")
        nombreInput.addEventListener("input", function () {
          sessionStorage.setItem(
            `nombre${i}`,
            JSON.stringify(nombreInput.value)
          )
        })

        let apellidoInput = document.createElement("input")
        apellidoInput.type = "text"
        apellidoInput.placeholder = "Apellido"
        apellidoInput.id = `apellido${i}`
        apellidoInput.required = true
        apellidoInput.classList.add("campo-vacio")
        apellidoInput.addEventListener("input", function () {
          sessionStorage.setItem(
            `apellido${i}`,
            JSON.stringify(apellidoInput.value)
          )
        })

        let dniInput = document.createElement("input")
        dniInput.type = "text"
        dniInput.placeholder = "DNI"
        dniInput.id = `dni${i}`
        dniInput.required = true
        dniInput.classList.add("campo-vacio")
        dniInput.addEventListener("input", function () {
          sessionStorage.setItem(`dni${i}`, JSON.stringify(dniInput.value))
        })

        let edadInput = document.createElement("input")
        edadInput.type = "text"
        edadInput.placeholder = "Edad"
        edadInput.id = `edad${i}`
        edadInput.required = true
        edadInput.classList.add("campo-vacio")
        edadInput.min = 1
        edadInput.max = 99
        edadInput.addEventListener("input", function () {
          sessionStorage.setItem(`edad${i}`, JSON.stringify(edadInput.value))
        })

        entradaDiv.appendChild(nombreInput)
        entradaDiv.appendChild(apellidoInput)
        entradaDiv.appendChild(dniInput)
        entradaDiv.appendChild(edadInput)

        formularioDiv.appendChild(entradaDiv)
      }
      let botonReserva = document.createElement("button")
      botonReserva.className = "btn-reserva"
      botonReserva.innerHTML = "Reservar Entradas"

      botonReserva.addEventListener("click", finalizarReserva)
      formularioDiv.appendChild(botonReserva)
    }

    entradas.addEventListener("change", generarCamposDeEntrada)

    generarCamposDeEntrada()

    let select = document.getElementById("listaFiltro")
    select.addEventListener("change", () => {
      let productosFiltrados = productos.filter((producto) =>
        producto.subcategoria.includes(select.value)
      )
      renderizarProductos(productosFiltrados)
      return productosFiltrados
    })

    subcategorias.forEach((text) => {
      let option = document.createElement("option")
      option.innerText = `${text}`
      option.value = `${text}`
      select.appendChild(option)
    })


    function filtrarYRenderizar(productos) {
      let productosFiltrados = productos.filter((producto) =>
        producto.nombre.includes(buscador.value)
      )
      renderizarProductos(productosFiltrados)
      return productosFiltrados
    }


    function agregarProductoAlCarrito(productos, e) {
      let productoBuscado = productos.find(
        (producto) => producto.id === e.target.id
      )
      let productoEnCarrito = carrito.find(
        (producto) => producto.id === productoBuscado.id
      )

      if (productoBuscado.stock === 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer)
            toast.addEventListener("mouseleave", Swal.resumeTimer)
          },
        })

        Toast.fire({
          icon: "error",
          title: "Producto sin stock momentaneo",
        })
      } else {
        productoEnCarrito = carrito.find(
          (producto) => producto.id === productoBuscado.id
        )

        if (productoEnCarrito) {

          productoEnCarrito.unidades++
          productoEnCarrito.subtotal =
            productoEnCarrito.unidades * productoEnCarrito.precioUnitario
          productoBuscado.stock--
        } else {
 
          let productoNuevo = {
            id: productoBuscado.id,
            subcategoria: productoBuscado.subcategoria,
            nombre: productoBuscado.nombre,
            unidades: 1,
            precioUnitario: productoBuscado.precio,
            subtotal: productoBuscado.precio,
            rutaImagen: productoBuscado.rutaImagen,
          }
          carrito.push(productoNuevo)
          productoBuscado.stock--
          localStorage.setItem("carrito", JSON.stringify(carrito))
        }
        renderizarCarrito(carrito)
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer)
            toast.addEventListener("mouseleave", Swal.resumeTimer)
          },
        })

        Toast.fire({
          icon: "success",
          title: "Producto Agregado al Carrito!",
        })
      }
    }


    function renderizarCarrito(productosEnCarrito) {
      if (productosEnCarrito.length > 0) {
        let divCarrito = document.getElementById("carrito")
        divCarrito.innerHTML = ""

        productosEnCarrito.forEach((producto) => {
          let tarjProdCarrito = document.createElement("div")
          tarjProdCarrito.className = "tarjProdCarrito"
          tarjProdCarrito.innerHTML = `
      <img class="imagenEnCarrito" src=./images/${producto.rutaImagen} />
      <p>${producto.nombre}</p>
    <p>$${producto.precioUnitario}</p>
    <p>x${producto.unidades}</p>
    <p>$${producto.subtotal}</p>
    `
          divCarrito.appendChild(tarjProdCarrito)
        })

        let resumenCompra = document.createElement("div")
        resumenCompra.className = "resumenCompra"
        resumenCompra.innerHTML = `
    <p>Unidades a comprar: ${calcularTotalUnidades(carrito)}<br>
    Total de la Compra: $${calcularImporteFinal(carrito)}</p>
    `
        divCarrito.appendChild(resumenCompra)

        let botonFinalizar = document.createElement("button")
        botonFinalizar.className = "botonFinalizar"
        botonFinalizar.innerHTML = "Finalizar Compra"

        botonFinalizar.addEventListener("click", finalizarCompra)
        divCarrito.appendChild(botonFinalizar)
      }
    }

    function calcularTotalUnidades(carrito) {
      return carrito.reduce((total, producto) => total + producto.unidades, 0)
    }

    function calcularImporteFinal(carrito) {
      return carrito.reduce((total, producto) => total + producto.subtotal, 0)
    }


    function finalizarCompra() {
      Swal.fire({
        title: "Finalizar Compra",
        text: "Confirma para continuar",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#13d152",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, confirmo!",
      }).then((result) => {
        if (result.isConfirmed) {
          let carritoFinal = document.getElementById("carrito")
          carritoFinal.className = "carritoFinal"
          carritoFinal.innerHTML =
            "El Carrito esta vacío y esperando que elijas lo que más te guste!"
          carrito = []
          localStorage.setItem("carrito", JSON.stringify(carrito))
          renderizarCarrito(carrito)
          Swal.fire(
            "Compra Exitosa!",
            "En breve recibiras la orden de pago",
            "success"
          )
        }
      })
    }

    function formatearFecha() {
      const ahora = new Date()
      const opciones = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
      return ahora.toLocaleString("es-ES", opciones).replace(/\D/g, "")
    }

    const fechaEntrada = formatearFecha()

    function finalizarReserva() {
      Swal.fire({
        title: "Finalizar Reserva",
        text: "Confirma para continuar",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#13d152",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, confirmo!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Reserva Exitosa!<br>Escanea el QR" ,
            text: `Tu código de reserva es: ${nombreComprador.value}${dniComprador.value}${entradas.value}${fechaEntrada}`,

            imageUrl: "../images/qr parque tecno.png",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Custom image",
            confirmButtonText: "Aceptar",
          })
        }
      })
    }


    function renderizarProductos(productos) {
      let contenedor = document.getElementById("contenedorProductos")
      contenedor.innerHTML = ""

      productos.forEach((producto) => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `<h3>${producto.nombre}</h3>
    <img class=imagenProducto src=./images/${producto.rutaImagen} />
    <p class=precio>$${producto.precio}</p>
    <button id=${producto.id}>Agregar al Carrito</button>
    `

        contenedor.appendChild(tarjeta)

        let botonAgregarAlCarrito = document.getElementById(producto.id)
        botonAgregarAlCarrito.addEventListener("click", (e) => {
          agregarProductoAlCarrito(productos, e)
        })
      })
    }


    let buscador = document.getElementById("buscador")
    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", (e) => filtrarYRenderizar(productos))


    let botonVerOcultar = document.getElementById("verOcultar")
    botonVerOcultar.addEventListener("click", verOcultarCarrito)


    function verOcultarCarrito() {
      let carrito = document.getElementById("carrito")
      let contenedorProductos = document.getElementById("contenedorProductos")

      carrito.classList.toggle("oculta")
      contenedorProductos.classList.toggle("oculta")
    }


    let contenedorReservas = document.getElementById("contenedorReservas")
    let dniComprador = document.getElementById("dniComprador")
    let nombreComprador = document.getElementById("nombreComprador")
    let mensajeErrorMostrado = null
    let mensajeErrorDNI = null
    let ejecutado = false
    let errorMostrado = false
    let saludoCompradorTrue = false

    nombreComprador.addEventListener("keydown", (e) => {
      ejecutado = false
      if (e.key === "Enter") {
        if (validarDatoStr(nombreComprador) && !saludoCompradorTrue) {
          saludoCompradorTrue = true

          if (mensajeErrorMostrado) {
            mensajeErrorMostrado.remove()
            mensajeErrorMostrado = null
          }

          let okNombre = document.getElementById("okNombre")
          okNombre.style.display = "inline"

          saludoComprador()

          localStorage.setItem(
            "nombreComprador",
            JSON.stringify(nombreComprador.value)
          )
        } else {
          if (!errorMostrado) {
            mensajeError()
            errorMostrado = true
          }
        }
      }
    })


    dniComprador.addEventListener("keydown", (e) => {
      if (!ejecutado && e.key === "Enter") {
        if (validarDatoNumerico(dniComprador)) {
          ejecutado = true

          if (mensajeErrorDNI) {
            mensajeErrorDNI.remove()
            mensajeErrorDNI = null
          }

          let okDni = document.getElementById("okDni")
          okDni.style.display = "inline"

          sessionStorage.setItem(
            "dniComprador",
            JSON.stringify(dniComprador.value)
          )
        } else {
          if (!errorMostrado) {
            mensajeErrorDNI = mensajeError()
            errorMostrado = true
          }
        }
      }
    })


    function validarDatoStr(valorStr) {
      const valor = valorStr.value.trim()
      if (!/^[a-zA-Z]+$/.test(valor) || valor === "") {
        return false
      } else {
        ejecutado = false
        return true
      }
    }

    function validarDatoNumerico(valorNum) {
      const valor = valorNum.value.trim()
      if (!/^\d+$/.test(valor) || valor === "") {
        return false
      } else {
        ejecutado = false
        return true
      }
    }


    function saludoComprador() {
      let saludo = document.createElement("div")
      saludo.className = "saludo"
      saludo.innerHTML = `
  <h3>Hola ${nombreComprador.value}!</h3>
  <p>Estamos listos para empezar la reserva!</p>
<p>Te recordamos los precios de las Entradas:</p>
<p>Entrada General: $${entradaGral}<br>
Mayores de 65 años: $${entradaGral * descMayores} **75% off**<br>
Menores de 13 años: $${entradaGral * descMenores} **50% off**<br>
Menores de 6 años: ${descInfantes}!
</p>
`

      contenedorReservas.appendChild(saludo)
    }

    function mensajeError() {
      Toastify({
        className: "toastError",
        text: "Dato incorrecto. Por favor, ingrese un dato válido",
        duration: 2000,
        position: "center",
      }).showToast()
    }
  })
