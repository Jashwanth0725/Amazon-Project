export const cart = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        quantity: 1
    }
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
            quantity: 1
        })
    }
    console.log(cart);
}