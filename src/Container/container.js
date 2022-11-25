const fs = require('fs');

class Container{
    constructor(file){
        this.file = file;
    }
    //metodo de guardado
    async save(object){
        try{
            if(fs.existsSync(this.file)){
                const data = await fs.promises.readFile(this.file);//leer archivo
                const array = JSON.parse(data); // pasar archivo a JSON
                object.id = array.length + 1; // asignar id
                array.push(object);//push objeto al file(en JSON)
                await fs.promises.writeFile(this.file, JSON.stringify(array)) // convierto en string al array
                console.log('Objeto Guardado con el id' + object.id);
            }else{
                object.id = 1;
                await fs.promises.writeFile(this.file, JSON.stringify([object]))
                console.log('Objeto Guardado con el id' + object.id);
            }
        } catch(err){
            throw new Error(err);
        }
    }
    //metodo de actualizado
    async update(product){
        try{
            if(fs.existsSync(this.file)){
                const data = await fs.promises.readFile(this.file);//leer archivo
                const array = JSON.parse(data); // pasar archivo a JSON
                const index = product.id - 1; //resto 1 para tomar la posición del producto
                array[index] = product; //paso la posición del producto en el array
                await fs.promises.writeFile(this.file, JSON.stringify(array)); //convierto en string al array
                console.log('producto actualizado id: ' + product.id);
            }else{
                throw new Error('Imposible actualizar, producto no encontrado')
            }
        }catch(err){
            throw new Error(err)
        }
    }
    // metodo de borrado
    async delete(id) {
        try {
            if (fs.existsSync(this.file)) {
            const data = await fs.promises.readFile(this.file);//leo el archivo
            const array = JSON.parse(data); // parseo el archivo
            const index = array.findIndex(p => p.id === id); //busco posicion del objeto
            array.splice(index, 1);//borrar
            await fs.promises.writeFile(this.file, JSON.stringify(array));
            console.log('El objeto con el id: ' + id + 'ha sido elimiado');
            } else {
            throw new Error('No existe el archivo');
                }
        } catch (err) {
            throw new Error(err);
        }
        }
}
module.exports = Container;