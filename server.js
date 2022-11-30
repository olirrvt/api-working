const express = require("express");
const cors = require("cors");
const usuarioRouter = require("./src/routes/usuarios.routes");
const app = express();
const port = 3015;
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(usuarioRouter);

app.listen(port, () => {
    console.log(`Backend server: running on port ${port}`);
});