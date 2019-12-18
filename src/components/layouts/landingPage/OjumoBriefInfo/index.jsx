import React from 'react';
import styled from '@emotion/styled';
import __fonts from '../../../../settings/__font_sizes';
import Header from '../../../molecules/Header';
import __devices from '../../../../settings/__devices';
import {BRAND_WHITE} from '../../../../settings/__colors';

export default function OjumoBriefInfo(){

    return (
        <OjumoBriefInfo.Image>
            <OjumoBriefInfo.Wrapper >
                <Header/>
                <OjumoBriefInfo.Body>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p>Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend nulla nec, consectetur luctus dui. Pellentesque rutrum pulvinar sem, at interdum nulla sollicitudin et. Fusce pharetra vel mauris id viverra.
                        Sed ut suscipit leo. Aenean eget dui semper, pulvinar orci eget, finibus mi.</p>
                </OjumoBriefInfo.Body>
            </OjumoBriefInfo.Wrapper>
        </OjumoBriefInfo.Image>


    )
}
OjumoBriefInfo.Image = styled.div`
        background: url(https://res.cloudinary.com/maintenance-site/image/upload/v1575475798/image.jpg) no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        height: 100vh;
        width: 100vw;
        
       @media only screen and  (max-width: ${__devices.xSmall}) and (max-height:639px){
            height: auto;
        }
        
       @media only screen and  (max-width: ${__devices.small}) and (max-height:${__devices.xSmall}){
            height: auto;
        }
     }
`;


OjumoBriefInfo.Body = styled.div`
    margin-top: 10%;
    margin-left: 15.9%;
    h1{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: ${__fonts.medium};
        line-height: 51px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        width: 740px;
        color: ${BRAND_WHITE};
    }
    
    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        width: 694px;
        color: #FFFFFF;
        margin-top: 2em;
    }
    @media only screen and (max-width: ${__devices.large}){
        margin: 0;
        margin-top: 15%;
        h1, p{
            width: 100%;
            text-align: center;
        }
        h1{
            font-size: 2.0em;
        }
    }
    
    
    @media only screen and (max-width: ${__devices.small}) and (max-height: ${__devices.large}){
            margin-top: 25%;
    }

`
OjumoBriefInfo.Wrapper = styled.div`
    z-index: 10;
    background:rgba(46, 77, 113, 0.61);
    height:94.7%;
    padding: 1.3em 1em;
    
`;



