const cart = {
    cartItem: undefined,

    loadFromLocalStorage() {
        this.cartItem = JSON.parse(localStorage.getItem('cart-oop'));
        if (!this.cartItem) {
            this.cartItem = [
                {
                    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 1,
                    deliveryId: 1
                },
                {
                    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryId: 2
                }];
        }
    },

    saveLocalStorage() {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItem));
    },

    addProductToCart(productid) {
        let quantcount;
        this.cartItem.forEach((item) => {
            if (item.id === productid) {
                quantcount = item;
            }
        });

        if (quantcount) {
            quantcount.quantity += 1;
        }
        else {
            this.cartItem.push({
                id: productid,
                quantity: 1,
                deliveryId: 1
            })
        }
        this.saveLocalStorage();
    },

    removeProductfromCart(productid) {
        let newCart = [];
        this.cartItem.forEach((item) => {
            if (item.id !== productid) {
                newCart.push(item);
            }
        })

        this.cartItem = newCart;
        this.saveLocalStorage();
    },

    quantitycounting() {
        let count = 0;
        this.cartItem.forEach((item) => {
            count += item.quantity;
        })
        return count;
    }


};

cart.loadFromLocalStorage();
