import { Router } from "express";
import { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo  } from "./back/controller/userController.js";
import { createQuadro, readQuadros, updateQuadro, deleteQuadro  } from "./back/controller/quadroController.js";
import auth from "./back/middleware/auth.js";


const router = Router();
router.get("/user/:id", auth, readUserById)
router.get("/user",  readUser)
router.get("/user/info", readUserInfo) //retorna todas as informações do usuario
router.post("/user", createUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

router.post("/login", login);


//rotas do quadro, somente usuarios autenticados podem criar um quadro

router.post("/quadros", auth, createQuadro); //status: postman ok, integração ñ
router.get("/quadros", auth, readQuadros);  //status: postman ok, integração ñ / ele retorna todos os quadros do usuario
router.patch("/quadros/:id", auth, updateQuadro); //status: postman ñ, integração ñ
router.delete("/quadros/:id", auth, deleteQuadro); //status: postman ok, integração ñ



router.get("/", (req, res)=>{
    res.send("Funciona!!");
})

export default router;
