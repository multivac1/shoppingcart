//VARIABLES GLOBALES
var searchInput; // ALMACENA LA BUSQUEDA QUE INGRESA EL USUARIO
var buttonSearch; 
var searchResults;
var productFound;
var lengthProductFound;
var desibledSubmitBtn;
var onCartCounter;
var btnBuy;
var arrayFromSearch = [];
var cart = [];
var total = 0;
var products;

// INICIO DEL DOCUMENTO
$(document).ready(function() { 

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
            filter();
        }
    });

    // DESHABILITO BOTON DE BUSQUEDA
    desibledSubmitBtn = $("#searchForm button[type='button']").attr("disabled", true);
    // HABILITO BOTON DE BUSQUEDA SI SE INGRESA ALGUN VALOR
    $("#searchForm input.required").change(function () {
        var valid = true;
        $.each($("#myForm input.required"), function (index, value) {
            if(!$(value).val()){
               valid = false;
            }
        });
        if(valid){
            $(desibledSubmitBtn).attr("disabled", false);
        } 
        else{
            $(desibledSubmitBtn).attr("disabled", true);
        }
    });

//CONTADOR DE PRODUCTOS AGREGADOS AL CARRITO
onCartCounter = $('#counter');
btnBuy =  $('.btnBuy');

$('body').on('click', '.btnBuy', function(){

    onCartCounter.text( +onCartCounter.text() + 1 );
    
});

})



