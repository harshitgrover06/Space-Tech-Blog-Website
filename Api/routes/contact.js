const router = require("express").Router();
const Contact = require("../models/Contact");
//POST req
router.post("/feedback", async (req, res) => {
    const newFeedback = new Contact(req.body);
    try {
      const savedFeedback = await newFeedback.save();
      res.status(200).json(savedFeedback);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;