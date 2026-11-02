let confirmationTimer;

function openBasketDialog() {
  const dialog = document.getElementById('basketDialog');
  if (!dialog.open) dialog.showModal();
}

function closeBasketDialog() {
  const dialog = document.getElementById('basketDialog');
  if (dialog.open) dialog.close();
}

function showConfirmation() {
  const dialog = document.getElementById('confirmationDialog');
  dialog.classList.remove('is-closing');
  if (!dialog.open) dialog.showModal();
  clearTimeout(confirmationTimer);
  confirmationTimer = setTimeout(hideConfirmation, confirmationDuration);
}

function hideConfirmation() {
  const dialog = document.getElementById('confirmationDialog');
  if (!dialog.open) return;
  clearTimeout(confirmationTimer);
  dialog.classList.add('is-closing');
  setTimeout(() => finishHidingConfirmation(dialog), 300);
}

function finishHidingConfirmation(dialog) {
  if (dialog.classList.contains('is-closing')) dialog.close();
  dialog.classList.remove('is-closing');
}

function placeOrder() {
  if (basket.length === 0) return;
  clearBasket();
  closeBasketDialog();
  announceBasketChange('Test order placed. Your basket is empty.');
  document.body.classList.add('is-order-confirmed');
  showConfirmation();
}

function enableBackdropClose(dialog) {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function showBasketAgain() {
  document.body.classList.remove('is-order-confirmed');
}
