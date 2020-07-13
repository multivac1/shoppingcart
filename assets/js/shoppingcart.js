$(document).ready(function() { 
var shoppingCart;
    //guardo los elementos en variables
    var cartIcon = $("#cartIcon");
    var closeCart = $("#closeCart");
    var shoppingCart = $("#shoppingCart");
        
    //oculto y muestro el carrito  
    cartIcon.click(function() { 
        shoppingCart.toggle('fast');  
    });  

    closeCart.click(function() {
        shoppingCart.fadeOut();
    });

})