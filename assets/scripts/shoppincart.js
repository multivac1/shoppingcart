function ShoppingCart() {
    
    this.cart = [];

    let total = 0;

   this.populate = () => {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    this.add = (item) => {
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('contentCart');
        this.calculateTotalPrice()
    }
    
    this.deleteProduct = (id) => {
        this.cart.splice(id, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('contentCart');
        this.calculateTotalPrice()
    }

    this.cleanAll = () => {
    this.cart = [];
    localStorage.removeItem('cart')
    this.buildCart('contentCart');
    this.calculateTotalPrice()
    }

    this.get = () => {
        return this.cart;
    }

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

        this.calculateTotalPrice();
    }

    this.renderTotal = (itemPrice) => {
        let span = document.getElementById('total');
        span.innerText = ` $ ${itemPrice}`;
    }

    this.calculateTotalPrice = () => {
        total = 0;
        this.cart.forEach(function(product){
            total +=  product.price;
        });
        this.renderTotal(total, 'total');
    }

}

            
