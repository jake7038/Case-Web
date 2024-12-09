
//css feito com o bootstrap
const Form = () => (
    
    <form action="" className="grid">
    <div className="row mb-3 w-100">
    <input type="email" className="form-control form-control-sm" placeholder="Nome do usuário"/>
    </div>
    
    <div className="row mb-3 w-100 ">
    <input type="email" className="form-control form-control-sm" placeholder="E-mail"/>
    </div>
    

    
    <div className="row mb-3 w-100">
    <input type="email" className="form-control form-control-sm" placeholder="Senha"/>
    </div>

    <div className="row pt-5">
    <div className="col-md-3"></div>
    <div className="col-md-6 text-center">
    <button type="submit" className="btn btn-primary">Criar Conta</button>
    </div>
    <div className="col-md-3"></div>
    </div>
    
    
    </form>

)

export default Form;