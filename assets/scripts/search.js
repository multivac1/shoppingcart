// FUNCIÓN PARA FILTRAR BÚSQUEDA 
searchFilter = () => { 
    
    searchResults = [];

    productsContainer.innerHTML = ''; 
    
    inputSearch = searchInput.value.toLowerCase(); 

    for(product of products.data) { 

        let productName = product.name.toLowerCase(); 

        if(productName.indexOf(inputSearch) !== -1) { 

            productsContainer.innerHTML +=  products.buildHtmlProduct(product);
            searchResults.push(product);
        }
    };

    if(productsContainer.innerHTML === '') { 
        productsContainer.innerHTML += 
        `
            <div class="notfound col-sm-12 m-2">
                <p>Producto no encontrado...</p>
            </div>
       `;     
   }
   
}

// FUNCIÓN PARA RENDERIZAR PRODUCTOS BUSCADOS
function renderSearch() {

    buttonSearch.addEventListener('click', searchFilter);

    searchInput.addEventListener('keyup', searchFilter);
    
    searchInput.addEventListener('keyup', function() {
        
    productFound.innerHTML = `<p>${$('#searchBox').val()}</p>`

    lengthProductFound.innerHTML = searchResults.length;
        
    })

}

