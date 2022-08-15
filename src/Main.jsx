import React from "react";

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Main(){
    return(
        <>
        <div className='main'>
                <div className="center">
                   
                        <div className='menu'>
                            <div className="logo">
                                <h3>Livro e Café</h3>
                            </div>
                            <div className="item-menu">
                                <a href="#">Login</a>
                            </div>
                           
                        </div>
                        <div>
                           <a href="" className='botao-carrinho'>
                           <ShoppingCartOutlinedIcon/>
                           </a>
                            </div>
                    </div>
                </div>   
        </>
    )
}

export default Main;