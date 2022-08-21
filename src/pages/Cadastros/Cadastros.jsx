import React from "react";

import {Link} from "react-router-dom";
import { Icon } from '@iconify/react';
import './Cadastros.css'

function Cadastros(){
    return(
        <>
   
        <div className='main'>
        <div className="center">
                <div className="center-Cadastros">
                   
                        <div className='menu'>
                            <div className="logoCadastros">
                                <h3 title="Home"><Link className="link" to="/Home"><Icon icon="bx:home-alt" height="30" inline={true} />Livro&Café</Link></h3>
                            </div>
                           
                        </div>
                       
            </div>
         </div>   
    </div>
                <div className="contaienerCadastros">
                    <div className="Cadastros">
                        <div>
                            <input 
                                type="text"
                                placeholder="título"
                            />
                            <input
                                type="text"
                                placeholder="autor"
                            />
                            <input
                                type="text"
                                placeholder="editora"
                            />
                            <input
                                type="text" 
                                placeholder="url da imagem do livro"
                            />
                            <input
                                type="number"
                                placeholder="ano de publicação"
                            />
                            <button >confirmar</button>
                        </div>
                    </div>
                    </div>
                    
        </>
    )
}

export default Cadastros;