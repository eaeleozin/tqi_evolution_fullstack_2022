import React from "react";
import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';

function Main() {
    return (
        <>
            <div className='main'>
                <div className="center">

                    <div className='menu'>
                        <div className="logo">
                            <h3><Link className="link" to="/Home">Livro&Café</Link></h3>
                        </div>

                        <div className="navegacao">
                            <div className="navComp">
                                <ul>
                                    <li><Link className="link" to="/Livros">Comprar</Link></li>
                                </ul>
                            </div>
                            <div className="navCad">
                                <ul>
                                    <li><Link className="link" to="/Cadastros">Cadastrar</Link></li>
                                </ul>
                            </div>

                        </div>
                        <a href="" title="carrinho" id='botao-carrinho'><Link className="link" to="/Sale"> <Icon icon="emojione-monotone:shopping-cart" width="30" height="30" hFlip={true} inline={true} /></Link></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main;