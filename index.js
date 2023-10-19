const express = require('express');

const app = express()
const port = 4444

app.get('/', (req, res) => {
    res.json({ message: "Selamat datang" });
})

app.post('/', (req, res) => {
    res.send('Selamat datang')
})

app.put('/kopi', (req, res) => {
    res.send('Selamat Datang')
})

app.delete('/kopi', (req, res) => {
    res.send('Selamat datang')
});

