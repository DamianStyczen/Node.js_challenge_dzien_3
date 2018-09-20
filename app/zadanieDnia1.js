// //Twój kod
const fs = require("fs");
const crypto = require("crypto");
const path = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {

    if(err === null){
        console.log(data);
        console.log(crypto.createHmac("sha256", data).digest("hex"));
    }
    else{
        console.log("Błąd odczytu pliku.", err);
    }
})
