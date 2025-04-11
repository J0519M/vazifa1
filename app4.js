const path = require("path");

const paths = [
  "C://Users//Admin//Desktop//project//..//index.js",
  "/home/user/docs/../images/photo.png",
  "./folder/subfolder/../../script.js"
];

paths.forEach((p) => {
  const normalized = path.normalize(p);
  console.log(Original: ${p});
  console.log(Normalized: ${normalized});

  if (normalized.includes("index.js")) {
    console.log("→ index.js - asosiy katalogda joylashgan\n");
  } else if (normalized.includes("photo.png")) {
    console.log("→ photo.png - images papkasida\n");
  } else if (normalized.includes("script.js")) {
    console.log("→ script.js - joriy papkada\n");
  }
});