const variable = require("fs");

//Create a file and write data to it
variable.writeFileSync("hello.txt", "Hello World!\n");
console.log("File written successfully\n");

//Read data from the file
const var2 = variable.readFileSync("hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Append data to the file
variable.writeFileSync("hello.txt", "Hello World! Again\n");

//Read data from the file
const var3 = variable.readFileSync("hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Deleting the file
variable.unlinkSync("hello.txt");
console.log("File deleted successfully\n");
