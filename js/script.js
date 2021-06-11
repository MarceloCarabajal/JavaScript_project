let productos = [
    {
        id: 0,
        nombre: 'Almendra',
        imagen: `Images/Productos_categorias/frutos_secos/almendra-guara/almendraguara2.jpg`,
        descripcion:'almendra guara',
    },
    {
        id: 2,
        nombre: 'Avellana',
        imagen: 'Images/Productos_categorias/frutos_secos/avellana/avellana.png',
        descripcion: 'avellana pelada',
    },
    {
        id: 3,
        nombre: 'Nuez',
        imagen: `Images/Productos_categorias/frutos_secos/nuez-dorada/nuez-dorada.png`,
        descripcion: 'nuez dorada',
    },
    {
        id: 4,
        nombre: 'Nuez extra light',
        imagen: 'Images/Productos_categorias/frutos_secos/nuez-extra-light/nuez-extra-light.jpg',
        descripcion: 'nuez extra light',
    },
    {
        id: 5,
        nombre: 'Castaña de cajú',
        imagen: 'Images/Productos_categorias/frutos_secos/caju/caju-tostado.png',
        descripcion: 'castaña de caju',
    },
    {
        id: 6,
        nombre: 'Pistacho',
        imagen: 'Images/Productos_categorias/frutos_secos/pistacho/pistacho.jpg',
        descripcion: 'pistacho con cascara',
    },
    {
        id: 7,
        nombre: 'Maní sin sal',
        imagen: 'Images/Productos_categorias/frutos_secos/mani-tostado/mani-tostado.jpg',
        descripcion: 'mani tostado sin sal',
    },
    {
        id: 8,
        nombre: 'Maní con sal',
        imagen: 'Images/Productos_categorias/frutos_secos/mani-tostado/mani-tostado.jpg',
        descripcion: 'mani tostado con sal',
    }]

const listaProd = document.getElementById('productos')

productos.forEach(prod => {
    let card = document.createElement('div')
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
    <div class="card-body">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text">${prod.descripcion}</p>
      <a href="#" class="btn btn-primary" id="btnAgregar">Agregar al carrito</a>
      <label>Agregar cantidad (Kg)</label>
      <input id = "cantidad"   type="number">
    </div>
  </div>`
  listaProd.appendChild(card)
})

//Usuario

function persona (usuario, clave) {
    this.usuario = usuario;
    this.clave = clave;
}
const persona1 = new persona ("marcelo10", 1234);
const persona2 = new persona ("nutriarg", 2011);



//Suma de totales - pendiente para enlazar con el resto

const sumaProd = [
    {id: 1, nombre: "Almendra", precio: 1367, descripcion: "1 kg"},
    {id: 1, nombre: "Avellana", precio: 2796, descripcion: "1 kg"},
    {id: 1, nombre: "Nuez extra light", precio: 1447, descripcion: "1 kg"},
    {id: 1, nombre: "Caju", precio: 1655, descripcion: "1 kg"},
];

function agregarItem (id, nombre, precio, descripcion) {
    const item = (id, nombre, precio, descripcion);
    sumaProd.push (item);
}

// const rta = +prompt ("ingrese el precio que quiere gastar");

// const precioProductos = productos.map (el => el.precio);
// parseFloat(precioProductos);

// let total = precioProductos.reduce((prev,next) => prev + next);
// console.log(`el total gastado es: $ ${total}`);



//mouseEvent (Como hago para agregar en el alert el producto y la cantidad, tampoco puedo agregar con otro prod
//que no sea el primero)
let boton = document.getElementById("btnAgregar");
boton.onclick = () => {alert(`Se agrega al carrito`)};
boton.onmousemove = () => {console.log("Move")}

//keyBoardEvent

let input1  = document.getElementById("cantidad");
input1.onkeydown = () => {console.log("keyDown")};
