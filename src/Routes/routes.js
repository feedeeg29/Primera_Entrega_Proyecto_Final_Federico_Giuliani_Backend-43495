const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controllers/controller");
const admin = true;

// traer productos por id
router.get("/api/productos/:id", (req, res) => {
    const {id} = req.params;
    Actions.getOne(id)
        .then(product => {
        res.status(200).json(product);
    }).catch(err => {
        console.error(err)})
});
// traer todos los productos
router.get("/api/productos", (req, res) => {
    Actions.getAll().then(data => {
        res.status(200).send(data)}).catch(err => {
        console.log(err)
    })
})

// Agregar producto
router.post("/api/productos", (req, res) => {
    res.send(admin ? Actions.add(req.body) : {error: 403, description: `<div><h1>Error 403</h1><br><h2> Forbidden<h2></div><br><img src="https://http.cat/403">`});
});

// Actualizar producto
router.put("/api/productos/:id", (req, res) => {
    const {id} = req.params
    const body = req.body
    res.send(admin ? Actions.update(id, body) : {error: 403, description: `<div><h1>Error 403</h1><br><h2> Forbidden<h2></div><br><img src="https://http.cat/403">`});
});

// Borrar producto
router.delete("/api/productos/:id", (req, res) => {
    res.send(admin ? Actions.delete(req.params.id) : {error: 403, description: `<div><h1>Error 403</h1><br><h2> Forbidden<h2></div><br><img src="https://http.cat/403">`});
})

// Crear un nuevo cart
router.post("/api/carrito/", (req, res) => {
    const prods = req.body;
    res.send(Actions.createCart(prods));
})

// Borrar del carrito
router.delete("/api/carrito/:id", (req, res) => {
    res.send(Actions.deleteCart(req.params.id));
})

// Traer todos los productos del carrito por id
router.get("/api/carrito/:id/productos", (req, res) => {
    Actions.getCartProducts(req.params.id)
    .then(data => { res.status(200).send(data) }).catch(err => { console.log(err) })
})

// Agregar producto al carrito por id
router.post("/api/carrito/:id/productos", (req, res) => {
    const {id} = req.params;
    const productId = req.body.id;
    res.send(Actions.addToCart(id, productId));
})

// Borrar un producto del carrito por id
router.delete("/api/carrito/:id/productos/:id_prod", (req, res) => {
    const {id, id_prod} = req.params;
    res.send(Actions.deleteFromCart(id, id_prod));
})

module.exports = router;