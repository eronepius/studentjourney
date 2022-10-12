import React from "react";
import styled from "styled-components";
import logo from "./assets/logo1.png"

const Navdiv = styled.div`
    height: 60px;
    background-color: #BFBFBF;
    display: flex;
    flex-direction: row;
`;

const H2Sty = styled.h2`
    padding: 5px;
`;

const ImgStyle = styled.img`
    height: 55px;
    width: 55px;
    padding: 5px;
`;

function Navbar(){
    return(
        <Navdiv>
            <ImgStyle src={logo} />
            <H2Sty> Student Journey</H2Sty>


        </Navdiv>
    )
}

export default Navbar;