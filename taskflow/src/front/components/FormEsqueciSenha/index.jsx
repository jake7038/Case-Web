const FormEsqueciSenha = () => {
    return (
        <div>
            <form action="" className="grid">
                <div className="row mb-3 w-100">
                        <input type="email" className="form-control form-control-sm" placeholder="E-mail"></input>
                </div>
                <div className="row pt-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center">
                        <button type="submit" className="btn btn-primary w-50">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormEsqueciSenha;