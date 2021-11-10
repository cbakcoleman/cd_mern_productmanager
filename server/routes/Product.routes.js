// 6. CREATE ROUTES
const Product = require("../controllers/Product.controllers");
const {findAllProducts, findOneProduct, createNewProduct, updateProduct, deleteProduct} = require("../controllers/Product.controllers");

module.exports = (app) => {
    app.get("/api/products", findAllProducts);
    app.get("/api/products/:id", findOneProduct);
    app.post("/api/products/new", createNewProduct);
    app.put("/api/products/:id", updateProduct);
    app.delete("/api/products/delete/:id", deleteProduct);
}