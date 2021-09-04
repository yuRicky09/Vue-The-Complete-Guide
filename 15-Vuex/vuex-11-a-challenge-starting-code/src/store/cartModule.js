export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  actions: {
    // addProductToCart(context, productData) {
    //   const productInCartIndex = context.state.cart.items.findIndex(
    //     ci => ci.productId === productData.id
    //   );
    //   if (productInCartIndex >= 0) {
    //     context.state.cart.items[productInCartIndex].qty++;
    //   } else {
    //     const newItem = {
    //       productId: productData.id,
    //       title: productData.title,
    //       image: productData.image,
    //       price: productData.price,
    //       qty: 1
    //     };
    //     context.state.cart.items.push(newItem);
    //   }
    //   context.state.cart.qty++;
    //   context.state.cart.total += productData.price;
    //   context.commit('addProductToCart')
    // }
  },
  mutations: {
    addProductToCart(state, productData) {
      const productInCartIndex = state.cart.items.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },
    removeProductFromCart(state, prodId) {
      const productInCartIndex = state.cart.items.findIndex(
        cartItem => cartItem.productId === prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.total.toFixed(2);
    }
  }
};
