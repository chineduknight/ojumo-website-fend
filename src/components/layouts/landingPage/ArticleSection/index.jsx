import React from 'react';
import styled from '@emotion/styled';
import HeadingText from 'Atoms/HeadingText';
import Paragraph from 'Atoms/Paragraph';
import Image from 'Atoms/Image';
import __fontSizes from 'FontSizes';
import __devices from 'Devices';

const ArticlesSection = () => {
  const ROBOT_IMAGE =
    'https://res.cloudinary.com/maintenance-site/image/upload/w_300/v1580117293/Ojumo/2EJCSULRwC8.png';
  const CHILDREN_IMAGE =
    'https://res.cloudinary.com/maintenance-site/image/upload/w_300/v1580117292/Ojumo/AEaTUnvneik.png';
  const articles = [
    {
      imageURL: ROBOT_IMAGE,
      title: 'Effects of AI and ML',
      description:`
       Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend
     nulla nec, consectetur luctus dui. Pellentesque rutrum pulvinar sem, at interdum nulla
      `,
      authorAndDate: 'May 18, 2019 BY Oguejiofor',
    },
    {
      imageURL: CHILDREN_IMAGE,
      title: 'Extracts from our visit to the orphanage',
      description:`
        Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend
         nulla nec, consectetur luctus dui. Pellentesque rutrum pulvinar sem, at interdum nulla
         sollicitudin et. Fusce pharetra vel mauris id viverra. Sed ut suscipit leo. Aenean eget dui
         semper, pulvinar orci eget, finibus mi.
              Vivamus iaculis ante volutpat purus commodo consectetur. Nullam tortor elit, tincidunt eleifend
         nulla nec, consectetur luctus dui. Pellentesque rutrum pulvinar sem, at interdum nulla
         sollicitudin et. Fusce pharetra vel mauris id viverra. Sed ut suscipit leo. Aenean eget dui
         semper, pulvinar orci eget, finibus mi.
      `,
       authorAndDate: 'May 18, 2019 BY Oguejiofor',
    }
  ];
  return (
    <ArticlesSection.Wrapper>
            <HeadingText responsiveAlign="center">Upcoming Events</HeadingText>
            <ArticlesSection.ArticleContainer>

                {articles.map((element, index)=>(
                    <div key={index}>
                        <Image
                            showInSmallScreen imgHeight="25em" imgWidth="94%" backgroundURL={element.imageURL}
                                   backgroundSize="contain" responsiveWidth="100%"/>
                       <div className="text-heading">
                           <HeadingText responsiveAlign="center" color="BRAND_BLACK">{element.title.toUpperCase()}</HeadingText>
                       </div>

                        <Paragraph className="text">
                           {element.authorAndDate.toUpperCase()}
                        </Paragraph>
                         <div className="p-wrapper">
                             <Paragraph >{element.description}</Paragraph>
                        </div>
                        <div className="read-more">
                            <a href="#">
                                 Read More ...
                            </a>
                        </div>
                    </div>
                ))}

            </ArticlesSection.ArticleContainer>
        </ArticlesSection.Wrapper>
  );
};

ArticlesSection.ArticleContainer = styled.div`
display: flex;

> div{
    width: 100%;
    height: 100%;
}

.text-heading{
    height: 4.375em;
}

.p-wrapper{
    padding-top: 3%;
    width: 90%;
    height: 6.1em;
    overflow: hidden;
}

.read-more{
    >a{
        color: #DFB071;
        text-decoration: none;
        font-weight: bold;
        font-family: Lato;

        &:hover{
            text-decoration: underline;
        }
    }

    padding-top:3%;
}

@media only screen and  (max-width: ${__devices.xSmall}){
    display: block;
}

`;

ArticlesSection.Wrapper = styled.div`
 padding: 4% 9% 4% 12% ;
background-color: #FFF6F6;


@media only screen and  (max-width: ${__devices.xSmall}){
    padding: 5% 3%;
    .container{
        display: block;

    }
}
`;

export default ArticlesSection;
