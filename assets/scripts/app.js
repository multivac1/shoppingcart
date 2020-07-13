//VARIABLES GLOBALES
var searchInput;

//INICIO DEL DOCUMENTO
$(document).ready(function() { 

    //llamado AJAX LOCAL        
    var localJson = `http://127.0.0.1:5500/assets/scripts/data.json`;

    $.ajax({
        method: "GET",
        url: localJson,
        dataType: "json"
    }).done(function (data) {
        $('#productsContainer').empty();
        renderProducts(data);
        $('#searchlength').html(`(${(data.length)})`);
    }).fail(function (error) {
        console.log(error);
    });


    //VALIDACION DEL FORMULARIO con libreria VALIDATE()
    $("form[name='searchForm']").validate({
        rules: {
            search: {
                required: true,
                minlength: 4
            }
        },
        messages: {
            search: {
                required: 'Campo obligatorio',
                minlength: 'debe contener al menos 4 caracteres',
            }
        },
        submitHandler: function (form) {
            searchProducts($('input[name="search"]').val())
        }
    });

    //HTML TEMPLATE DE RENDERIZADO DE PRODUCTOS
    function getCard(product) {
        return `
        <div class="col-lg-3  m-3">
            <div class="card" style="width: 18rem;">
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
        </div>
        `;
         
    }

    //MOSTRAR LOS PRODUCTOS
    function renderProducts(products) {
        products.forEach(product => {
            var htmlTemplate = getCard(product);
            
            $('#productsContainer').append(htmlTemplate);
        });               
    }
    
})

//FILTRO
searchProducts();
function searchProducts() { 

}

// AGREGO BUSQUEDA AL SPAN PRODUCTFOUND
$('#search-btn').click(function() {

    searchInput = $('input[name="search"]');
    
    $('#productFound').html(`<p>${searchInput.val()}</p>`);
    
});
//FIN DEL DOCUMENTO

//CONTADOR DE PRODUCTOS ENCONTRADOS
var counter = $('#counter');
var btnBuy =  $('.btnBuy');

$('body').on('click', '.btnBuy', function(){

    counter.text( +counter.text() + 1 );
    
    // alert('click en comprar boton');

});






   