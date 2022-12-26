import { Contenedor } from '../Container/ContainerMongo';
const contenedor = new Contenedor(uri);

async function createProduct(product) {
    await contenedor.save(product);
}

async function readProduct(id) {
    const product = await contenedor.findOne({ _id: id });
    return product;
}

async function updateProduct(product) {
    await contenedor.update(product);
}

async function deleteProduct(id) {
    await contenedor.delete(id);
}
