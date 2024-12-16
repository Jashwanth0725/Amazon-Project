import { products, loadProductsFetch } from "../data/products.js";
import { addProductToCart, quantitycounting } from "../data/cart.js";

loadProductsFetch().then(() => {
    renderProducts();
});


function renderProducts() {

    let combHtml = ``;
    products.forEach((product) => {
        combHtml += `
    <div class="product-container">
        <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="${product.getStar()}"
    />
    <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div >

        <div class="product-price">$${product.getPrice()}</div>

        <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
        </div>

        <button class="add-to-cart-button button-primary"

        data-id="${product.id}"

        >Add to Cart</button>
        ${product.extraInfoHtml()}
        
    </div > `;
    });

    //Default first page of Amazon
    document.querySelector('.products').innerHTML = combHtml;
    document.querySelector('.cart-quantity').innerHTML = quantitycounting();


    document.querySelectorAll('.add-to-cart-button')
        .forEach((button) => {
            button.addEventListener('click', () => {
                const productid = button.dataset.id;
                addProductToCart(productid);  //in cart.js file
                document.querySelector('.cart-quantity').innerHTML = quantitycounting();
            });

        });
}