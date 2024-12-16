export let cart = JSON.parse(localStorage.getItem('cart')) ||
    [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1,
            deliveryId: 1
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryId: 2
        }
    ]

export function saveLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeLocalStorage() {
    localStorage.removeItem('cart');
}



export function addProductToCart(productid) {
    let quantcount;
    cart.forEach((item) => {
        if (item.id === productid) {
            quantcount = item;
        }
    });

    if (quantcount) {
        quantcount.quantity += 1;
    }
    else {
        cart.push({
            productId: productid,
            quantity: 1,
            deliveryId: 1
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

export function quantitycounting() {
    let count = 0;
    cart.forEach((item) => {
        count += item.quantity;
    })
    return count;
}