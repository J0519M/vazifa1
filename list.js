const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "files");

try {
  if (!fs.existsSync(dir)) {
    throw new Error("FS operation failed");
  }

  const files = fs.readdirSync(dir);
  files.forEach((f) => console.log(f));
} catch (err) {
  console.error(err.message);
}
