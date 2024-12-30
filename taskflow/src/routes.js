import { Router } from "express";
const router = Router();
import { readUser, createUser, readUserById, updateUser, deleteUser, login } from "./controller/userController.js";
import auth from "./middleware/auth.js";

router.get("/user", auth, readUserById)
router.get("/user", readUser)
router.post("/user", createUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

router.post("/login", login);


router.get("/", (req, res)=>{
    res.send("Funciona!!");
})

export default router;
