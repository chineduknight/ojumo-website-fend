import React from 'react';
import styled from '@emotion/styled';
import __fonts from '../../../settings/__font_sizes';
import __colors from '../../../settings/__colors';
import __devices from '../../../settings/__devices';
import {BRAND_PRIMARY_BLUE,BRAND_PURPLE} from '../../../settings/__colors';


export default  function HeadingText(
    {
        children,
        align='left',
        responsiveAlign,
        color,
    }){
    return (

        < HeadingText.Text color={color} align={align} responsiveAlign={responsiveAlign}>
            {children}
        </HeadingText.Text>
    )

}


HeadingText.Text = styled.h1`
    font-size: 1.5em;
    font-family: Montserrat;
    letter-spacing: 0.1em;
    color: ${props=> __colors[props.color] || __colors.BRAND_PURPLE};
    font-weight: bold; 
    text-align:   ${props=> props.align};
    @media only screen and (max-width: ${__devices.small}){
        text-align:${props=> props.responsiveAlign || props.align };
    }
`;
