export const cart = [
];

export function addProductToCart(button) {
    let boo;
    cart.forEach((item) => {
        if (item.id === button.dataset.id) {
            boo = item;
        }
    });

    if (boo) {
        boo.quantity += 1;
    }
    else {
        cart.push({
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image,
            quantity: 1
        })
    }
    console.log(cart);
}






















// let chtml = ``;

// cart.forEach((carts) => {
//     chtml += `
//     <div class="cart-item-container">
//             <div class="delivery-date">Delivery date: Tuesday, June 21</div>

//             <div class="cart-item-details-grid">
//               <img
//                 class="product-image"
//                 src="${carts.image}"
//               />

//               <div class="cart-item-details">
//                 <div class="product-name">
//                   ${carts.name}
//                 </div>
//                 <div class="product-price">$${carts.price}</div>
//                 <div class="product-quantity">
//                   <span> Quantity: <span class="quantity-label">2</span> </span>
//                   <span class="update-quantity-link link-primary">
//                     Update
//                   </span>
//                   <span class="delete-quantity-link link-primary">
//                     Delete
//                   </span>
//                 </div>
//               </div>

//               <div class="delivery-options">
//                 <div class="delivery-options-title">
//                   Choose a delivery option:
//                 </div>
//                 <div class="delivery-option">
//                   <input
//                     type="radio"
//                     checked
//                     class="delivery-option-input"
//                     name="delivery-option-1"
//                   />
//                   <div>
//                     <div class="delivery-option-date">Tuesday, June 21</div>
//                     <div class="delivery-option-price">FREE Shipping</div>
//                   </div>
//                 </div>
//                 <div class="delivery-option">
//                   <input
//                     type="radio"
//                     class="delivery-option-input"
//                     name="delivery-option-1"
//                   />
//                   <div>
//                     <div class="delivery-option-date">Wednesday, June 15</div>
//                     <div class="delivery-option-price">$4.99 - Shipping</div>
//                   </div>
//                 </div>
//                 <div class="delivery-option">
//                   <input
//                     type="radio"
//                     class="delivery-option-input"
//                     name="delivery-option-1"
//                   />
//                   <div>
//                     <div class="delivery-option-date">Monday, June 13</div>
//                     <div class="delivery-option-price">$9.99 - Shipping</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>`;
// });
// //console.log(document.querySelector('.order-summary'));