let basket = [];

function getBasketItem(dishId) {
  return basket.find((item) => item.dishId === dishId);
}

function getQuantity(dishId) {
  const item = getBasketItem(dishId);
  return item ? item.quantity : 0;
}

function addToBasket(dishId) {
  const item = getBasketItem(dishId);
  if (!item) {
    basket.push({ dishId: dishId, quantity: 1 });
  } else if (item.quantity < maxQuantityPerDish) {
    item.quantity++;
  }
  announceBasketChange(`${findDish(dishId).name} added.`);
  updateBasket();
}

function decreaseQuantity(dishId) {
  const item = getBasketItem(dishId);
  if (!item) return;
  if (item.quantity <= 1) {
    removeFromBasket(dishId);
    return;
  }
  item.quantity--;
  announceBasketChange(`${findDish(dishId).name} quantity decreased.`);
  updateBasket();
}

function removeFromBasket(dishId) {
  basket = basket.filter((item) => item.dishId !== dishId);
  announceBasketChange(`${findDish(dishId).name} removed.`);
  updateBasket();
}

function clearBasket() {
  basket = [];
  updateBasket();
}

function getSubtotal() {
  const sum = basket.reduce((total, item) => total + findDish(item.dishId).price * item.quantity, 0);
  return roundPrice(sum);
}

function getDeliveryFee() {
  return basket.length > 0 ? deliveryFee : 0;
}

function getTotal() {
  return roundPrice(getSubtotal() + getDeliveryFee());
}

function getItemCount() {
  return basket.reduce((count, item) => count + item.quantity, 0);
}

function updateBasket() {
  saveBasket();
  renderBasket();
  updateAddButtons();
  updateBottomBar();
}

function saveBasket() {
  try {
    localStorage.setItem(basketStorageKey, JSON.stringify(basket));
  } catch (error) {
    // Storage nicht verfügbar (z. B. privater Modus): Warenkorb gilt nur für diese Sitzung.
  }
}

function loadBasket() {
  try {
    const savedBasket = JSON.parse(localStorage.getItem(basketStorageKey));
    basket = Array.isArray(savedBasket) ? savedBasket.filter(isValidBasketItem) : [];
  } catch (error) {
    basket = [];
  }
}

function isValidBasketItem(item) {
  const isKnownDish = item && Boolean(findDish(item.dishId));
  return (
    isKnownDish && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= maxQuantityPerDish
  );
}
