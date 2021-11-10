// 2. SET UP SERVER
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "product_manager_DB";

// MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

// DATABASE CONNECTION LINK 
require("./config/mongoose.config")(DB);
// CONNECT THE ROUTES
require("./routes/Product.routes")(app);

// START THE SERVER
app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`))