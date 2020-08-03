//VARIABLES GLOBALES
var searchFilter; // Filtra y concatena la busqueda
var inputSearch; // Almacena y pasa a minusculas la busqueda
var searchInput; // Input de búsqueda
var buttonSearch; // Botón de búsqueda
var productsContainer; // Contenedor de productos
var productFound; // Contenedor que muestra el texto de la busqueda
var lengthProductFound; // Contenedor que muestra cantidad de productos encontrados 
var searchResults = []; // Almacena array de objetos encontrados en la búsqueda 
var disabledSubmitBtn; // Obtiene el btn de busqueda y lo deshabilita
var onCartCounter; // Contenedor del btn del carrito. Muestra la cantindad de productos agregados al carrito
var btnBuy; // Botón de cada producto
var cartIcon; // ïcono del carrito
var closeCart; // Ícono (X) para cerrar carrito
var shoppingCartContainer; // Contenedor del carrito
var confirmOrder; //
var products;
let prueba = $('#contenedorCompra');

var totalPrice;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Función para agregar productos al carrito llamando al metodo getById (busca por Id de producto) de Products 
function addToCart(id) {
    let product = products.getById(id)[0];
    shoppingCart.add(product);
}
// Elimina producto del carrito
function deleteItem(id) {
    let product = products.getById(id)[0];
    shoppingCart.deleteProduct(product);
}
// Vacía el carrito
function cleanCart() {
    shoppingCart.cleanAll();
}
// Alert más info x producto
function moreInfo(id) {
    let product = products.getById(id)[0];
    alert(product.info);
}
// Verifica si el carrito esta vació e imprime alerta, de lo contrario confirma el comienzo de la orden de compra
function confirmOrder() {

    

        if(shoppingCart.cart.length == '') {
            alert('Oops, parece que tu carrito esta vacío');
        }
        else {
            //console.log('hay productos');
            prueba.show('slow');
            
        }
 
}

// INICIO OBJETOS PARA SHOPPINGCART

shoppingCart = new ShoppingCart();
shoppingCart.populate();
shoppingCart.buildCart('contentCart');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INICIO DEL DOCUMENTO 
$(document).ready(function() {

    // ALMECENO RUTA AJAX LOCAL         
    let localJson = `../assets/scripts/data.json`;
    
    // LLAMO AL JSON. CREO EL OBJETO PRODUCTOS Y RENDERIZO LAS BUSQUEDAS EN TIEMPO REAL
    $.ajax({
        method: "GET",
        url: localJson,
        dataType: "json"
    }).done(function (data) {
        products = new Products();
        products.init(data);
        products.buildList('productsContainer', 'data');
        renderSearch();  
    }).fail(function (error) {
        console.log(error);
    });
    
    //VALIDACION DEL FORMULARIO CON LIBRERIA VALIDATE()
    $("form[name='searchForm']").validate({
        rules: {
            search: {
                required: false,
                minlength: 4
            }
        },
        messages: {
            search: {
                minlength: '<< Complete su Búsqueda',
            }
        },
        submitHandler: function (form) {
            searchFilter();
        }
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // DESHABILITO BOTON DE BUSQUEDA
    disabledSubmitBtn = $("#searchForm button[type='button']").attr("disabled", true);
    // HABILITO BOTON DE BUSQUEDA SI SE INGRESA ALGUN VALOR
    $("#searchForm input.required").change(function () {
        let valid = true;
        $.each($("#myForm input.required"), function (value) {
            if(!$(value).val()) {
               valid = false;
            }
        });
        if(valid) {
            $(disabledSubmitBtn).attr("disabled", false);
        } 
        else {
            $(disabledSubmitBtn).attr("disabled", true);
        }
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ANIMACIÓN CONTENEDOR CARRITO
    //guardo los elementos en variables
    cartIcon = $("#cartIcon");
    closeCart = $("#closeCart");
    shoppingCartContainer = $("#shoppingCart");
        
    // Oculto y muestro el carrito  
    cartIcon.click(function() { 
        shoppingCartContainer.toggle('fast');  
    });  

    closeCart.click(function() {
        shoppingCartContainer.fadeOut();
    });
    
})


