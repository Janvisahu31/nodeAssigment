import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
    res.
    end(`<h1>Hello ${req.body.name}</h1>`);
});

app.get('/', (req, res, next) => {
    console.log('Received request');
    console.log(req.method, req.url);
    res.send(`
<html>
<head>
    <title>Myserver</title>
</head>
<body>
    <form action="/user" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`);
});

const port = 3000;
app.listen(port, () => {
    console.log('Server listening at port', port);
});
