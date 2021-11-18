import React from 'react'
import { Link } from 'react-router-dom'
import ProductBody from './ProductsComponents/ProductBody'
import ProductsMenu from './ProductsComponents/ProductsMenu'
import './Products.css'

function Products() {
    return (
        <div>
            <div className="topo">
                <div className="faixa-topo">
                    <div className="faixa">
                        <div className="siga-a-vila">
                            <p>Siga</p>
                            <div className="redes-sociais-topo">
                                <Link to="#" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.747" viewBox="0 0 12.747 12.747">
                                        <path d="M12.043,0H.7A.7.7,0,0,0,0,.7v11.34a.7.7,0,0,0,.7.7h6.1V7.812H5.147V5.888H6.808V4.469A2.318,2.318,0,0,1,9.282,1.926,13.778,13.778,0,0,1,10.767,2V3.722H9.748c-.8,0-.953.38-.953.937V5.887H10.7l-.249,1.924H8.795v4.937h3.248a.7.7,0,0,0,.7-.7V.7a.7.7,0,0,0-.7-.7Z" transform="translate(0 -0.001)" fill="#5c5c5c"></path>
                                    </svg>
                                </Link>
                                <Link to="#" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.147" height="13.147" viewBox="0 0 13.147 13.147">
                                        <g transform="translate(0 0)">
                                            <path d="M9.231,0H3.917A3.921,3.921,0,0,0,0,3.917V9.231a3.921,3.921,0,0,0,3.917,3.917H9.231a3.921,3.921,0,0,0,3.917-3.917V3.917A3.921,3.921,0,0,0,9.231,0Zm2.594,9.231a2.594,2.594,0,0,1-2.594,2.594H3.917A2.594,2.594,0,0,1,1.323,9.231V3.917A2.594,2.594,0,0,1,3.917,1.323H9.231a2.594,2.594,0,0,1,2.594,2.594Z" transform="translate(0 0)" fill="#5c5c5c"></path>
                                            <path d="M136.4,133a3.4,3.4,0,1,0,3.4,3.4A3.4,3.4,0,0,0,136.4,133Zm0,5.478a2.078,2.078,0,1,1,2.078-2.078A2.078,2.078,0,0,1,136.4,138.478Z" transform="translate(-129.827 -129.827)" fill="#5c5c5c"></path>
                                            <ellipse cx="0.815" cy="0.815" rx="0.815" ry="0.815" transform="translate(9.165 2.384)" fill="#5c5c5c"></ellipse>
                                        </g>
                                    </svg>
                                </Link>
                                <Link to="#" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="13.838" height="13.951" viewBox="0 0 13.838 13.951"><path d="M8.271.008A6.922,6.922,0,0,0,2.443,10.061l-.735,3.566a.269.269,0,0,0,.326.316l3.494-.828A6.919,6.919,0,1,0,8.271.008ZM12.44,10.75A5.421,5.421,0,0,1,6.2,11.772l-.487-.242-2.142.508L4.02,9.848l-.24-.469a5.422,5.422,0,0,1,1-6.29A5.418,5.418,0,1,1,12.44,10.75Z" transform="translate(-1.69 0)" fill="#5c5c5c"></path><path d="M111.424,112.253l-1.34-.385a.5.5,0,0,0-.494.13l-.328.334a.488.488,0,0,1-.531.112,7.154,7.154,0,0,1-2.308-2.035.488.488,0,0,1,.039-.541l.286-.37a.5.5,0,0,0,.062-.507l-.564-1.275a.5.5,0,0,0-.78-.179,2.254,2.254,0,0,0-.872,1.33c-.1.939.308,2.123,1.83,3.544,1.759,1.642,3.168,1.859,4.085,1.637a2.254,2.254,0,0,0,1.2-1.045A.5.5,0,0,0,111.424,112.253Z" transform="translate(-101.148 -103.833)" fill="#5c5c5c"></path></svg></Link>
                            </div>
                        </div>
                        <div><Link to="#" target="_blank" rel="noreferrer"> Blog </Link></div>
                        <div><Link to="#" target="_blank" rel="noreferrer"> Livros </Link></div>
                        <div><Link to="/institucional/nossas-lojas" target="_blank" rel="noopener">
                Nossa Loja</Link></div>
                    </div>
                </div>
                <div className="meio-menu">
                    <div className="logo-header">
                        <h1>
                            <Link to="#" title="Livraria">
                                Bookstore
                            </Link>
                        </h1>
                    </div>
                    <div className="busca-desk">
                        <fieldset className="busca">
                            <input id="ftBox26840e439e2f4a7eb00400705d4cab3a" className="fulltext-search-box ui-autocomplete-input" type="text" size="20" autocomplete="off" aria-autocomplete="list" aria-haspopup="true"/>
                            <input id="ftBtn26840e439e2f4a7eb00400705d4cab3a" type="button" value="Buscar" class="btn-buscar"/>
                        </fieldset>
                    </div>
                    <div className="login"><Link to="/account"><svg xmlns="http://www.w3.org/2000/svg" width="21.194" height="19" viewBox="0 0 21.194 19"><path d="M28.7,30.9H7.5l.156-.59C8.75,26.179,8.9,26,15,22.524c-1.468-1.772-1.678-3.306-1.542-5.555.152-2.518,1.8-5.068,4.642-5.068s4.49,2.55,4.642,5.068a7.02,7.02,0,0,1-1.554,5.558l.117.069c5.8,3.4,6.149,3.608,7.236,7.715Zm-19.973-.94h18.75c-.86-3.159-1.258-3.393-6.646-6.555l-1.11-.652.4-.428c1.6-1.737,1.822-3.094,1.688-5.3-.125-2.08-1.438-4.185-3.7-4.185s-3.578,2.1-3.7,4.184c-.134,2.215.083,3.574,1.682,5.3l.4.434-.514.293C9.93,26.495,9.605,26.679,8.723,29.961Z" transform="translate(-7.501 -11.901)" fill="#5d5d5d"></path></svg><p>Login</p></Link></div>
                    <div className="favoritos"><Link to="/meus-favoritos"><svg xmlns="http://www.w3.org/2000/svg" width="22.455" height="19" viewBox="0 0 22.455 19"><g transform="translate(17.567 -236)"><g transform="translate(-17.567 236)"><path d="M146.007,251.965l-5.8-5.832c-.251-.314-2.352-2.383-2.634-2.665-1.1-1.1-2.038-1.944-2.038-3.7a4.691,4.691,0,0,1,.972-2.79,5.231,5.231,0,0,1,4.139-2.226,5.133,5.133,0,0,1,3.323,1.348,8.148,8.148,0,0,1,1.818,2.289,2.338,2.338,0,0,1,.219.376h.063a14.781,14.781,0,0,1,1.129-1.724,2.286,2.286,0,0,0,.282-.314,6.335,6.335,0,0,1,1.975-1.536,4.829,4.829,0,0,1,5.079.658,5.274,5.274,0,0,1,1.724,2.383,4.333,4.333,0,0,1-.157,3.323,11.441,11.441,0,0,1-1.913,2.195c-1.38,1.38-2.728,2.728-4.107,4.076-.188.188-.314.345-.47.533C149.237,248.736,146.1,251.809,146.007,251.965ZM151.275,234h.439a5.775,5.775,0,0,1,3.386,1.348l1.035,1.1a5.044,5.044,0,0,1,.533.878,5.464,5.464,0,0,1,.6,2.195v.408a4.608,4.608,0,0,1-.22,1.285,7.932,7.932,0,0,1-.5,1.035,30.034,30.034,0,0,1-2.947,3.1c-.251.282-.5.533-.752.784-.408.439-6.71,6.678-6.835,6.866-.125-.094-2.069-2.069-2.257-2.226a1.228,1.228,0,0,0-.251-.314l-6.96-6.992a7.3,7.3,0,0,1-.815-.878,4.95,4.95,0,0,1-.878-3.449,5.8,5.8,0,0,1,.345-1.317,6.333,6.333,0,0,1,3.355-3.386,5.049,5.049,0,0,1,2.351-.408,6.408,6.408,0,0,1,4.7,2.728l.439.6a1.227,1.227,0,0,0,.251-.314,9.929,9.929,0,0,1,1.442-1.6l.47-.345a5.051,5.051,0,0,1,1.411-.752A4.777,4.777,0,0,1,151.275,234Z" transform="translate(-134.808 -234)" fill="#5d5d5d" fill-rule="evenodd"></path></g></g></svg><p>Favoritos</p></Link></div>
                    <div className="carrinho">
                        <a href="/checkout/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.764" height="31.361" viewBox="0 0 22.764 31.361">
                                <g transform="translate(-4.934 6)">
                                    <path d="M90.223,10.082l-3.587,0V5.1a5.1,5.1,0,0,0-10.2,0V10.08H72.892a.558.558,0,0,0-.53.474c-.019.185-2.159,20.034-2.183,20.279a.556.556,0,0,0,.56.528H92.385a.559.559,0,0,0,.558-.559c-.023-.214-2.161-20.064-2.183-20.264A.554.554,0,0,0,90.223,10.082ZM77.551,5.1a3.984,3.984,0,0,1,7.968,0V10.08H77.551ZM71.364,30.243l.042-.387c.308-2.882,1.171-10.884,1.8-16.712l.21-1.947h3.02v2.167a.558.558,0,0,0,1.116,0V11.2h7.968v2.167a.558.558,0,0,0,1.117,0V11.2h3.072L91.76,30.243h-20.4Z" transform="translate(-65.245 -6)" fill="#5c5c5c"></path>
                                    </g>
                                    </svg>
                                    <div className="portal-totalizers-ref">
                                        <div className="amount-items-in-cart">
                                            <div className="cartInfoWrapper">
                                                <span className="title">
                                                    <span id="MostraTextoXml1">Resumo do Carrinho</span>
                                                </span>
                                                <ul className="cart-info">
                                                    <li class="amount-products">
                                                        <strong><span id="MostraTextoXml2">Total de Produtos:</span></strong> 
                                                        <em class="amount-products-em">0</em>
                                                    </li>
                                                    <li className="amount-items"><strong><span id="MostraTextoXml3">Itens:</span></strong> <em class="amount-items-em">0</em></li><li class="amount-kits"><strong><span id="MostraTextoXml4">Total de Kits:</span></strong> <em class="amount-kits-em"></em>
                                                    </li>
                                                    <li className="total-cart"><strong><span id="MostraTextoXml5">Valor Total:</span></strong> <em class="total-cart-em">R$ 0,00</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </div>
                <ProductsMenu/>
                <main>
                    <ProductBody/>
                </main>
            </div>
        </div>
    )
}

export default Products
