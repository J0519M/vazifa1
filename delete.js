const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "files", "fileToRemove.txt");

try {
  if (!fs.existsSync(file)) {
    throw new Error("FS operation failed");
  }

  fs.unlinkSync(file);
  console.log("Fayl ochirildi.");
} catch (err) {
  console.error(err.message);
}
