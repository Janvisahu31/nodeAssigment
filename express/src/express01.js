import express from 'express';

const app = express();

app.use((req,res,next) => {
    console.log('Recieved request');
    console.log(req.method,req.url);
    res.send(`
        
<html>
<head>
    <title>Myserver</title>
</head>
<body>

    <form action="/submit-name" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <input type="submit" value="Submit">
    </form>

</body>
</html>`)

});

const port= 3000
app.listen(port);
console.log('Server listening at port',port);


