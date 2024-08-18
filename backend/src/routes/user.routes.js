import { Router } from "express";
import { loginUser, registerUser, logOutUser } from "../controllers/user.controllers.js";
import { createProductEntry, topSales, totalRevenue } from "../controllers/product.controller.js";
import { authJWT } from "../middleware/user.auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
const router=Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logOutUser)
router.route("/newProductEntry").post(
    upload.fields([
        {
            name:"productImage",
            maxCount:1
        }
    ])
    ,createProductEntry
)
router.route("/topSales").get(topSales)
router.route("/totalRevenue").get(totalRevenue)

export default router