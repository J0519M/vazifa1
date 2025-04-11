const os = require("os");

console.log("Yadro soni:", os.cpus().length);

os.cpus().forEach((cpu, index) => {
  console.log(`CPU ${index + 1}: ${cpu.model} - ${cpu.speed} MHz`);
});
