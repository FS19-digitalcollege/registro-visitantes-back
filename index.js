const express = require('express');
const cors = require('cors');
const port = 8080;

const visitanteRoute = require('./src/routes/visitanteRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Api do Museu");
});

app.use('/visitantes', visitanteRoute);

app.all('*', (req, res) => {
    res.send('Rota não encontrada');
})

app.listen(port, () => {
    console.log(`Servidor de pé: http://localhost:${port}`);
});