export let cart = JSON.parse(localStorage.getItem('cart'));

function saveLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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
            quantity: 1
        })
    }
    saveLocalStorage();
}

export function removeProductfromCart(productid) {
    let newCart = [];
    cart.forEach((item) => {
        if (item.id !== productid) {
            newCart.push(item);
        }
    })

    cart = newCart;
    saveLocalStorage();
}

export function counting() {
    let count = 0;
    cart.forEach((cart) => {
        count++;
    })
    return count;
}