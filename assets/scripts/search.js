var localJson = [
    {
        "id": 0,
        "img": "../assets/images/legend_8.jpg",
        "name":"Botin Legend 8",
        "price": 3000
    },
    {
        "id": 1,
        "img": "../assets/images/phantom_v2.jpg",
        "name":"Botin Phantom V2",
        "price": 4000
    },
    {
        "id": 3,
        "img": "../assets/images/phantom_vp.jpg",
        "name":"Botin Phantom VP",
        "price": 5000
    },
    {
        "id": 4,
        "img": "../assets/images/superfly_6.jpg",
        "name":"Botin Superfly 6",
        "price": 6000
    }
];


searchInput = document.getElementById('searchBox'); //selecciono el input donde escribe el usuario
buttonSearch = document.getElementById('search-btn'); //selecciono el boton de buscar
searchResults = document.getElementById('productsContainer'); 
productFound = document.getElementById('productFound');
lengthProductFound = document.getElementById('lengthProductFound');

var searchFilter = ()=>{ // de form.value viene lo que escribio el usuario
    searchResults.innerHTML = '';
    
    var inputText = searchInput.value.toLowerCase(); // en esta variable almaceno lo que el usuario escribio y lo paso a minusculas

    for(let product of localJson) { //loop para recorrer en el json cada producto
        let productName = product.name.toLowerCase(); //paso el nombre del producto del json a minusculas
        if(productName.indexOf(inputText) !== -1) {
            searchResults.innerHTML += `
            <div class="card col-sm-2 m-3" style="width: 18rem;">
                <img class="img-fluid" src="${product.img}" alt="...">
                <div class="card-body p-0" id="item">
                    <h5 class="card-title" id="title" name="item">${product.name}</h5>
                    <p class="card-text" id="price">$${product.price}</p>
                    <div class="d-flex row-nowrap">
                        <button class="btnBuy btn btn-primary m-1 btn-sm">Comprar</button>
                        <button class="btn btn-primary m-1 btn-sm"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
            `
       }
   }
    
    if(searchResults.innerHTML === '') {
        searchResults.innerHTML += `
            <div class="col-sm-12 m-5"">
                <p>Producto no encontrado...</p>
            </div>
       `;       
   }
};


searchFilter();   
                                                   

// IMPRIMO PRODUCTOS CON EVENTO CLICK
buttonSearch.addEventListener('click', searchFilter);

// IMPRIMO PRODUCTOS CON EVENTO KEYUP
searchInput.addEventListener('keyup', searchFilter);

// AGREGO BUSQUEDA AL SPAN PRODUCTFOUND CON EVENTO KEYUP
searchInput.addEventListener('keyup', function() {
 
    productFound.innerHTML = `<p>${$('#searchBox').val()}</p>`;

   lengthProductFound.innerHTML = //ACA NO SE CÓMO DECLARAR PARA AGREGAR LA CANTIDAD DE PRODUCTOS ENCONTRADOS EN LA BUSQUEDA.length;

});
