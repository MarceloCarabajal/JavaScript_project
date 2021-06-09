let productos = [
    {
        id: 0,
        nombre: 'Almendra',
        imagen: `Images/Productos_categorias/frutos_secos/almendra-guara/almendraguara2.jpg`,
        descripcion:'almendra guara',
    },

    {
        id: 1,
        nombre: 'Nuez',
        imagen: 'image',
        descripcion: 'nuez dorada',
    },
    {
        id: 2,
        nombre: 'Nuez extra light',
        imagen: 'image',
        descripcion: 'nuez extra light',
    },
    {
        id: 3,
        nombre: 'Castaña de cajú',
        imagen: 'image',
        descripcion: 'castaña de caju',
    },
    {
        id: 4,
        nombre: 'Pistacho',
        imagen: 'image',
        descripcion: 'pistacho con cascara',
    },
    {
        id: 5,
        nombre: 'Maní sin sal',
        imagen: 'image',
        descripcion: 'mani tostado sin sal',
    },
    {
        id: 6,
        nombre: 'Maní con sal',
        imagen: 'image',
        descripcion: 'mani tostado con sal',
    },
    {
        id: 7,
        nombre: 'Avellana',
        imagen: 'image',
        descripcion: 'avellana pelada',
    }
]

const listaProd = document.getElementById('productos')

productos.forEach(prod => {
    let card = document.createElement('div')
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${prod.imagen}" class="card-img-top" alt="${prod.descripcion}">
    <div class="card-body">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text">${prod.descripcion}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
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



//Suma de totales

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

const rta = +prompt ("ingrese el precio que quiere gastar");

const precioProductos = productos.map (el => el.precio);

let total = precioProductos.reduce((prev,next) => prev + next);
console.log("el total gastado es: $" + total);

//Storage y JSON

console.dir(document.head)