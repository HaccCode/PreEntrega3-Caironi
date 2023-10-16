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
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


renderizarCarrito(carrito);

renderizarProductos(productos);


/* 

let dniEntrada, nombreEntrada, apellidoEntrada, edadEntrada;
let valorEntrada = entradaGral;


if (edadEntrada < 6) {
  valorEntrada = descInfantes;
} else if (edadEntrada < 13) {
  valorEntrada = entradaGral - entradaGral * descMenores;
} else if (edadEntrada >= 65) {
  valorEntrada = entradaGral - entradaGral * descMayores;
}

//VALIDACION CAMPO EDAD

function validarEdadInput() {
  let valor = parseInt(edadInput.value);
  if (isNaN(valor) || valor < 1) {
    valor = 1;
  } else if (valor > 100) {
    valor = 100;
  }
  edadInput.value = valor;

  if (isNaN(valor) || valor <= 0 || valor >= 100) {
    alert("La edad debe ser un número mayor que 0 y menor que 100.");
  }
}
 */
let entradaGral = 2200;
let descMayores = 0.75; //-75% de descuento
let descMenores = 0.5; //-50% de descuento
let descInfantes = "Entrada Gratuita";

let entradas = document.getElementById("listaEntradas"); 

let opcionDefecto = document.createElement("option");
opcionDefecto.value = "0";
opcionDefecto.innerText = "Seleccionar";
entradas.appendChild(opcionDefecto);

for (let i = 1; i <= 5; i++) {
  let option = document.createElement("option");
  option.value = i.toString();
  option.innerText = i.toString();
  entradas.appendChild(option);
}

function mostrarFormulario() {
  let cantidadEntradas = parseInt(entradas.value);

  let formularioDiv = document.getElementById("formularioEntradas");

  if (cantidadEntradas > 0) {
    formularioDiv.style.display = "block";
  } else {
    formularioDiv.style.display = "none";
  }
}

entradas.addEventListener("change", mostrarFormulario);

mostrarFormulario();

function generarCamposDeEntrada() {
  let cantidadEntradas = parseInt(entradas.value);
  let formularioDiv = document.getElementById("formularioEntradas");
  formularioDiv.className = "formulario"


  formularioDiv.innerHTML = "";

  for (let i = 1; i <= cantidadEntradas; i++) {
    let entradaDiv = document.createElement("div");
    entradaDiv.className = "entradaDiv"

    let numeroEntrada = document.createElement("p");
    numeroEntrada.innerText = `Entrada ${i}`;
    entradaDiv.appendChild(numeroEntrada);

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
    edadInput.type = "text";
    edadInput.placeholder = "Edad";
    edadInput.id = `edad${i}`
    edadInput.min = 1;
    edadInput.max = 99;


    entradaDiv.appendChild(nombreInput);
    entradaDiv.appendChild(apellidoInput);
    entradaDiv.appendChild(dniInput);
    entradaDiv.appendChild(edadInput);

    formularioDiv.appendChild(entradaDiv);

    
  
  }
  let botonReserva = document.createElement('button');
  botonReserva.className = 'btn-reserva';
botonReserva.innerHTML = "Reservar Entradas";

    botonReserva.addEventListener("click", finalizarReserva)
    formularioDiv.appendChild(botonReserva);
}

entradas.addEventListener("change", generarCamposDeEntrada);

generarCamposDeEntrada();


/* function validarEdadInput(event) {
  const edadInput = event.target;
  const valor = parseInt(edadInput.value);

  if (isNaN(valor) || valor < 1 || valor > 99) {
    alert("La edad debe ser un número mayor que 0 y menor que 100.");
    edadInput.value = '';
    edadInput.focus();
  } else {
    const precioEntrada = calcularPrecioEntrada(valor);
    mostrarPrecioEntrada(precioEntrada);
  }
} */

function calcularPrecioEntrada(edad) {
  let valorEntrada = entradaGral;

  if (edad < 6) {
    valorEntrada = descInfantes;
  } else if (edad < 13) {
    valorEntrada = entradaGral - entradaGral * descMenores;
  } else if (edad >= 65) {
    valorEntrada = entradaGral - entradaGral * descMayores;
  }

  return valorEntrada;
}

function mostrarPrecioEntrada(precio) {
  const mensajePrecio = document.getElementById("mensajePrecio");
  mensajePrecio.innerText = `Precio de la entrada: ${precio}`;
}







let select = document.getElementById("listaFiltro");
select.addEventListener("change", () => {
  let productosFiltrados = productos.filter((producto) =>
    producto.subcategoria.includes(select.value)
  );
  renderizarProductos(productosFiltrados);
  return productosFiltrados;
});

subcategorias.forEach((text) => {
  let option = document.createElement("option");
  option.innerText = `${text}`;
  option.value = `${text}`;
  select.appendChild(option);
});

