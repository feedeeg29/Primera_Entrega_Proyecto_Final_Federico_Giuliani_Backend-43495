const products = require ("../Products/products");

class Actions {
        static getAll(){
        return products.productsList();
        }
        static getOne(id){
        return products.getProduct(id);
        }
        static add(product){
        return products.getProduct(product);
        }
        static update(id, newContent){
        return products.updateProduct(id, newContent);
        }
        static delete(id){
        return products.deleteProduct(id);
        }
      // Cart methods
        static createCart(prods){
        return cart.createCart(prods).id;
        }
    
        static deleteCart(id){
        return cart.deleteCart(id);
        }
    
        static async getCartProducts(id){
        const carrito = await cart.getCart(id);
        const array = carrito.products
        return array;
        }
    
        static async addToCart(id, productId){
        const product = await this.getOne(productId);
        return cart.addToCart(id, product);
        }
    
        static deleteFromCart(id, productId){
        return cart.deleteFromCart(id, productId);
        }    
}
module.exports = Actions;