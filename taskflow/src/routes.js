import { Router } from "express";
import multer from "multer";
import path from "path";
import { readUser, createUser, readUserById, updateUser, deleteUser, login, readUserInfo  } from "./back/controller/userController.js";
import { createQuadro, readQuadros, updateQuadro, deleteQuadro  } from "./back/controller/quadroController.js";
import { createLista, readListas, updateLista, deleteLista } from "./back/controller/listaController.js";
import {createTask, readTasks, updateTask, deleteTask} from "./back/controller/taskController.js"
import auth from "./back/middleware/auth.js";

const router = Router();

//salva localmente a foto de perfil
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const userId = req.params.id; //adicionar depois para ele pedir o token para fazer essa ação
        const folderPath = path.resolve(`./src/front/assets`);
        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${req.params.id}foto.jpeg`);
    },
});

//salva o caminho no banco
const upload = multer({ storage });
router.post("/user/:id/foto", upload.single("foto"), (req, res) => {
    const filePath = `src/front/assets/${req.params.id}foto.jpeg`;
    res.json({ message: "Foto salva com sucesso", path: filePath });
});


router.get("/user/:id", auth, readUserById)
router.get("/user",  readUser)
router.get("/user/info", auth,readUserInfo) //retorna todas as informações do usuario
router.post("/user", createUser)
router.patch("/user/:id",  updateUser)
router.delete("/user/:id", deleteUser)

router.post("/login", login);

//rotas do quadro, somente usuarios autenticados podem criar um quadro

router.post("/quadros", auth, createQuadro); 
router.get("/quadros", auth, readQuadros);  
router.patch("/quadros/:id", auth, updateQuadro); 
router.delete("/quadros/:id", auth, deleteQuadro); 


//rotas da lista, somente usuarios autenticados podem criar uma lista dentro de um quadro já criado

router.post("/quadros/:quadroId/listas", auth, createLista); //status: postman ok, integração ñ
router.get("/quadros/:quadroId/listas", auth, readListas);   //status: postman ok, integração ñ 
router.patch("/listas/:id", auth, updateLista);             //status: postman ok, integração ñ
router.delete("/listas/:id", auth, deleteLista);            //status: postman ok, integração ñ

//rotas da task

router.post("/listas/:lista_id/task", auth, createTask); //status: postman ok, integração ñ
router.get("/listas/:lista_id/tasks", auth, readTasks); //status: postman ok, integração ñ
router.patch("/tasks/:id", auth, updateTask); //status: postman ok, integração ñ
router.delete("/tasks/:id", auth, deleteTask); //status: postman ok, integração ñ

export default router;
