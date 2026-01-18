



const express = require("express");
const router = express.Router();
const { registerController, loginController, logoutController, authMiddleware } = require("../../controllers/auth-controller/registration");



router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/auth", authMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "User is authenticated",
        user: req.user
    })
});

module.exports = router;
