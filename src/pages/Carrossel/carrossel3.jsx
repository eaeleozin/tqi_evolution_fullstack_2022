import React from "react";


import { useEffect, useState, useRef } from "react";

import { Icon } from '@iconify/react';
import './Carrossel.css'

function Carrossel3() {
    const [data, setData] = useState([])
    const carousel3 = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/books3.json').then((response) => response.json()).then(setData)
    }, [])

    const handleLeftClick3 = (e) => {
        e.preventDefault()
        carousel3.current.scrollLeft -= carousel3.current.offsetWidth;
    }

    const handleRightClick3 = (e) => {
        e.preventDefault()
        carousel3.current.scrollLeft += carousel3.current.offsetWidth;
    }
    /* 
        if (!data || !data.length) return null;
     */

    return (
        <>
        <p className="titleCarousel">MARVEL</p>
            <div className="Carrossel" ref={carousel3}>

                {data.map((item) => {
                    const { id, titulo, autor, Preco, image } = item;
                    return (
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={image} alt={titulo} />
                            </div>
                            <div className="info">
                                <span className="titulo">{titulo}</span>
                                <span className="preco">R${Preco}</span>
                                <span className="autor"> {autor}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="buttons" >
                <button onClick={handleLeftClick3}><Icon icon="bx:chevron-left" height="35" /></button>
                <button onClick={handleRightClick3}><Icon icon="bx:chevron-right" height="35" /></button>
            </div>
        </>
    );
}

export default Carrossel3;