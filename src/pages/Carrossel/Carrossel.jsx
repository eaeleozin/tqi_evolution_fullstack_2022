import React from "react";


import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Carrossel.css'
import Carrossel2 from "./carrossel2";
import Carrossel3 from "./carrossel3";

function Carrossel() {
    const [data, setData] = useState([])
    const carousel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/books.json').then((response) => response.json()).then(setData)
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    
        if (!data || !data.length) return null;
     

    return (
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

            <p className="titleCarousel">George R.R. Martin</p>
            <div className="Carrossel" ref={carousel}>

                {data.map((item) => {
                    const { id, titulo, autor, editora, Preco, AnoPublicacao, image } = item;
                    return (
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={image} alt={titulo} />
                            </div>
                            <div className="info">
                                <span className="titulo">{titulo}</span>
                                <span className="preco">R${Preco}</span>
                                <span className="autor"> {autor}</span>{/* 
                                <span className="editora">editora: {editora}</span> */}
                                {/* <span className="AnoPublicacao">ano de publicação: {AnoPublicacao}</span> */}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="buttons" >
                <button onClick={handleLeftClick}><Icon icon="bx:chevron-left" height="35" /></button>
                <button onClick={handleRightClick}><Icon icon="bx:chevron-right" height="35" /></button>
            </div>
           

                
        <Carrossel2/>
        <Carrossel3/>
           
        </>
    );
}

export default Carrossel;