import React from "react";


import { useEffect, useState, useRef } from "react";

import { Icon } from '@iconify/react';
import './Carrossel.css'

function Carrossel2() {
    const [data, setData] = useState([])
    const carousel2 = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/books2.json').then((response) => response.json()).then(setData)
    }, [])

    const handleLeftClick2 = (e) => {
        e.preventDefault()
        carousel2.current.scrollLeft -= carousel2.current.offsetWidth;
    }

    const handleRightClick2 = (e) => {
        e.preventDefault()
        carousel2.current.scrollLeft += carousel2.current.offsetWidth;
    }
     
        if (!data || !data.length) return null;
     

    return (
        <>
        <p className="titleCarousel">DC COMICS</p>
            <div className="Carrossel" ref={carousel2}>
                
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
                <button onClick={handleLeftClick2}><Icon icon="bx:chevron-left" height="35" /></button>
                <button onClick={handleRightClick2}><Icon icon="bx:chevron-right" height="35" /></button>
            </div>
        </>
    );
}

export default Carrossel2;