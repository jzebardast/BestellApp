function getIconTemplate(iconName, extraClass = '') {
  return `<svg class="icon ${extraClass}" aria-hidden="true" focusable="false"><use href="#icon-${iconName}"></use></svg>`;
}

function getCategoryTemplate(category) {
  return `
    <section class="category" id="${category.id}" aria-labelledby="${category.id}Title">
      ${getCategoryBannerTemplate(category)}
      <div class="category__dishes">
        ${category.dishes.map(getDishTemplate).join('')}
      </div>
    </section>`;
}

function getCategoryBannerTemplate(category) {
  return `
    <div class="category__banner" style="--icon-offset: ${category.iconOffset}px">
      <img class="category__icon" src="${category.icon}" alt="" />
      <h2 class="category__title" id="${category.id}Title">
        ${escapeHtml(category.title)}
        ${getCategoryExtensionTemplate(category)}
      </h2>
    </div>`;
}

function getCategoryExtensionTemplate(category) {
  const extension = category.titleExtension
    ? `<span class="category__extension">${escapeHtml(category.titleExtension)}</span>`
    : '';
  const note = category.note ? `<span class="category__note">${escapeHtml(category.note)}</span>` : '';
  return extension + note;
}

function getDishTemplate(dish) {
  return `
    <article class="dish">
      <img class="dish__image" src="${dish.image}" alt="" width="207" height="121" loading="lazy" />
      <div class="dish__content">
        <h3 class="dish__name">${escapeHtml(dish.name)}</h3>
        <p class="dish__description">${escapeHtml(dish.description)}</p>
        <span class="dish__price">${formatPrice(dish.price)}</span>
        ${getAddButtonTemplate(dish)}
      </div>
    </article>`;
}

function getAddButtonTemplate(dish) {
  return `
    <button class="add-button js-add-button" type="button" data-action="add"
      data-dish-id="${dish.id}" aria-label="${getAddButtonAriaLabel(dish.id)}">
      ${getAddButtonContent(getQuantity(dish.id))}
    </button>`;
}

function getAddButtonContent(quantity) {
  return quantity > 0 ? `Added ${quantity}` : 'Add to basket';
}

function getAddButtonAriaLabel(dishId) {
  const quantity = getQuantity(dishId);
  const suffix = quantity > 0 ? ` (${quantity} in basket)` : '';
  return escapeHtml(`Add ${findDish(dishId).name} to basket${suffix}`);
}

function getBasketTemplate() {
  const content = basket.length > 0 ? getBasketFilledTemplate() : getBasketEmptyTemplate();
  return `<h2 class="basket__title">Your Basket</h2>${content}`;
}

function getBasketEmptyTemplate() {
  return `
    <div class="basket__empty">
      <p class="basket__empty-text">Nothing here yet.<br />Go ahead and choose something delicious!</p>
      ${getIconTemplate('cart-large', 'basket__empty-icon')}
    </div>`;
}

function getBasketFilledTemplate() {
  return `
    <ul class="basket__items">${basket.map(getBasketItemTemplate).join('')}</ul>
    <div class="basket__footer">
      ${getBasketSummaryTemplate()}
      <button class="buy-button" type="button" data-action="order">
        Buy now (${formatPrice(getTotal())})
      </button>
    </div>`;
}

function getBasketItemTemplate(item) {
  const dish = findDish(item.dishId);
  return `
    <li class="basket-item">
      <div class="basket-item__top">
        <p class="basket-item__name">${item.quantity} x ${escapeHtml(dish.name)}</p>
        ${getCornerRemoveTemplate(item, dish)}
      </div>
      <div class="basket-item__bottom">
        ${getQuantityControlsTemplate(item, dish)}
        <span class="basket-item__price">${formatPrice(dish.price * item.quantity)}</span>
      </div>
    </li>`;
}

function getCornerRemoveTemplate(item, dish) {
  if (item.quantity < 2) return '';
  const label = `Remove ${dish.name} from basket`;
  return getQuantityButtonTemplate(
    'remove',
    label,
    getIconTemplate('trash'),
    dish.id,
    'quantity__button--corner'
  );
}

function getQuantityControlsTemplate(item, dish) {
  return `
    <div class="quantity" role="group" aria-label="Quantity of ${escapeHtml(dish.name)}">
      ${getDecreaseButtonTemplate(item, dish)}
      <span class="quantity__value">${item.quantity}</span>
      ${getQuantityButtonTemplate('increase', 'Increase quantity', '+', dish.id)}
    </div>`;
}

function getDecreaseButtonTemplate(item, dish) {
  if (item.quantity > 1) {
    return getQuantityButtonTemplate('decrease', 'Decrease quantity', '−', dish.id);
  }
  const label = `Remove ${dish.name} from basket`;
  return getQuantityButtonTemplate('remove', label, getIconTemplate('trash'), dish.id);
}

function getQuantityButtonTemplate(action, label, content, dishId, extraClass = '') {
  return `
    <button class="quantity__button ${extraClass}" type="button" data-action="${action}"
      data-dish-id="${dishId}" aria-label="${escapeHtml(label)}">${content}</button>`;
}

function getBasketSummaryTemplate() {
  return `
    <dl class="basket__summary">
      ${getSummaryRowTemplate('Subtotal', getSubtotal())}
      ${getSummaryRowTemplate('Delivery fee', getDeliveryFee())}
      ${getSummaryRowTemplate('Total', getTotal(), 'basket__row--total')}
    </dl>`;
}

function getSummaryRowTemplate(label, amount, modifier = '') {
  return `<div class="basket__row ${modifier}"><dt>${label}</dt><dd>${formatPrice(amount)}</dd></div>`;
}
