import "dotenv/config";
import jwt from "jsonwebtoken";

async function auth(req, res, next){

    try{
        const auth = req.headers.authorization;
        if(!auth){
            throw new Error("Sem token");
        }

        // Bearer << token >>
        const [,token] = auth.split(" ")

        jwt.verify(token, process.env.JWT_KEY, (erro, decoded)=>{
            if(erro){
                throw new Error("Token inválido: " + erro.message); 
            } else{
                req.id = decoded.id
            }
        })

        next();

    } catch(e){
        res.json({erro: e.message})
    }
}

export default auth; 