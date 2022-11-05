const express = require("express");
const usuarioRouter = require("./src/routes/usuarios.routes");
const app = express();
const port = 3015;
require("dotenv/config");

app.use(express.json());
app.use(usuarioRouter);

app.listen(port, () => {
    console.log(`Backend server: running on port ${port}`);
});