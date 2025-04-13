const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "files");
const destDir = path.join(__dirname, "files_copy");

function copyFolder(src, dest) {
  fs.mkdirSync(dest);
  const files = fs.readdirSync(src);

  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    fs.copyFileSync(srcPath, destPath);
  }
}

try {
  if (!fs.existsSync(sourceDir) || fs.existsSync(destDir)) {
    throw new Error("FS operation failed");
  }

  copyFolder(sourceDir, destDir);
  console.log("Papka nusxalandi");
} catch (err) {
  console.error(err.message);
}
