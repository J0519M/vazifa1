const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files", "fresh.txt");

try {
  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  fs.writeFileSync(filePath, "I am fresh and young");
  console.log("Fayl yaratildi");
} catch (err) {
  console.error(err.message);
}
