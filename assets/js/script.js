const desktopQuery = window.matchMedia('(min-width: 1025px)');

const actions = {
  add: addToBasket,
  increase: addToBasket,
  decrease: decreaseQuantity,
  remove: removeFromBasket,
  order: placeOrder,
  openBasket: openBasketDialog,
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
  document.querySelectorAll('dialog').forEach(enableBackdropClose);
  document.getElementById('confirmationDialog').addEventListener('close', showBasketAgain);
  desktopQuery.addEventListener('change', handleBreakpointChange);
}

function handleClick(event) {
  const target = event.target.closest('[data-action]');
  if (!target || !actions[target.dataset.action]) return;
  actions[target.dataset.action](target.dataset.dishId);
}

function handleBreakpointChange(event) {
  if (event.matches) closeBasketDialog();
}

init();
