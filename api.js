// exports.getPost = (req, res) =>{
//    res.send('Hello Express ..!!')
// };

//-----------------------------

// const express = require("express");
// const postController = require("./controller/postController");
// const router = express.Router();
// router.get('/', postController.getPost);
// module.exports = router;
//-----------------------------------------------------------------

const express = require("express");
const postController = require("./controller/postController");
const router = express.Router();
router.get('/', postController.getJson);
module.exports = router;
