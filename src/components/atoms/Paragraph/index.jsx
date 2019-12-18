import React from 'react';
import styled from '@emotion/styled';
import __fonts from '../../../settings/__font_sizes';
import __devices from '../../../settings/__devices';
import {BRAND_WHITE} from '../../../settings/__colors';


export default  function Paragraph({align, children, width, responsiveWidth, responsiveMargin, margin}){
    return (
        < Paragraph.Text
            width={width}
            responsiveWidth={responsiveWidth}
            responsiveMargin={responsiveMargin}
            margin={margin}
            align={align}
        >
            {children}
        </Paragraph.Text>
    )

}

Paragraph.Text = styled.p`
    width:${props=> props.width || 0};
    font-family: Lato;
    font-style: normal;
    line-height: 19px;
    font-size: ${__fonts.normal};
    text-align:${props=> props.align|| 'left'};
    @media only screen and (max-width: ${__devices.small}){
        width:${props=> props.responsiveWidth || '100%'};
        margin:${props=>props.responsiveMargin || props.margin
    }
`;
