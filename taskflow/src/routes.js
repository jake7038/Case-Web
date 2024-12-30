import { Router } from "express";
const router = Router();
import { readUser, createUser, readUserById, updateUser, deleteUser } from "./controller/userController.js";

router.get("/user/:id", readUserById)
router.get("/user", readUser)
router.post("/user", createUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)




router.get("/", (req, res)=>{
    console.log("funcionaaaaa");
    res.send("Funciona!!");
})

export default router;
