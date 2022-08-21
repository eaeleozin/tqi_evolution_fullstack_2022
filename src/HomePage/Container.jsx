import React from 'react';
import {Link} from "react-router-dom";

function Container(){
    return(
        <>
        
         <div className="container">
                            <div className="card-container" >
                                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio nihil, culpa repudiandae atque facilis eveniet neque consequuntur quas dolorem aliquam maiores nulla ullam optio fugit voluptatibus soluta? Nulla, ipsum. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio nihil, culpa repudiandae atque facilis eveniet neque consequuntur quas dolorem aliquam maiores nulla ullam optio fugit voluptatibus soluta? Nulla, ipsum.
                                </div>
                                <div className="card">
                                    <div className="card-wrapper" >
                                        <h2>Comprar</h2>                                       
                                        <p>Confira Nossos Livros!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-container">
                                <div className="card">
                               <div className="card-wrapper">
                                        <h2 >Vender</h2> 
                                        <p>Vender</p>
                                    </div>
                                </div>
                                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio nihil, culpa repudiandae atque facilis eveniet neque consequuntur quas dolorem aliquam maiores nulla ullam optio fugit voluptatibus soluta? Nulla, ipsum. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio nihil, culpa repudiandae atque facilis eveniet neque consequuntur quas dolorem aliquam maiores nulla ullam optio fugit voluptatibus soluta? Nulla, ipsum.
                                    <button><Link className="link" to="/Sale">Vender</Link></button>
                                </div>
                            </div>

                            <div className="card-container">
                                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio nihil, culpa repudiandae atque facilis eveniet neque consequuntur quas dolorem aliquam maiores nulla ullam optio fugit voluptatibus soluta? Nulla, ipsum. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio nihil, culpa repudiandae atque facilis eveniet neque consequuntur quas dolorem aliquam maiores nulla ullam optio fugit voluptatibus soluta? Nulla, ipsum.
                                </div>
                                <div className="card">
                                    <div className="card-wrapper">
                                        <h2>Mais</h2>
                                        <p>Ou mais do meu dia-a-dia </p>
                                    </div>
                                </div>
                            </div>
                        </div>

        </>
    );
}

export default Container