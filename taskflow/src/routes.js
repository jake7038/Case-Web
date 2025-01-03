import { Router } from "express";
import { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo  } from "./back/controller/userController.js";
import { createQuadro, readQuadros, updateQuadro, deleteQuadro  } from "./back/controller/quadroController.js";
import auth from "./back/middleware/auth.js";


const router = Router();
router.get("/user/:id", auth, readUserById)
router.get("/user",  readUser)
router.get("/user/info", readUserInfo) //puxa as informações do usuário
router.post("/user", createUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

router.post("/login", login);


//rotas do quadro, somente usuarios autenticados podem criar um quadro

router.post("/quadros", auth, createQuadro); 
router.get("/quadros", auth, readQuadros);  
router.patch("/quadros/:id", auth, updateQuadro); 
router.delete("/quadros/:id", auth, deleteQuadro); 



router.get("/", (req, res)=>{
    res.send("Funciona!!");
})

export default router;
