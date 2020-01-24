
import React from 'react'
import  styled from '@emotion/styled'
import __fontSizes from "FontSizes";

export default  function Button({children}){
    return (
        <Button.Wrapper>{children}</Button.Wrapper>
    )
}


Button.Wrapper = styled.button`
    width: 40%;
    margin-top: 5%;
    display:block;
    background: #BD5493;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${__fontSizes.small};
    line-height: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3%;
    color: #FFFFFF;
    border-radius: 3%;
    cursor: pointer;
    &:hover{
        background: #CD5493;
    }
    
`;
