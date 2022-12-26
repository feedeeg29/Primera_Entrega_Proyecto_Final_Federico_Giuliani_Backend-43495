const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";

class ContenedorMongo {
    constructor(uri) {
        this.uri = uri;
    }

    async save(object) {
        try {
            const client = new MongoClient(this.url, { useNewUrlParser: true });
            await client.connect();
            // Insert the object into the "products" collection
            await client.db("test").collection("products").insertOne(object);
            console.log('Se ha guardado el objeto con el id: ' + object._id);
            await client.close();
        } catch (err) {
            throw new Error(err);
        }
    }

    async update(product) {
        try {
            const client = new MongoClient(this.url, { useNewUrlParser: true });
            await client.connect();
            // Update the document with the matching "_id" field
            await client.db("test").collection("products").updateOne(
                { _id: product._id },
                { $set: product }
            );
            console.log('Se ha actualizado el objeto con el id: ' + product._id);
            await client.close();
        } catch (err) {
            throw new Error(err);
        }
    }

    async delete(id) {
        try {
            const client = new MongoClient(this.url, { useNewUrlParser: true });
            await client.connect();
            // Delete the document with the matching "_id" field
            await client.db("test").collection("products").deleteOne({
                _id: id
            });
            console.log('Se ha eliminado el objeto con el id: ' + id);
            await client.close();
        } catch (err) {
            throw new Error(err);
        }
    }
}
export default ContenedorMongo;

