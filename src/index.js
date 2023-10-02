const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());

app.use(rotas);

app.listen(3000, () => {
    console.log("🚀Server started on port 3000 🚀")
});