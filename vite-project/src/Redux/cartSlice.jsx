import { createSlice } from '@reduxjs/toolkit'
import products from '../compontnts/ProductCard/ProductImage';


const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    items: products,
    totalQuantity: 0,
    totalPrice: 0,
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    
  };



export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
     

      //wishlist page

      addToWishlist: (state, action) => {
        const existing = state.wishlist.find(item => item.id === action.payload.id);
        if (!existing) {
          state.wishlist.push(action.payload);
          localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        }
      },
      
      removeFromWishlist: (state, action) => {
        state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      },

      //Product Info Page
      
      addItemToCart: (state, action) => {
        let find = state.cart.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          state.cart[find].quantity += 1;
        } else {
          state.cart.push(action.payload);
        }

        const { id, size } = action.payload;
        const existingItem = state.cart.find(item => item.id === id && item.size === size);
      
        if (existingItem) {
          existingItem.quantity += action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }

        localStorage.setItem('cart', JSON.stringify(state.cart));

      },

     

        //Cart Page

      addToCart: (state, action) => {
        let find = state.cart.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          state.cart[find].quantity += 1;
        } else {
          state.cart.push(action.payload);
        }

        localStorage.setItem('cart', JSON.stringify(state.cart));

      },

      getCartTotal: (state) => {
        let { totalQuantity, totalPrice } = state.cart.reduce(
          (cartTotal, cartItem) => {           
            const { price, quantity } = cartItem;
            console.log(price, quantity);
            const itemTotal = price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
          },
          {
            totalPrice: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrice = totalPrice;
        state.totalQuantity = totalQuantity;
      },

      removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },

      increaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },

      decreaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },

      clearCart: (state) => {
        state.cart = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
        localStorage.setItem('cart', JSON.stringify([]));
      }

      },
    
});

export const { addItemToCart, addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart, addToWishlist, removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;