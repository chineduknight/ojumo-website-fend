import React from 'react';
import styled from '@emotion/styled';
import NavOption from '../../atoms/NavOption';
import __devices from '../../../settings/__devices';
import {BRAND_WHITE} from '../../../settings/__colors';

export default function NavOptionGroup({width}){
    const links = [
        {
            text:'Events',
            href:'#'
        },
        {
            text:'Programmes',
            href:'#'
        },
        {
            text:'Blog',
            href:'#'
        }
    ];

    return (
        <NavOptionGroup.Wrapper>
            <label htmlFor="toggler">&#9776;</label>
            <input type="checkbox"   id="toggler"/>
            <div className="all-links">
                 {
                    links.map((element, index)=>(
                       <div key={index} className="nav-option">
                             <NavOption href={element.href || "#"}>
                                {element.text}
                            </NavOption>
                        </div>
                    ))
                }
            </div>


        </NavOptionGroup.Wrapper>

    )
}

NavOptionGroup.Wrapper = styled.div`
     margin-left: 40%;
     label{
        font-size: 2em;
        color: ${BRAND_WHITE};
        cursor: pointer;
        text-align:right;
        justify-self: flex-end;
        margin-left: auto;
        display:none;
     }
     .all-links div{
        display: inline-block;
        margin: 1.5em;
        width: fit-content;
        padding: 2em 0;
     }
     
     #toggler{
        display: none;
     }
     
    
     @media only screen and (max-width: ${__devices.large}){
      
        width:100%;
        display:block;
        label{
            display:block;
            
        }
        .all-links{
            display: none
       }
        .all-links{
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            background-color: rgba(46,77,113,0.91);
            padding-top: 1.2em
           
        }
        .all-links div{
            display: block;
            width: 100%;
             text-align: center;
             border-bottom: solid 2px white;
             margin: 0;
         }
        .nav-option{
            display: none;
        }
        #toggler:checked + .all-links{
            display: block;
        }
     }
     
`;



