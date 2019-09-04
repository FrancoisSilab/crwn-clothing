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
