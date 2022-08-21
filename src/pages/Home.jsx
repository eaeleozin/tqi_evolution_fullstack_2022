import React from "react";
import Main from "../HomePage/Main";
import Footer from "../HomePage/Footer";
import Container from "../HomePage/Container";
function Home(){
    return(
        <>
            <div className="">
                <Main/>
                <Container/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;