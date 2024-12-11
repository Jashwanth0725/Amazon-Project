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

                let options;
                delivery.forEach((option) => {
                    if (option.id === cartItem.deliveryId) {
                        options = option.days;
                    }
                })
                const today = dayjs();
                const date = today.add(options, 'days');
                const dateString = date.format('dddd, MMMM D');



                chtml += `
                <div class="cart-item-container js-cart-item-container-${product.id}">
                    <div class="delivery-date">
                    <div class="delivery-date-${cartItem.id}">Delivery date: ${dateString} </div></div>

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
                                ${deliveryHTML(product.id, cartItem.deliveryId)}
                            </div>
                        </div>
                </div>`;
            }
        })
    })
    document.querySelector('.order-summary').innerHTML = chtml;
    bind();
}


//to calculate the delivery date and generate html
function deliveryHTML(productid, cartid) {
    let generateHTML = `<div class="delivery-options-title">
                                Choose a delivery option:
                            </div>`;
    const today = dayjs();
    delivery.forEach((del) => {


        const check = del.id === cartid ? 'checked' : '';

        const price = del.priceCents === 0 ? 'FREE' : `$${money(del.priceCents)} -`;

        generateHTML += `
        <div class="delivery-option" data-deliveryid="${del.id}" data-productid="${productid}">
        
            <input type="radio"s  ${check} class="delivery-option-input"
                name="delivery-option-${productid}" />
            <div>
                <div class="delivery-option-date">${(today.add(del.days, 'day')).format('dddd, MMM D')}
                </div>
            
                <div class="delivery-option-price">
                 ${price} Shipping
                </div>
            </div>
        </div>
        `
        //console.log(del.id);
    })

    return generateHTML;
}

//to count and store qunantity on checkout header
function checkoutHeader() {
    document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${quantitycounting()} items</a>)`;
}


function bind() {
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


    // for changing date on delivery date on click
    document.querySelectorAll('.delivery-option')
        .forEach((option) => {

            option.addEventListener('click', () => {

                const radio = option.querySelector('.delivery-option-input');
                radio.checked = true;

                const productid = option.dataset.productid;
                const deliveryid = option.dataset.deliveryid;
                cart.forEach((cart) => {
                    if (productid === cart.id) {
                        cart.deliveryId = parseInt(deliveryid);

                        let options;
                        delivery.forEach((option) => {
                            if (option.id === cart.deliveryId) {
                                options = option.days;
                            }
                        })
                        const today = dayjs();
                        const date = today.add(options, 'days');
                        const dateString = date.format('dddd, MMMM D');
                        document.querySelector(`.delivery-date-${cart.id}`).innerHTML = `Delivery date: ${dateString}`;
                    }



                })
            })
        })
}
