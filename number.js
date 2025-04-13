const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "sonlar.txt");

function writeNumbers() {
  const numbers = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 1000)
  );
  const content = numbers.join("\n");
  fs.writeFileSync(file, content);
  console.log("100 ta son yozildi.");
}

function readNumbers() {
  if (!fs.existsSync(file)) {
    console.error("Fayl topilmadi.");
    return;
  }

  const data = fs.readFileSync(file, "utf-8");
  const arr = data.split("\n").map(Number);
  console.log(arr);
}

writeNumbers();
readNumbers();
