import React from 'react'
import  styled from '@emotion/styled'
import HeadingText from "Atoms/HeadingText";
import Image from "Atoms/Image";
import __colors from "Colors";
import __fontSizes from "FontSizes";
import __devices from "Devices";
import Button from 'Atoms/Button';

export default  function UpcomingEvents(props) {

    const IMAGE = 'https://res.cloudinary.com/maintenance-site/image/upload/v1579087015/Ojumo/kyle-glenn-gcw_WWu_uBQ-unsplash_1.png';


    const events = [
        {
            imageURL: IMAGE,
            title: 'The imperitive of focus and Goal Oriented life.',
            speaker: 'Mr. Ikechukwu',
            date: 'Date - 20th May 2019',
            time: 'Time - 8am - 4pm',
        },
         {
            imageURL: IMAGE,
            title: 'The imperitive of focus and Goal Oriented life.',
            speaker: 'Mr. Ikechukwu',
            date: 'Date - 20th May 2019',
            time: 'Time - 8am - 4pm',
        },
         {
            imageURL: IMAGE,
            title: 'The imperitive of focus and Goal Oriented life.',
            speaker: 'Mr. Ikechukwu',
            date: 'Date - 20th May 2019',
            time: 'Time - 8am - 4pm',
        },
         {
            imageURL: IMAGE,
            title: 'The imperitive of focus and Goal Oriented life.',
            speaker: 'Mr. Ikechukwu',
            date: 'Date - 20th May 2019',
            time: 'Time - 8am - 4pm',
        }
    ];
    return (
        <UpcomingEvents.Wrapper>
            <HeadingText responsiveAlign="center">Upcoming Events</HeadingText>
            <UpcomingEvents.Events>
                {
                    events.map(event=>(
                        <div className="card">
                            <div className="image">
                                <Image backgroundURL={event.imageURL} imgWidth="100%" imgHeight="100%"></Image>
                            </div>
                            <div className="content">
                                <h1>{event.title}</h1>
                                <em>Guest Speaker - {event.speaker}</em>
                                <div className="date-time">
                                    {event.date}
                                </div>
                                <div className="date-time">
                                   {event.time}
                                </div>

                                <Button>RSVP</Button>

                            </div>
                        </div>
                    ))
                }

            </UpcomingEvents.Events>
        </UpcomingEvents.Wrapper>
    )
}

UpcomingEvents.Events = styled.div`
    margin-top: 4%;
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    .content{
        padding: 4% 0 7%; 
    }
    .image{
        width: 50%;
        height: 100%;
        margin-right: 3%;
    }
    .card{
        width 48%;
        display:flex;
        margin-bottom: 4%;
        &:nth-child(2n){
            margin-left: 2%;
    }
        
    background-color: #F4F1F2;
    
    h1{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: ${__fontSizes.normal};
        line-height: 20px;
        display: flex;
        align-items: center;
        color: ${__colors.BRAND_PRIMARY_BLUE};
        margin-top: 5%;
        width: 80%;
    }
    
    em{
        
        font-family: Lato;
        font-style: italic;
        font-weight: bold;
        font-size: ${__fontSizes.small};
        line-height: 12px;
        
        display: block;
        margin-top: 1%;
        color: #BD5493;
    }
    
    .date-time{
        margin-top: 5%;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
       font-size: ${__fontSizes.small};
        line-height: 16px;
        
        
        color: #000000;
    }
    
   
}

 @media only screen and  (max-width: ${__devices.xSmall}){
        display: block;
        .image{
            display:none;
        }
        .card{
            width 90%;
            margin-bottom: 4%;
            justify-content: center;
            align-items: center;
            &:nth-child(2n){
                margin-left: 2%;
            }
            padding-left: 10%;
    }
    
`;

UpcomingEvents.Wrapper = styled.div`
    padding: 4% 9% 4% 12% ;
     @media only screen and  (max-width: ${__devices.xSmall}){
        padding: 5% 3%;
    }
    
`;
