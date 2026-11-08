const desktopQuery = window.matchMedia('(min-width: 1025px)');

const actions = {
  add: addToBasket,
  increase: addToBasket,
  decrease: decreaseQuantity,
  remove: removeFromBasket,
  order: placeOrder,
  toggleBasket: toggleBasketDialog,
  closeBasket: closeBasketDialog,
  closeConfirmation: hideConfirmation,
};

function init() {
  loadBasket();
  renderMenu();
  renderBasket();
  updateAddButtons();
  updateBottomBar();
  registerEventListeners();
}

function registerEventListeners() {
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', handleKeydown);
  enableBackdropClose(document.getElementById('confirmationDialog'));
  document.getElementById('confirmationDialog').addEventListener('close', showBasketAgain);
  desktopQuery.addEventListener('change', handleBreakpointChange);
}

function handleClick(event) {
  const target = event.target.closest('[data-action]');
  closeBasketOnNavigation(event.target);
  if (!target || !actions[target.dataset.action]) return;
  actions[target.dataset.action](target.dataset.dishId);
}

function closeBasketOnNavigation(element) {
  const item = element.closest('.bottom-bar__item');
  if (item && item.id !== 'openBasketButton') closeBasketDialog();
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeBasketDialog();
}

function handleBreakpointChange(event) {
  if (event.matches) closeBasketDialog();
}

init();
