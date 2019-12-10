import React from 'react';
import styled from '@emotion/styled';
import Logo from '../../atoms/Logo';
import NavOptionGroup from '../../molecules/NavOptionGroup';
import __devices from '../../../settings/__devices';
export default function Header(){

    return (
        <Header.Nav>
           <div className={'header-area'}>
                <Logo>Ojumo</Logo>
           </div>
            <NavOptionGroup
                width="40%"
            />


        </Header.Nav>
    )
}

Header.Nav = styled.nav`
   
   
    padding: 0;
    display: flex;
    width: 78%;
    
    .header-area{
        width:40%;
        div{
            display: inline-block;
            margin: 1.5em;
            width: fit-content;
        }
        text-align:center;
    }
    justify-content:space-around;
    align-items:baseline;
    
     @media only screen and (max-width: ${__devices.small}){
        width: auto;
       .header-area{
        width:auto;
       }
     }
    
`;

