export const orders = JSON.parse(localStorage.getItem('order')) || [];

export function addOrder(placedOrders) {
    orders.unshift(placedOrders);
    saveToLocalStorage(orders);
    console.log(JSON.parse(localStorage.getItem('order')));
}

function saveToLocalStorage() {
    localStorage.setItem('order', JSON.stringify(orders));
}