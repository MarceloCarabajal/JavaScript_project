const ClickButton = document.querySelectorAll('.btn-agregarCarr');
const tbody = document.querySelector('.tbody-mixFru');
let carritoMixFru = []

ClickButton.forEach(btn => {
    btn.addEventListener('click', addTocarrito)

})

function addTocarrito(e) {
    const button = e.target;
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precioMix').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const newItem = {
        titulo: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)

}

function addItemCarrito (newItem){
    
    const alert = document.querySelector('.alert');
    setTimeout ( function(){
        alert.classList.add('hide')
    }, 2000)
    alert.classList.remove('hide')

    

    const inputElemento = tbody.getElementsByClassName('input_elemento')
    for(let i=0; i < carritoMixFru.length; i++){
        if(carritoMixFru[i].titulo.trim() === newItem.titulo.trim()){
           carritoMixFru[i].cantidad ++;
           const inputValue = inputElemento[i]
           inputValue.value ++
           CarritoTotal();
           return null; 
           
        }
    }
    carritoMixFru.push(newItem)
    renderCarritoMixFru()
}

function renderCarritoMixFru(){
    tbody.innerHTML = ''
    carritoMixFru.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `
        <th scope="row">1</th>
                <td class="table__productos">
                  <img src=${item.img} alt="">
                  <h6 class="title-prod">${item.titulo}</h6>
                </td>
                <td class="table__precio"><p>${item.precio}</p></td>
                <td class="table__cantidad">
                  <input type="number" min="1" value=${item.cantidad} class="input_elemento">
                  <button class="delete btn btn-danger">x</button>
                </td>
        `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector('.delete').addEventListener('click', removeItemCarrito)
        tr.querySelector('.input_elemento').addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}

function CarritoTotal() {
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carritoMixFru.forEach((item) => {
        const precio = Number(item.precio.replace('$', ''))
        total = total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${total}`
    addLocalStorage()
}

function removeItemCarrito(e){

    const buttonDelete = e.target
    const tr = buttonDelete.closest('.itemCarrito')
    const title = tr.querySelector('.title-prod').textContent;
    for(let i=0; i<carritoMixFru.length; i++){
        if(carritoMixFru[i].titulo.trim() === title.trim()){
            carritoMixFru.splice (i, 1)
            
        }
    }

    const alert = document.querySelector('.remove');
    setTimeout ( function(){
        alert.classList.add('remove')
    }, 2000)
    alert.classList.remove('remove')

    tr.remove()
    CarritoTotal()
}

function sumaCantidad (e){
    const sumaInput = e.target
    const tr = sumaInput.closest('.itemCarrito')
    const title = tr.querySelector('.title-prod').textContent;
    carritoMixFru.forEach(item => {
        if (item.titulo.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
    console.log(carritoMixFru);
}

function addLocalStorage() {
    localStorage.setItem('carritoMixFru', JSON.stringify(carritoMixFru))
}

window.onload = function() {
    const storage = JSON.parse(localStorage.getItem('carritoMixFru'));
    if(storage){
       carritoMixFru = storage; 
       renderCarritoMixFru();
    }
}