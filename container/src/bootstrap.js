import { mount as cartMount } from 'cart/CartShow';
import { mount as productsMount } from 'products/ProductsIndex';


console.log('Container!');
// cart mount
const cartElement = document.querySelector('#my-cart')
cartMount(cartElement)
// product mount
const productsElement = document.querySelector('#my-products')
productsMount(productsElement)