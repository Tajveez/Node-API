const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) console.log(err);
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chuck) => {
        body += chuck.toString();
      });

      req.on("end", async () => {
        resolve(body);
      });
    } catch (e) {
      reject(e);
    }
  });
}
module.exports = {
  writeDataToFile,
  getPostData,
};
