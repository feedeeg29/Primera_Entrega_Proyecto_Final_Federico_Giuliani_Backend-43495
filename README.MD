    <h1 style="text-align: center; color:bisque">Aspectos incluidos en el entregable</h1>
    <ul style="margin: 25px;"><b style="color:#fafafa; text-decoration-line: underline;"</b>
        <li style="color:antiquewhite; margin: 10px 0;">GET: '/:id?' - Me permite listar todos los productos disponibles
            ó un producto por su id (disponible para usuarios y administradores)</li>
        <li style="color:antiquewhite; margin: 10px 0;">POST: '/' - Para incorporar productos al listado (disponible
            para administradores)</li>
        <li style="color:antiquewhite; margin: 10px 0;">PUT: '/:id' - Actualiza un producto por su id (disponible para
            administradores)</li>
        <li style="color:antiquewhite; margin: 10px 0;">DELETE: '/:id' - Borra un producto por su id (disponible para
            administradores)</li>
    </ul>
    <ul style="margin: 25px;"><b style="color:#fafafa; text-decoration-line: underline; ">2. El router base
            '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:</b>
        <li style="color:antiquewhite; margin: 10px 0;">POST: '/' - Crea un carrito y devuelve su id.</li>
        <li style="color:antiquewhite; margin: 10px 0;">DELETE: '/:id' - Vacía un carrito y lo elimina.</li>
        <li style="color:antiquewhite; margin: 10px 0;">GET: '/:id/productos' - Me permite listar todos los productos
            guardados en el carrito</li>
        <li style="color:antiquewhite; margin: 10px 0;">POST: '/:id/productos' - Para incorporar productos al carrito
            por su id de producto</li>
        <li style="color:antiquewhite; margin: 10px 0;">DELETE: '/:id/productos/:id_prod' - Eliminar un producto del
            carrito por su id de carrito y de producto</li>
    </ul>