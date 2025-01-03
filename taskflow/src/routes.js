import { Router } from "express";
const router = Router();
import { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo  } from "./back/controller/userController.js";
import auth from "./back/middleware/auth.js";

router.get("/user/:id", auth, readUserById)
router.get("/user",  readUser)
router.get("/user/info", readUserInfo) //puxa as informações do usuário
router.post("/user", createUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

router.post("/login", login);


router.get("/", (req, res)=>{
    res.send("Funciona!!");
})

export default router;
