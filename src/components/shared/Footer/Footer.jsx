import React from 'react'
import "./Footer.css"
 

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row" id="div__row-footer">
                    {/* <h3>Footer</h3>  */}
                    {/* col1 */}
                    <div className="col">
                        <h5>Sobre a Bookstore </h5>
                        <ul className="list-unstyled">
                            <li> Quem somos </li>
                            <li> Parceiros </li>
                            <li> Cupons de descontos</li>
                        </ul>
                    </div>
                    {/* col2 */}
                    <div className="col">
                        <h5>Atendimento ao Cliente</h5>
                        <ul className="list-unstyled">
                            <li> Fale conosco </li>
                            <li> Entrega e devolução </li>
                            <li> Perguntas e respostas </li>
                        </ul>
                    </div>
                    {/* col3 */}
                    <div className="col">
                        <h5>Nossas Políticas</h5>
                        <ul className="list-unstyled">
                            <li> Políticas de entrega</li>
                            <li> Política de Privacidade </li>
                            <li> Política de Vendas </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="row">
                    <hr />
                </div> */}
                <div className="row">
                    <p className="col-p">
                        &copy; {new Date().getFullYear()} BOOKS | Todos os direitos reservados | Termos de serviços | Privacidade
                    </p>
                </div>
            </div>           
        </div>
    )
}

export default Footer
