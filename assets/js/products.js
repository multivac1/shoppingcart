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
        <div class="card col-sm-2 m-3" style="width: 18rem;">
            <img class="img-fluid" src="${product.img}" alt="...">
            <div class="card-body p-0" id="item">
                <h5 class="card-title" id="title">${product.name}</h5>
                <p class="card-text" id="price">$${product.price}</p>
                <div class="d-flex row-nowrap">
                    <button class="btnBuy btn btn-primary m-1 btn-sm">Comprar</button>
                    <button class="btn btn-primary m-1 btn-sm"><i class="fa fa-eye" aria-hidden="true"></i></button>
                </div>
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

   