const deliveryFee = 4.99;
const maxQuantityPerDish = 99;
const confirmationDuration = 6000;
const basketStorageKey = 'burgerHouseBasket';

const menuCategories = [
  {
    id: 'burger',
    title: 'Burger',
    titleExtension: '& Sandwiches',
    note: '',
    iconOffset: 28,
    icon: 'assets/img/icons/burger.png',
    dishes: [
      {
        id: 'veggie-mushroom-black-burger',
        name: 'Veggie mushroom black burger',
        description: 'Mixed green salad, Tomatoes, Edamame, Mushrooms',
        price: 16.9,
        image: 'assets/img/dishes/veggie-mushroom-black-burger.jpg',
      },
      {
        id: 'all-meat-burger',
        name: 'All meat burger',
        description: 'Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ sauce',
        price: 15.9,
        image: 'assets/img/dishes/all-meat-burger.jpg',
      },
      {
        id: 'beef-red-burger',
        name: 'Beef red burger',
        description: 'Beef, Cheese, Tomatoes, Lettuce, Onion',
        price: 14.9,
        image: 'assets/img/dishes/beef-red-burger.jpg',
      },
      {
        id: 'big-chicken-burger',
        name: 'Big chicken burger',
        description: 'Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper',
        price: 15.9,
        image: 'assets/img/dishes/big-chicken-burger.jpg',
      },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    titleExtension: '',
    note: '(30cm)',
    iconOffset: 16,
    icon: 'assets/img/icons/pizza.png',
    dishes: [
      {
        id: 'pizza-margherita',
        name: 'Pizza Margherita',
        description: 'Tomato Sauce, Mozzarella',
        price: 11.9,
        image: 'assets/img/dishes/pizza-margherita.jpg',
      },
      {
        id: 'pizza-chorizo',
        name: 'Pizza Chorizo',
        description: 'Tomato slices, Mozzarella, Chorizo',
        price: 13.9,
        image: 'assets/img/dishes/pizza-chorizo.jpg',
      },
      {
        id: 'pizza-funghi',
        name: 'Funghi',
        description: 'Red onion, Olives, Button Mushrooms, Mozzarella',
        price: 12.9,
        image: 'assets/img/dishes/pizza-funghi.jpg',
      },
      {
        id: 'pizza-quattro-formaggi',
        name: 'Quattro Formaggi with Chicken',
        description: 'Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano',
        price: 15.9,
        image: 'assets/img/dishes/pizza-quattro-formaggi.jpg',
      },
    ],
  },
  {
    id: 'salad',
    title: 'Salad',
    titleExtension: '',
    note: '',
    iconOffset: 22,
    icon: 'assets/img/icons/salad.png',
    dishes: [
      {
        id: 'warm-beef-arugula-salad',
        name: 'Warm beef arugula salad',
        description:
          'Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing',
        price: 16.9,
        image: 'assets/img/dishes/warm-beef-arugula-salad.jpg',
      },
      {
        id: 'mini-green-salad',
        name: 'Mini green Salad',
        description: 'Green salad, Cucumber, Carrots, Parsley, Radishes',
        price: 7.9,
        image: 'assets/img/dishes/mini-green-salad.jpg',
      },
      {
        id: 'green-salad-sea-food',
        name: 'Green Salad with sea food',
        description:
          'Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill',
        price: 16.9,
        image: 'assets/img/dishes/green-salad-sea-food.jpg',
      },
      {
        id: 'vegan-green-salad-tofu',
        name: 'Vegan green salad with tofu',
        description:
          'Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts',
        price: 14.9,
        image: 'assets/img/dishes/vegan-green-salad-tofu.jpg',
      },
    ],
  },
];
