$(document).ready(function() { 

    //guardo los elementos en variables
    var cartIcon = $("#cartIcon");
    var closeCart = $("#closeCart");
    var shoppingCart = $("#shoppingCart");
        
    //oculto y muestro el carrito  
    cartIcon.click(function() { 
        shoppingCart.fadeIn();  
    });  

    closeCart.click(function() {
        shoppingCart.fadeOut();
    });

    

})