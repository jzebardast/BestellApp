function formatPrice(amount) {
  return roundPrice(amount).toFixed(2).replace('.', ',') + '€';
}

function roundPrice(amount) {
  return Math.round(amount * 100) / 100;
}

function escapeHtml(text) {
  const replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(text).replace(/[&<>"']/g, (character) => replacements[character]);
}

function getAllDishes() {
  return menuCategories.flatMap((category) => category.dishes);
}

function findDish(dishId) {
  return getAllDishes().find((dish) => dish.id === dishId);
}

function getCategoryFullTitle(category) {
  return [category.title, category.titleExtension, category.note].filter(Boolean).join(' ');
}
