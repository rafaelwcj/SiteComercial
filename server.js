const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'dist/Site')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Site/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);
app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port);
});