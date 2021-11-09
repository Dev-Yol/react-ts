import { ActionInterface, IProduct } from "models/interfaces";
import { ActionTypes } from "utils/actions";


interface AppStoreState {
  cart: IProduct[];
  products: IProduct[];
  selectedProduct: IProduct | null;
}
const initial_state: AppStoreState = {
  cart: [],
  products: [
    {
      id: 1,
      name: 'First Product',
      price: 24.99,
      rating: 4.3,
      description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://demo.api2cart.com/opencart/image/cache/data/hp_1-228x228.jpg',
      inStock: true,
      numReviews: 100,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Second Product',
      price: 64.99,
      rating: 3.5,
      description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://demo.api2cart.com/opencart/image/cache/data/hp_1-228x228.jpg',
      inStock: true,
      numReviews: 100,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Third Product',
      price: 74.99,
      rating: 4.2,
      description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://demo.api2cart.com/opencart/image/cache/data/hp_1-228x228.jpg',
      inStock: true,
      numReviews: 100,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Fourth Product',
      price: 84.99,
      rating: 3.9,
      description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://demo.api2cart.com/opencart/image/cache/data/hp_1-228x228.jpg',
      inStock: true,
      numReviews: 100,
      isFavorite: false
    },
    {
      id: 5,
      name: 'Fifth Product',
      price: 94.99,
      rating: 5,
      description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://demo.api2cart.com/opencart/image/cache/data/hp_1-228x228.jpg',
      inStock: true,
      numReviews: 100,
      isFavorite: false
    },
    {
      id: 6,
      name: 'Sixth Product',
      price: 54.99,
      rating: 4.6,
      description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://demo.api2cart.com/opencart/image/cache/data/hp_1-228x228.jpg',
      inStock: true,
      numReviews: 100,
      isFavorite: false
    },
  ],
  selectedProduct: null,
};

export default function changeState(state = initial_state, action: ActionInterface): AppStoreState {
  switch (action.type) {
    case ActionTypes.SET_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case ActionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case ActionTypes.ADD_TO_FAVORITES:
      return {
        ...state, products: state.products.map(item => {
          if (item.id === action.payload) {
            return { ...item, isFavorite: true };
          }
          return item;
        })
      };
    case ActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state, products: state.products.map(item => {
          if (item.id === action.payload) {
            return { ...item, isFavorite: false };
          }
          return item;
        })
      };
    case ActionTypes.SET_SELECTED_ITEM:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
}
