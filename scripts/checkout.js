import { products } from "../data/products.js";
import { cart, quantitycounting, removeProductfromCart } from "../data/cart.js";
import { money } from "../shared/utils.js";
import { delivery } from "../data/delivery.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

//Default Checkout Page of  Amazon
genarate();


//to add the products from cart array to check out page
function genarate() {
    checkoutHeader();
    let chtml = ``;
    cart.forEach((cartItem) => {
        products.forEach((product) => {
            if (cartItem.id === product.id) {
                chtml += `
                <div class="cart-item-container js-cart-item-container-${product.id}">
                    <div class="delivery-date">Delivery date: Tuesday, June 21</div>

                        <div class="cart-item-details-grid">
                            <img
                            class="product-image"
                            src="${product.image}"
                            />

                            <div class="cart-item-details">
                            <div class="product-name">
                                ${product.name}
                            </div>
                            <div class="product-price">$${money(product.priceCents)}</div>

                            <div class="product-quantity">
                                <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>


                                <span class="update-quantity-link link-primary">
                                Update
                                </span>

                                <span class="delete-quantity-link link-primary" 
                                data-id="${product.id}">
                                Delete
                                </span>
                            </div>
                            </div>

                            <div class="delivery-options">
                                ${deliveryHTML(product.id)}
                            </div>
                        </div>
                </div>`;
            }
        })
    })
    document.querySelector('.order-summary').innerHTML = chtml;
}


//to calculate the delivery date and generate html
function deliveryHTML(productid) {
    let generateHTML = `<div class="delivery-options-title">
                                Choose a delivery option:
                            </div>`;
    const today = dayjs();
    delivery.forEach((del) => {
        generateHTML += `
        <div class="delivery-option">
            <input type="radio"s class="delivery-option-input"
                name="delivery-option-${productid}"/>
            <div>
                <div class="delivery-option-date">${(today.add(del.days, 'day')).format('dddd, MMM D')}
                </div>
            
                <div class="delivery-option-price">
                $${money(del.priceCents)} - Shipping
                </div>
            </div>
        </div>
        `})
    return generateHTML;
}

//to count and store qunantity on checkout header
function checkoutHeader() {
    document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${quantitycounting()} items</a>)`;
}

//to remove a product element in cart array
document.querySelectorAll('.delete-quantity-link').
    forEach((product) => {
        product.addEventListener('click', () => {
            const productid = product.dataset.id;

            removeProductfromCart(productid);

            const reclass = document.querySelector
                (`.js-cart-item-container-${productid}`);
            reclass.remove();
            genarate();
        })
    })