///////////////////////////
/* Funciones */ //////////////////////////////////





// Crea Tarjetas ya Filtradas
function filtrarYRenderizar(productos) {
  let productosFiltrados = productos.filter((producto) =>
    producto.nombre.includes(buscador.value)
  );
  renderizarProductos(productosFiltrados);
  return productosFiltrados;
}

//AGREGAR AL CARRITO
function agregarProductoAlCarrito(productos, e) {
  let productoBuscado = productos.find(
    (producto) => producto.id === e.target.id
  );
  let productoEnCarrito = carrito.find(
    (producto) => producto.id === productoBuscado.id
  );

  if (productoBuscado.stock === 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'Producto sin stock momentaneo'
    })
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
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Producto Agregado al Carrito!'
    })
  }
}

//CREAR PRODUCTO EN CARRITO
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
    
    let resumenCompra = document.createElement("div");
    resumenCompra.className = "resumenCompra"
    resumenCompra.innerHTML= `
    <p>Unidades a comprar: ${calcularTotalUnidades(carrito)}<br>
    Total de la Compra: $${calcularImporteFinal(carrito)}</p>
    `
    divCarrito.appendChild(resumenCompra)

    



    let botonFinalizar = document.createElement("button");
    botonFinalizar.className = "botonFinalizar"
    botonFinalizar.innerHTML = "Finalizar Compra";

    botonFinalizar.addEventListener("click", finalizarCompra)
    divCarrito.appendChild(botonFinalizar);


  }
}


function calcularTotalUnidades(carrito) {
  return carrito.reduce((total, producto) => total + producto.unidades, 0);
}

function calcularImporteFinal(carrito) {
  return carrito.reduce((total, producto) => total + producto.subtotal, 0);
}




// Llamamos a esta función cuando se agrega o quita un producto del carrito
function actualizarCarritoYResumen(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito(carrito);
}




//FINALIZAR COMPRA
function finalizarCompra() {
  Swal.fire({
    title: 'Finalizar Compra',
    text: "Confirma para continuar",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#13d152',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, confirmo!'
  }).then((result) => {
    if (result.isConfirmed) {
      let carritoFinal = document.getElementById("carrito");
      carritoFinal.className = "carritoFinal"
      carritoFinal.innerHTML =
        "El Carrito esta vacío y esperando que elijas lo que más te guste!";
        carrito = []
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarCarrito(carrito);
      Swal.fire(
        'Compra Exitosa!',
        'En breve recibiras la orden de pago',
        'success'
      )
    }
  })
}

let reservaEntradas

function finalizarReserva() {
  Swal.fire({
    title: 'Finalizar Reserva',
    text: "Confirma para continuar",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#13d152',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, confirmo!'
  }).then((result) => {
    if (result.isConfirmed) {
      let reservaFinal = document.getElementById("reservaEntradas");
      reservaFinal.className = "reservaFinal"
      reservaEntradas = []
      localStorage.setItem("reservaEntradas", JSON.stringify(reservaEntradas));
      Swal.fire(
        'Reserva Exitosa!',
        'En breve recibiras la orden de pago',
        'success'
      )
    }
  })
}


//CREA GALERIA DE PRODUCTOS
function renderizarProductos(productos) {
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
      agregarProductoAlCarrito(productos, e);
    });
  });
}

//*Boton Buscar en Tienda
let buscador = document.getElementById("buscador");
let botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener("click", (e) =>
  filtrarYRenderizar(productos)
);

//*Boton Ver/Ocultar Carrito
let botonVerOcultar = document.getElementById("verOcultar");
botonVerOcultar.addEventListener("click", verOcultarCarrito);

//MUESTRA u OCULTA EL CARRITO
function verOcultarCarrito() {
  let carrito = document.getElementById("carrito");
  let contenedorProductos = document.getElementById("contenedorProductos");

  carrito.classList.toggle("oculta");
  contenedorProductos.classList.toggle("oculta");
}

//*Captura elementos de RESERVA
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

//VALIDAR DATO STRING
function validarDatoStr() {
  const nombre = nombreComprador.value.trim();
  if (!/^[a-zA-Z]+$/.test(nombre) || nombre === "") {
    return false; // El dato no es válido, devuelve false.
  } else {
    ejecutado = false;
    return true; // El dato es válido, devuelve true.
  }
  
}

//SALUDAR COMPRADOR
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
    `;

    contenedorReservas.appendChild(saludo);


  
}


//DNIComprador-Enter
dniComprador.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sessionStorage.setItem("dniComprador", JSON.stringify(dniComprador.value));
  }
});

//FUNCION DATO INCORRECTO
function mensajeError() {
  let mensajeError = document.createElement("div");
  mensajeError.innerHTML = `
  <h3>Dato Incorrecto</h3>
  <p>Por favor, ingrese un dato válido</p>
    `;

  contenedorReservas.appendChild(mensajeError);
}



