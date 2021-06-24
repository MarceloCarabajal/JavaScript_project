

let productos = [
    {
        id: 0,
        nombre: `Almendra`,
        imagen: `Images/Productos_categorias/frutos_secos/almendra-guara/almendraguara2.jpg`,
        descripcion:`La almendra es uno de los frutos secos con mayor aporte de vitamina E, que ejerce un valioso papel antioxidante. 50 g diarios de almendras cubren las necesidades diarias de esta vitamina.
        Otro punto destacable es su contenido en fibra. Es ideal para estimular los movimientos intestinales y para conferir sensación de saciedad. El contenido en hierro es otra de las virtudes de este delicioso fruto seco.`,
        precio: `1367`
    },
    {
        id: 1,
        nombre: `Avellana`,
        imagen: `Images/Productos_categorias/frutos_secos/avellana/avellana.png`,
        descripcion: `Las avellanas son uno de los frutos secos más deliciosos que existen. Pero sus propiedades van mucho más allá de lo meramente gastronómico. Tienen un alto contenido de vitamina E, aportan calcio, son muy energéticas y también ayudan a combatir el colesterol.`,
        precio: `2796`
    },
    {
        id: 2,
        nombre: `Nuez`,
        imagen: `Images/Productos_categorias/frutos_secos/nuez-dorada/nuez-dorada.png`,
        descripcion: `Además de sus beneficios nutricionales, estos productos contienen altos niveles de  compuestos químicos antioxidantes que ayudan al organismo a contrarrestar los efectos de las moléculas que causan oxidación y dañan a las células. El consumo regular de estos frutos secos puede reducir el riesgo de enfermedades cardiovasculares.`,
        precio: `1111`
    },
    {
        id: 3,
        nombre: `Nuez extra light`,
        imagen: `Images/Productos_categorias/frutos_secos/nuez-extra-light/nuez-extra-light.jpg`,
        descripcion: `Además de sus beneficios nutricionales, estos productos contienen altos niveles de  compuestos químicos antioxidantes que ayudan al organismo a contrarrestar los efectos de las moléculas que causan oxidación y dañan a las células. El consumo regular de estos frutos secos puede reducir el riesgo de enfermedades cardiovasculares.`,
        precio: `1447`
    },
    {
        id: 4,
        nombre: `Castaña de cajú`,
        imagen: `Images/Productos_categorias/frutos_secos/caju/caju-tostado.png`,
        descripcion: `Las castañas ayudan a disminuir el colesterol y fortalecer el sistema inmunológico, por su alto contenido en antioxidantes y vitaminas. Aportan en 100 gramos unas 560 calorías, y son ricas en hidratos de carbono de absorción lenta, proteínas vegetales, grasas, principalmente monoinsaturadas por su riqueza en ácidos grasos esenciales, vitaminas del complejo B, y minerales como hierro, potasio, magnesio y cobre.`,
        precio: `1655`
    },
    {
        id: 5,
        nombre: `Pistacho`,
        imagen: `Images/Productos_categorias/frutos_secos/pistacho/pistacho.jpg`,
        descripcion: `Además de sus beneficios nutricionales, estos productos contienen altos niveles de  compuestos químicos antioxidantes que ayudan al organismo a contrarrestar los efectos de las moléculas que causan oxidación y dañan a las células. El consumo regular de estos frutos secos puede reducir el riesgo de enfermedades cardiovasculares.`,
        precio: `2727`
    },
    {
        id: 6,
        nombre: `Maní sin sal`,
        imagen: `Images/Productos_categorias/frutos_secos/mani-tostado/mani-tostado.jpg`,
        descripcion: `Es muy bueno para el organismo, tiene muchas propiedades nutritivas e incluso ayuda a bajar el colesterol. Las propiedades del maní son el potasio, calcio, magnesio, sodio, zinc, selenio, cobre y flúor. Estos componentes hacen que el maní sea muy bueno para el fortalecimiento muscular, como antioxidante y regenerador celular, para el crecimiento y desarrollo de los huesos y músculos y en menor proporción incluyo ayuda a reducir el colesterol.`,
        precio: `263`
    },
    {
        id: 7,
        nombre: `Maní con sal`,
        imagen: `Images/Productos_categorias/frutos_secos/mani-tostado/mani-tostado.jpg`,
        descripcion: `Es muy bueno para el organismo, tiene muchas propiedades nutritivas e incluso ayuda a bajar el colesterol. Las propiedades del maní son el potasio, calcio, magnesio, sodio, zinc, selenio, cobre y flúor. Estos componentes hacen que el maní sea muy bueno para el fortalecimiento muscular, como antioxidante y regenerador celular, para el crecimiento y desarrollo de los huesos y músculos y en menor proporción incluyo ayuda a reducir el colesterol.`,
        precio: `263`
    }]

let carrito = []

function agregarCarrito(prod) {
    carrito.push(prod)
    console.log(`se agregó al carrito el producto con ID: ${prod.id}`)
}

const listaProd = document.getElementById('productos')

productos.forEach(prod => {
    let card = document.createElement('div')
    card.classList.add('col')
    card.innerHTML = `<div class="card m-1 " style="width: 19rem;">
    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
    <div class="card-body">
      <h5 class="card-title">${prod.nombre}</h5>
      <a href = "#descripcion" id="flip">Descripción</a>
      <p class="card-text" id="descripcion" style = "display:none">${prod.descripcion}</p>
      <h4>Precio: $${prod.precio}</h4>
      <a href="#" class="btn btn-primary d-flex justify-content-" id="btnAgregar${prod.id}">Agregar al carrito</a>
      <label>Agregar cantidad (Kg)</label>
      <input id = "cant-${prod.id}"   type="number">
    </div>
  </div>`
  listaProd.appendChild(card)
  let boton = document.getElementById("btnAgregar"+ prod.id)
  let cantidad = parseFloat()
  cantidad = document.getElementById("cant-" + prod.id)


  boton.addEventListener("click", () => {
    prod.cantidad= cantidad.value // falta ver como agregar cantidades a un producto que ya se agrego antes y lo sume
    agregarCarrito(prod)   
    })
})

//Usuario: ver y agregar a la pantalla home

// function persona (usuario, clave) {
//     this.usuario = usuario;
//     this.clave = clave;
// }
// const persona1 = new persona ("marcelo10", 1234);
// const persona2 = new persona ("nutriarg", 2011);



//Suma de totales - pendiente para enlazar con el resto

// const sumaProd = [
//     {id: 1, nombre: "Almendra", precio: 1367, descripcion: "1 kg"},
//     {id: 1, nombre: "Avellana", precio: 2796, descripcion: "1 kg"},
//     {id: 1, nombre: "Nuez extra light", precio: 1447, descripcion: "1 kg"},
//     {id: 1, nombre: "Caju", precio: 1655, descripcion: "1 kg"},
// ];

// function agregarItem (id, nombre, precio, descripcion) {
//     const item = (id, nombre, precio, descripcion);
//     sumaProd.push (item);
// }

// const rta = +prompt ("ingrese el precio que quiere gastar");

// const precioProductos = productos.map (el => el.precio);
// parseFloat(precioProductos);

// let total = precioProductos.reduce((prev,next) => prev + next);
// console.log(`el total gastado es: $ ${total}`);

//Prueba de JQUERY
$(document).ready(function(){
    console.log('funcionando');
})

// $("#desc").css("display", "none");   


$("#flip").click(function(){
    $("#descripcion").toggle();
})




