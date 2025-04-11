const path = require("path");

const root = "/home/user/";
const subfolder = "projects/myapp/";
const filename = "server.js";

const fullPath = path.join(root, subfolder, filename);
console.log(fullPath);
