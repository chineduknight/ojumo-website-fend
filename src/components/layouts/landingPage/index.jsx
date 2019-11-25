import React from 'react';
import styled from '@emotion/styled';
import {L} from '../../../commonStyles/__fonts'
export default function LandingPage(){
    return (
        <LandingPage.Header>
           Landing Page
        </LandingPage.Header>
    )
}

LandingPage.Header = styled.h1`
    background-color:red;
    font-size: ${L};
`;



