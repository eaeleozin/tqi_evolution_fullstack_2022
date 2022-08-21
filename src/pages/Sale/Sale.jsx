import React from "react";
import {Link} from "react-router-dom";
import './Sale.css'
import { Icon } from '@iconify/react';

function Sale(){
    return(
        <>
           <div className='main-Sale'>
                <div className="center-Sale">
                   
                        <div className='menu-Sale'>
                            <div className="logo-Sale">
                                <h3 title="Home"><Link className="link" to="/Home"><Icon icon="bx:home-alt" height="30" inline={true} />Livro&Café</Link></h3>
                            </div>
                           
                        </div>
                       

                       <div className="center">
                            <div className="MaisPopulares">
                                
                            </div>
                       </div>
                 </div>
         </div>   
        </>
    );
}

export default Sale;