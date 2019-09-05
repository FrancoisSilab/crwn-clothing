export const addItemToCart = (cartItems, cartItemtoAdd) => {
  const existingCarItem = cartItems.find(
    cardItem => cardItem.id === cartItemtoAdd.id,
  );

  if (existingCarItem) {
    return cartItems.map(cardItem =>
      cardItem.id === cartItemtoAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem,
    );
  }

  return [...cartItems, { ...cartItemtoAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
