import { EstiloQuadro } from "./styles";
import Titulo from "../Titulo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Paragrafo from "../Paragrafo";
import { useNavigate } from "react-router-dom";
import ModalAtualizarQuadro from "../ModalAtualizarQuadro";
import { useEffect, useState } from "react";

const Quadro = ({quadroId, nome, descricao}) => {

    const changeurl = useNavigate();
    const [modalAtualizaOpen, setAtualizaOpen] = useState(false);
    
    const closeModal = () =>{
        setAtualizaOpen(false)
    } 

    const goTask = () => {
        changeurl("/task" , {state: {quadroId}}); //chamando a página das tasks e mandando o quadroId
    };

    const deleteQuadro = async() => {
        const resp = confirm("Tem certeza que deseja excluir Todo o quadro? As listas e Tarefas atreladas a ela também serão excluidas.");
        if(resp){
            
                try {
                    const response = await fetch(`http://localhost:3000/quadros/${quadroId}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
        
                    if (response.ok) {
                        alert("Quadro Deletado com sucesso!");
                        window.location.reload();
                    } else {
                        const data = await response.json();
                        alert(`Erro ao deletar Quadro: ${data.message}`);
                    }
                } catch (error) {
                    console.error("Erro ao deletar Quadro:", error);
                    alert("Erro ao deletar a Quadro.");
                }
        }else{
            
        }
    }

    return (
        <>
            <EstiloQuadro   >
            <div style={{display:'flex', alignItems:'center', justifyContent: "space-between",  MarginBottom:'8px', paddingBottom: "8px", borderBottom: "2px solid #949494"  }}>
            <Titulo  fontSize={30}>{nome}</Titulo>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", columnGap: "1rem"}}>
            <div style={{cursor: "pointer"}} ><FontAwesomeIcon onClick={() =>setAtualizaOpen(true) } style={{cursor: "pointer"}} icon={faPen} color="#54CDD0"/></div>
            <div style={{cursor: "pointer"}}><FontAwesomeIcon onClick={() => deleteQuadro()} icon={faTrash} color="#e14c4c"/></div>
            </div>
            
            </div >
            <div onClick={() => goTask()} style={{display:'flex', alignItems:'start', height:'100%', marginTop: "1rem", cursor: "pointer"}}>
            <Paragrafo cursor="pointer" fontSize={18}>{descricao}</Paragrafo>
            </div>
            </EstiloQuadro>
            <ModalAtualizarQuadro isOpen={modalAtualizaOpen} quadroId={quadroId} closeModal={closeModal}></ModalAtualizarQuadro>
        </>
        
    );
};

export default Quadro;