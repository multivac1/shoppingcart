function Products() {

    this.data = [];
  
    // Metodo que inicializa Products con el parámetro del array data
    this.init = (data) => {
        this.data = data;
    }

    // Método que busca el id del producto en Json
    this.getById = (id) => {
        return this.data.filter((product)=> product.id === id)
    }

    // Metodo que crea y retorna la estructura del producto  
    this.buildHtmlProduct = (product) => {
        return `
            <div class="card col-lg-4 m-3">
                <a href="${product.img}" data-lightbox="image-1" data-title="Botin Nike">
                    <img class="img-fluid" style="width: 300px; heigth: 300px;" src="${product.img}" alt="Botin Nike">
                </a>
                <hr>
                <div class="card-body" id="item">
                    <h2 class="card-title" id="title" name="item">${product.name}</h2>
                    <p class="card-text" id="price">$ ${product.price}</p>
                    <div class="d-flex row-nowrap">
                        <button type="button" class="btnBuy btn btn-secondary m-1 btn-sm" onclick="addToCart('${product.id}')">Comprar</button>
                        <button type="button" class="moreInfo btn btn-primary m-1 btn-sm" onclick="moreInfo('${product.id}')"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        `
    }

    // Método que imprime la estructura del producto en el DOM
    this.buildList = (containerId, sourceData) => {
        let container = document.getElementById(containerId);
        container.innerHTML = "";
        let html = '';

        this[sourceData].forEach(product => {
            html = html + this.buildHtmlProduct(product); 
        });
        
        container.innerHTML = html;
    }

}