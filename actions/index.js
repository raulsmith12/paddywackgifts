export const cartItems = (itemName, itemImage, itemId, price) => {
    return {
        type: 'ADD_TO_CART',
        payload: { itemName, itemImage, itemId, price }
    };
};