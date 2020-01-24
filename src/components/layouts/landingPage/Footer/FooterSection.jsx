import HeadingText from "Atoms/HeadingText";
import React from "react";
import styled from "@emotion/styled";
import __devices from "../../../../settings/__devices";

export default  function FooterSection({children, title, showOnMobile=true, width}) {
    return(
        <FooterSection.Wrapper showOnMobile={showOnMobile} width={width}>
            <div>
                <HeadingText color="BRAND_WHITE" fontSize="1.25em">{title}</HeadingText>
                 {children}
            </div>

        </FooterSection.Wrapper>


    );
}


FooterSection.Wrapper = styled.div`
    margin-right: 5%;
    width: ${props=> props.width|| '30%'};
    &:first-child{
        width: 45%;
    }
    div{
       margin-top: 1em;
       &:last-child{
        margin-bottom: 0;
        margin-right: 0;
       }
    }
    @media only screen and (max-width: ${__devices.small}){
            margin-bottom: 3em;
            text-align: center;
            > div, &:first-child, &{
                width: 100%;
            }
            
            display: ${props=> props.showOnMobile? 'block': 'none'};
      }
`;
