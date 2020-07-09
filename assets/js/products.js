$(document).ready(function() { 
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

    function getCard(product) {
        return `
        <div class="card col-sm-4 m-3" style="width: 18rem;">
            <img class="img-fluid" src="${product.img}" alt="...">
            <div class="card-body" id="item">
                <h5 class="card-title" id="title">${product.name}</h5>
                <p class="card-text" id="price">$${product.price}</p>
                <a href="#" class="addToCart-btn btn btn-primary" id="btnBuy">Comprar</a>
                <a href="#" class="btn btn-primary">Ver</a>
            </div>
        </div>
        `;
    }

    function renderProducts(products) {
        products.forEach(product => {
            var htmlTemplate = getCard(product);
            $('#productsContainer').append(htmlTemplate);
        });               
    }

    function searchProducts(key) {
        var localJson = `http://127.0.0.1:8080/assets/js/data.json`; 
        
        $.ajax({
            method: "GET",
            url: localJson
        }).done(function (data) {
            $('#productsContainer').empty();
            renderProducts(data);
        }).fail(function (error) {
            console.log(error);
        });
    }
})

   