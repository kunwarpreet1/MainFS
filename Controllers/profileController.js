const express = require('express');
const router = express.Router();
const User = require('../Models/userModel.js'); // Adjust the path if needed

router.post('/update-profile', async (req, res) => {
  const userId = req.session.userId; // Ensure userId is stored in session
  const { fullname, phoneNumber, location } = req.body;

  if (userId) {
    try {
      const user = await User.findById(userId);
      if (user) {
        user.fullname = fullname || user.fullname;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.location = location || user.location;
        await user.save();
        res.redirect('/profile');
      } else {
        res.redirect('/login');
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      res.redirect('/profile');
    }
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
