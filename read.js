const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files", "fileToRead.txt");

try {
  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  const content = fs.readFileSync(filePath, "utf-8");
  console.log(content);
} catch (err) {
  console.error(err.message);
}
