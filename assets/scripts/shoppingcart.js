
    //guardo los elementos en variables
    cartIcon = $("#cartIcon");
    closeCart = $("#closeCart");
    shoppingCart = $("#shoppingCart");
        
    //oculto y muestro el carrito  
    cartIcon.click(function() { 
        shoppingCart.toggle('fast');  
    });  

    closeCart.click(function() {
        shoppingCart.fadeOut();
    });
///////////////////////////////////////////

/*
//LOCALSTORAGE PRACTICA
guardar_localstorage();
obtener_localstorage();

function guardar_localstorage() {
    //drtitem guardo en localstorage
    localStorage.setItem('data', JSON.stringify(data));
}

function obtener_localstorage() {
    //get item traigo del localstorage
    if(localStorage.getItem("data")) {

    // se q esxiste el json en el localstorage
    data = JSON.parse(localStorage.getItem("data"));

    console.log(data);
    }
    else{
        console.log('no hay entradas en local storage');
    }

}

///////////////////////////////////////////////////
*/