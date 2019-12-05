import React from 'react';
import styled from '@emotion/styled';
import {BRAND_WHITE} from "../../../settings/__colors";

'../../../settings/__colors'
export default function Logo({children}){
    return(
        <Logo.Wrapper>
              <Logo.H1>
                {children}
            </Logo.H1>
        </Logo.Wrapper>

    )
}


Logo.Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    
`;
Logo.H1 = styled.h1`
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 0.1em;
    color: ${BRAND_WHITE};
    display: block;
    padding-bottom: 3px;
    text-align:center;
    border-bottom:solid 2px  ${BRAND_WHITE};
    text-transform: uppercase;
`;


