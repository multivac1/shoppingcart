$(document).ready(() => {

    // agrego busqueda al span productFound
    $('#search-btn').click(function() {

		searchInput = $('input[name="search"]');
		
        $('#productFound').html(`<p>${searchInput.val()}</p>`);
        
    })

    //contador de productos en el carrito
    var counter = $('#counter');
    var btnBuy =  $('.btnBuy');

    $('body').on('click', '.btnBuy', function(){

        counter.text( +counter.text() + 1 );
    
         // agrego el producto al carrito
         function addToCart () {
         shoppingCart.push(this.attr(${product.name}));    
         }
    });

})


