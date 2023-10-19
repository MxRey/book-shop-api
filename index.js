const express = require('express');

const app = express()
const port = 4444

app.get('/', (req, res) => {
    res.json({ message: "Ini JSON" });
})

// POST method
app.post('/', (req, res) => {
    res.send('Ini POST')
})

// PUT method
app.put('/estea', (req, res) => {
    res.send('Aku suka ice tea')
})

// DELETE method
app.delete('/estea', (req, res) => {
    res.send('Delete kang')
});

 // representasi data dari database
 const data_users = [
    { id: 1, name: "Azka Dapin", alamat: "Nagarta" },
    { id: 2, name: "Ghani Rasya", alamat: "Surakarta" },
    { id: 3, name: "Hana Zain", alamat: "Jakarta" },
    { id: 4, name: "Ibrahim", alamat: "Bandung" },
];

app.get("/users", (req, res) => {
    //mendapatkan data dari database
    const data = data_users;

    //memberikan respon json data
    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});

// jadi dari 1 dst
app.get("/users/:id", (req, res) => {
    // get data dari parameter
    let id = parseInt(req.params.id);

    // get data dari database
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
        status: 200,
        data: user,
        };
    }
    res.json(result);
});

app.get("/users/:id", (req, res) => {
    // get data dari parameter
    let id = parseInt(req.params.id);

    // get data dari database
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
        status: 200,
        data: user,
        };
    } else {
        res.status(404).json({ error: "User not found" });
    }
    res.json(result);
});

app.listen(port, () => console.log(`Server running on port ${port}`))
