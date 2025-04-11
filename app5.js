const path = require("path");

const files = [
  "report.docx",
  "notes.txt",
  "data.json",
  "README.md",
  "script.js",
  "todo.txt",
];

const filtered = files.filter((file) => {
  const ext = path.extname(file); 
  return ext === ".txt" || ext === ".md";
});

console.log(filtered);
