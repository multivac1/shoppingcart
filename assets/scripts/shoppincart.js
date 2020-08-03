function ShoppingCart() {
    
    // Array vacío para almacenar los productos seleccionados
    this.cart = [];

    let total = 0;

   // Método para llenar cart con localStorage o inicializarlo vacío.
   this.populate = () => {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    // Método que agrega el parámetro recibido al array cart, convirtiendo el objeto en string
    // También suma la cantidad de productos agregados dentro del icono del carrito
    this.add = (item) => {
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('contentCart');
        this.calculateTotalPrice()
    }

    // Método que eliminar los productos del carrito y del storage
    // También resta la cantidad de productos agregados dentro del icono del carrito
    this.deleteProduct = (id) => {
        this.cart.splice(id, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('contentCart');
        this.calculateTotalPrice()
    }

    // Método que elimina todos los productos del carrito y coloca en 0 el contador de productos
    this.cleanAll = () => {
    this.cart = [];
    localStorage.removeItem('cart')
    this.buildCart('contentCart');
    this.calculateTotalPrice()
    }

    // Retorna el array cart
    this.get = () => {
        return this.cart;
    }

    // Metodo que crea la estructura en el DOM de los productos que va agregando el usuario
    this.buildList = () => {
        let html = '';
        this.cart.forEach(product => {
            html = html + `
                <li class="d-flex row-nowrap justify-content-between">
                    <p class="mr-3">$${product.price}</p>
                    <p>${product.name}</p>
                    <button type="button" class="btn btn-outline-danger p-0" id="deleteItem" style="width: 25px; height: 25px;" onclick='deleteItem("${product.id}")'>X</button>
                </li>
                <hr>    
            `;
        });
        return html;
    }

    // Metodo que crea e imprime la estructura del shopping cart y la cantidad de productos dentro del carrito
    this.buildCart = (containerId) => {
        let container = document.getElementById(containerId);

        let cartCounter = document.getElementById('counter');

        cartCounter.innerHTML = "";
        let c = `${this.cart.length}`;

        container.innerHTML = "";
        let html = `
        <ul id="cartItems" class="list-group" style="width: 100%">
            ${ this.buildList() }
        </ul>
        <p class="text-left">Total:<span id="total"></span></p>	
        <div class="text-center">
            <button type="button" class="btn btn-dark btn-sm" id="confirmOrder" onclick="confirmOrder()">INICIAR COMPRA</button>
            <button type="button" class="btn btn-light btn-sm" id="cleanCart" onclick="cleanCart()">VACIAR CARRITO</button>
        <div>    
        `
        container.innerHTML = html;

        cartCounter.innerHTML = c;

        this.calculateTotalPrice(); // Persisto la operación en el carrito
    }

    // Método que imprime calculateTotalPrice
    this.renderTotal = (itemPrice) => {
        let span = document.getElementById('total');
        span.innerText = ` $ ${itemPrice}`;
    }

    // Método que calcula el precio total de todos los productos en el carrito
    this.calculateTotalPrice = () => {
        total = 0;
        this.cart.forEach(function(product){
            total +=  product.price;
        });
        this.renderTotal(total, 'total');
    }

}

            