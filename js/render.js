function renderMenu() {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = menuCategories.map(getCategoryTemplate).join('');
}

function renderBasket() {
  document.querySelectorAll('.js-basket').forEach(renderBasketInto);
}

function renderBasketInto(container) {
  const previousList = container.querySelector('.basket__items');
  const scrollPosition = previousList ? previousList.scrollTop : 0;
  const focusedControl = getFocusedControl(container);
  container.innerHTML = getBasketTemplate();
  const newList = container.querySelector('.basket__items');
  if (newList) newList.scrollTop = scrollPosition;
  restoreFocus(container, focusedControl);
}

function getFocusedControl(container) {
  const active = document.activeElement;
  if (!active || !container.contains(active) || !active.dataset.action) return null;
  return { action: active.dataset.action, dishId: active.dataset.dishId };
}

function restoreFocus(container, focusedControl) {
  if (!focusedControl) return;
  const selector = `[data-action="${focusedControl.action}"][data-dish-id="${focusedControl.dishId}"]`;
  const target = container.querySelector(selector) || container.querySelector('.basket__title');
  if (target.matches('.basket__title')) target.tabIndex = -1;
  target.focus({ preventScroll: true });
}

function updateAddButtons() {
  document.querySelectorAll('.js-add-button').forEach(updateAddButton);
}

function updateAddButton(button) {
  const dishId = button.dataset.dishId;
  const quantity = getQuantity(dishId);
  button.innerHTML = getAddButtonContent(quantity);
  button.setAttribute('aria-label', getAddButtonAriaLabel(dishId));
  button.classList.toggle('add-button--added', quantity > 0);
}

function updateBottomBar() {
  const count = getItemCount();
  const badge = document.getElementById('basketBadge');
  badge.textContent = count;
  badge.hidden = count === 0;
  document.getElementById('openBasketButton').classList.toggle('has-items', count > 0);
}

function announceBasketChange(message) {
  document.getElementById('basketAnnouncer').textContent = message;
}
