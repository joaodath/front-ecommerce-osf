import React from 'react'
import "./Footer.css"
 

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* <h3>Footer</h3>  */}
                    {/* col1 */}
                    <div className="col">
                        <h4>Título 1</h4>
                        <ul className="list-unstyled">
                            <li> 30 3702-2636 </li>
                            <li> Feira de Santana, Bahia </li>
                            <li> Rua: Souza Filho, 33 </li>
                        </ul>
                    </div>
                    {/* col2 */}
                    <div className="col">
                        <h4>Título 2</h4>
                        <ul className="list-unstyled">
                            <li> 21 2564-0246 </li>
                            <li> São Gonçalo, Rio de Janeiro </li>
                            <li> Rua: Alfredo Backer, 40 </li>
                        </ul>
                    </div>
                    {/* col3 */}
                    <div className="col">
                        <h4>Título 2</h4>
                        <ul className="list-unstyled">
                            <li> 11 31584-0378 </li>
                            <li> Santo André, São Paulo </li>
                            <li> Rua: Gilmar Franco, 57 </li>
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
