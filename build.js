const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");

const serverDir = path.join(__dirname, "server");
const clientDir = path.join(__dirname, "client");
const buildDir = path.join(serverDir, "build");
const prodDir = path.join(serverDir, "prod");
const publicDir = path.join(prodDir, "public");

console.log("rm build folder....");
fs.rmSync(buildDir, { recursive: true, force: true });

console.log("rm prod folder....");
fs.rmSync(prodDir, { recursive: true, force: true });

console.log("build server....");
console.log(execSync(`cd ${serverDir} && npm run build`).toString());

console.log("copy server...");
fs.copySync(buildDir, prodDir);

console.log("build client....");
console.log(execSync(`cd ${clientDir} && npm run build`).toString());

console.log("copy client...");
fs.copySync(path.join(clientDir, "build"), publicDir);
