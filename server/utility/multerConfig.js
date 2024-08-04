const multer = require("multer");

// const storage = new Multer.memoryStorage();
// const upload = Multer({
//   storage,
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
module.exports = upload;
