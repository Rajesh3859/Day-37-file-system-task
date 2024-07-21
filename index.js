const express = require("express"); 
const fs = ("node:fs");
const dotenv = ("dotenv");

const app = express();
app.use(express.json());

const PORT = process.env.PORT; 

 
app.get("/", function (request, response) {
    response.send(`Welcome to Files. 
    To create file :/createfile;
    read file: /getfiles`);
});


app.get("/createfile", function (request, response) {
  
    const dateFunction = () => {
        const timeStamp = new Date().toString();
        fs.writeFile(`./Files/current-date-time.txt`, timeStamp, (err) => {
            if (err) throw err;
            else {
                console.log("File Created Successfully")
            }
        })
    }
    response.send(dateFunction());
})


app.get("/getfiles", function (request, response) {
    fs.readdir("./Files/", (err, files) => {
        if (files.length === 0) {
            response.send("Oops! It looks like this folder is empty.")
        }
        else {
            const myJSON = JSON.stringify(files);
            response.send(myJSON);
        }
    })
});


app.listen(PORT, () => console.log(`The server started in: ${PORT}`));