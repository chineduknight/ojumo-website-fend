import React from 'react';
import styled from '@emotion/styled';
import __devices from '../../../settings/__devices';

export default function Image(
    {imgWidth, imgHeight, children,
        backgroundURL, showInSmallScreen,
        responsiveWidth,  responsiveHeight,
        imgMargin
    }){

    return (
        <Image.Wrapper
            imgWidth={imgWidth}
            responsiveWidth={responsiveWidth}
            imgHeight={imgHeight}
            imgMargin={imgMargin}
            responsiveHeight={responsiveHeight}
            showInSmallScreen={showInSmallScreen}
        >
             <Image.Container
                         url={backgroundURL}>
            {children}
        </Image.Container>
        </Image.Wrapper>



    )
}


Image.Wrapper = styled.div`
     height: ${props=> props.imgHeight|| '0'};
     width: ${props=>  props.imgWidth|| '0'};
     margin: ${props=> props.imgMargin };
    @media only screen and (max-width: ${__devices.small}){
        display: ${props=> props.showInSmallScreen? 'block': 'none'};
        height: ${props=> props.responsiveHeight || props.imgHeight|| '0'};
        width: ${props=> props.responsiveWidth || props.imgWidth|| '0'};
    }
`;
Image.Container = styled.div`
        background-position: center center;
        background-size: cover;
        background: url(${props=> props.url}) no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        height: 100%;
        width: 100%;
      
     }
`;


