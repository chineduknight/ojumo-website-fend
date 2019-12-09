import React from 'react';
import styled from '@emotion/styled';
import __fonts from '../../../settings/__font_sizes'
import __devices from '../../../settings/__devices';
import {BRAND_WHITE} from '../../../settings/__colors';

export default function NavOption({href, children}){
    return (

        <NavOption.Link href={href}>
            {children}
        </NavOption.Link>
    )

};

NavOption.Link = styled.a`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: ${__fonts.small};
    line-height: 16px;
    display: inline-block;
    
    letter-spacing: 0.1em;
    color: ${BRAND_WHITE};
    text-transform: uppercase;
    text-decoration: none;
    
    &:hover{
         color: #DFB071;
    }
    
     @media only screen and (max-width: 600px){
       text-align: center;
       display: block;
       font-size: 1.5em;
     }
     
`;
