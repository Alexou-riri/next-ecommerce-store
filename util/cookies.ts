import Cookies from 'js-cookie';

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

type AddedHouse = {
  id: string;
  items: number;
};

type AddedHouses = AddedHouse[];

export function setParsedCookie(key: string, value: AddedHouses) {
  Cookies.set(key, JSON.stringify(value));
}

const newCookie = [{ id: '', items: 0 }];

// setParsedCookie('addedHouse', newCookie);

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

// export function getProductCart() {
//   const productCart = Cookies.getJSON('productCart') || [];

//   return productCart;
// }

// export function addProduct(id) {
//   const productCart = getProductCart();
//   const newProductCart = [...productCart, { id: id }];

//   Cookies.set('productCart', newProductCart);
//   return newProductCart;
// }

// export function deleteProduct(id) {
//   const cart = getProductCart();
//   const newProductCart = cart.filter((item) => item.id !== id);

//   Cookies.set('productCart', newProductCart);
//   return newProductCart;
// }

// export function getCartFromCookies() {
//   const cart = Cookies.getJSON('cart') || [5];
//   return cart;
// }

// export function addAmountToCartInCookie(id, quantity) {
//   // the id and quantity are passed to the function
//   // get the old cart from the Cookies
//   const cart = getCartFromCookies();

//   let newCart = [];
// if the id in the cart is the id argument passed in, increase the amount by the quantity passed in:
// first check if the cart exists
// to make the new cart, map over existing cart, and if the id is the same as passed in, increase amount by the quantity
// if (cart.length !== 0) {
//   console.log(cart);
//   newCart = cart.map((item) =>
//     item.id !== id ? item : { ...item, amount: (amount += quantity) },
//   );
// } else {
//   newCart.push({ id: id, amount: quantity });
// }

// set the Cookies to the new cart and return new cart
//   Cookies.set('cart', newCart);
//   return newCart;
// }

// export function removeItemfromCartInCookies(id) {
//   const cart = getCartFromCookies();
//   let newCart;
//   // do the stuff to remove the item here
//   Cookies.set('cart', newCart);
//   if (cart.length !== 0) {
//     newCart = cart.filter((item) => item.id !== id);
//   } else {
//     newCart = cart;
//   }
//   return newCart;
// }

// export function stringifyCookieValue(value) {
//   return JSON.stringify(value);
// }
