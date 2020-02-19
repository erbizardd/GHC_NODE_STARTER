const fs = require("fs");
exports.writeFile =(com, fileName) =>  {
    fs.writeFileSync(`results/${fileName}.resp`, `${com.pizza.length}\n${JSON.stringify(com.pizza.reverse()).slice(1, -1).replace(/,/g, " ")}`, 'utf8');
}
