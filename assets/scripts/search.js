// LLAMADO A ELEMENTOS DEL DOM
searchInput = document.getElementById('searchBox'); 
buttonSearch = document.getElementById('search-btn'); 
productsContainer = document.getElementById('productsContainer'); 
productFound = document.getElementById('productFound'); 
lengthProductFound = document.getElementById('lengthProductFound'); 

// FUNCIÓN PARA FILTRAR BÚSQUEDA 
searchFilter = () => { 
    
    searchResults = [];

    productsContainer.innerHTML = ''; // Vacía el string para evitar lista infinita
    
    inputSearch = searchInput.value.toLowerCase(); // Almacena lo que se escribe y lo pasa a minusculas

    for(product of products.data) { // Loop para recorrer cada producto del array

        let productName = product.name.toLowerCase(); // Pasa el nombre del producto a minusculas

        // Compara búsqueda del usuario dentro del nombre de cada producto. Si la encuentra, retorna cualquier comparación distinta a -1 y lo concatena
        if(productName.indexOf(inputSearch) !== -1) { 

            productsContainer.innerHTML +=  products.buildHtmlProduct(product);
            searchResults.push(product);
        }
    };

    if(productsContainer.innerHTML === '') { // Si el resultado es igual a un string vació imprime mensaje
        productsContainer.innerHTML += `
            <div class="col-sm-12 m-2"">
                <p>Producto no encontrado...</p>
            </div>
       `;     
   }
   
}

// FUNCIÓN PARA RENDERIZAR PRODUCTOS BUSCADOS
function renderSearch() {

    // Imprime productos con evento "click"
    buttonSearch.addEventListener('click', searchFilter);

    // Imprime productos con evento "keyup"
    searchInput.addEventListener('keyup', searchFilter);
    
    // Imprime la búsqueda del usuario en tiempo real
    // Agrega búsqueda dentro de "#productoFound" con evento "keyup" 
    // imprime cantidad de productos encontrados
    searchInput.addEventListener('keyup', function() {
        
        productFound.innerHTML = `<p>${$('#searchBox').val()}</p>`

        lengthProductFound.innerHTML = searchResults.length;
        
    })

}


// LLAMO A LAS FUNCIONES

renderSearch();  

