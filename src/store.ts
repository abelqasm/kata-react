import { create } from "zustand";
import { CartItem, Product } from "./models/models";

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  quantityHandler: (productId: number, quantity: number) => void;
}

const savedCart = localStorage.getItem("cart");

const useCartItemsStore = create<CartStore>((set) => ({
  cart: savedCart ? JSON.parse(savedCart) : [],
  addToCart: (product) =>
    set((store) => {
      const items: CartItem[] = store.cart;
      const index = items.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        items[index].quantity++;
      } else {
        items.push({ product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(items));
      return { cart: items };
    }),
  removeFromCart: (productId: number) =>
    set((store) => {
      const items: CartItem[] = store.cart.filter(
        (item) => item.product.id !== productId
      );

      localStorage.setItem("cart", JSON.stringify(items));
      return { cart: items };
    }),
  quantityHandler: (productId: number, quantity: number) =>
    set((store) => {
      const items = store.cart;
      const adjustableItem = items.find(
        (item) => item.product.id === productId
      );
      if (adjustableItem && quantity > 0) {
        adjustableItem.quantity = quantity;
      } else {
        store.removeFromCart(productId);
      }
      return { cart: items };
    }),
}));

export default useCartItemsStore;
