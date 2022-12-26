const products = require("../../Products/products");
const cart = require("../../Carts/carts");

class Actions extends ContenedorArchivo {
  // Product methods
  static async getAll() {
    const data = await products.getAllProducts()
    return data;
  }
  static async getOne(id) {
    const data = await products.getProduct(id);

  }
  static async add(product) {
    const data = products.addProduct(product);
    return data
  }
  static update(id, newContent) {
    const data = products.updateProduct(id, newContent);
    return data
  }
  static delete(id) {
    const data = products.deleteProduct(id);
    return data
  }
  // Cart methods
  static createCart(prods) {
    const data = cart.createCart(prods).id;
    return data
  }

  static deleteCart(id) {
    const data = cart.deleteCart(id);
    return data
  }

  static async getCartProducts(id) {
    const carrito = await cart.getCart(id);

    const array = carrito.products
    return array;
  }

  static async addToCart(id, productId) {
    const product = await this.getOne(productId);
    console.log(product);
    return cart.addToCart(id, product);
  }

  static deleteFromCart(id, productId) {
    return cart.deleteFromCart(id, productId);
  }
}

module.exports = Actions;

