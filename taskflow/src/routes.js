import { Router } from "express";
import { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo  } from "./back/controller/userController.js";
import { createQuadro, readQuadros, updateQuadro, deleteQuadro  } from "./back/controller/quadroController.js";
import { createLista, readListas, updateLista, deleteLista } from "./back/controller/listaController.js";
import auth from "./back/middleware/auth.js";


const router = Router();
router.get("/user/:id", auth, readUserById)
router.get("/user",  readUser)
router.get("/user/info", auth,readUserInfo) //retorna todas as informações do usuario
router.post("/user", createUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

router.post("/login", login);


//rotas do quadro, somente usuarios autenticados podem criar um quadro

router.post("/quadros", auth, createQuadro); //status: postman ok, integração ñ
router.get("/quadros", auth, readQuadros);  //status: postman ok, integração ñ / ele retorna todos os quadros do usuario
router.patch("/quadros/:id", auth, updateQuadro); //status: postman ñ, integração ñ
router.delete("/quadros/:id", auth, deleteQuadro); //status: postman ok, integração ñ


//rotas da lista, somente usuarios autenticados podem criar uma lista dentro de um quadro já criado

router.post("/quadros/:quadroId/listas", auth, createLista); //status: postman ok, integração ñ
router.get("/quadros/:quadroId/listas", auth, readListas);   //status: postman ñ, integração ñ 
router.patch("/listas/:id", auth, updateLista);             //status: postman ñ, integração ñ
router.delete("/listas/:id", auth, deleteLista);            //status: postman ñ, integração ñ



export default router;
