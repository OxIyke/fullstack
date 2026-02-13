const fs = require("fs");

const data = "a bunch of stufff";

fs.readFile("message.txt", 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});


