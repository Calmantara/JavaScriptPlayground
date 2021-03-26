const app = require('express')();

app.get(`/v1`, (req, res) => {
    res.statusCode=200;
    res.send(`Hello from docker port ${process.env.PORT||3000}`);
});

app.get(`/v1/admin`, (req, res) => {
    res.statusCode=200;
    res.send(`Hello from docker port ${process.env.PORT||3000} for admin`);
});

app.listen(process.env.PORT||3000, ()=> {
    console.info(`Listen to port ${process.env.PORT||3000}`);
})

