const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/style.css')));

app.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, "/index.html")))
// app.get('/', (req, res)=>
//     res.sendFile(path.join(__dirname, "/style.css")))

    app.post("/", (req, res)=>{
        let n1 = Number(req.body.n1);
        let n2 = Number(req.body.n2);
        let operation = req.body.operation;
        let result;
    
        switch (operation) {
            case 'add':
                result = n1 + n2;
                break;
            case 'subtract':
                result = n1 - n2;
                break;
            case 'multiply':
                result = n1 * n2;
                break;
            case 'divide':
                if (n2 === 0) {
                    result = 'Cannot divide by zero';
                } else {
                    result = n1 / n2;
                }
                break;
            default:
                result = 'Invalid operation';
        }
    
        // Send the result back to the client
        res.send(`Result: ${result}`);
    });
app.listen(5000, ()=> console.log("Our system is working"))