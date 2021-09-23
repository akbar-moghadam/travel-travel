import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery} from "gatsby"
import './styles/style.css'


function Testimo() {

    const data=useStaticQuery(graphql`
    query  {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["jeffrey","akyur"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)

    return (
        <TestimoContainer>
            <TopLine>
                testimo
            </TopLine>
            <Description>
                what people are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                <Testimoo>
                    
                    <IoMdCheckmarkCircleOutline style={{color:'#f67280',
                    fontSize: '2rem',
                    marginBottom:'1rem'}}/>
                    
                    <h3> Yasin Tavanger</h3>
                    <p>" The greatest experience of my life! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni temporibus voluptatum animi, voluptatem ab repellendus iste excepturi dolor consectetur recusandae odio deleniti facilis. Ipsum dolorem enim suscipit odit, distinctio veniam!"</p>
                </Testimoo>
                <Testimoo>
                    <FaRegLightbulb style={{color:'#3fffa8',
                    fontSize: '2rem',
                    marginBottom:'1rem'}}/>
                    <h3>Negar Moghadam</h3>
                    <p>" The greatest experience of my life! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni temporibus voluptatum animi, voluptatem ab repellendus iste excepturi dolor consectetur recusandae odio deleniti facilis. Ipsum dolorem enim suscipit odit, distinctio veniam!"</p>
                
                </Testimoo>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image,key)=>(
                    <Image key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
                
                </ColumnTwo>
            </ContentWrapper>
        </TestimoContainer>
    )
}

export default Testimo


const TestimoContainer=styled.div`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw-1300px) /2);
height: 100%;
`

const TopLine=styled.p`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem;
`

const Description=styled.p`
text-align:start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;
`

const ContentWrapper=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding:0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`

const ColumnOne=styled.div`
display: grid;
grid-template-rows: 1fr 1fr;

`

const Testimoo=styled.div`
padding-top: 1rem;
padding-right: 2rem;

h3{
    margin-bottum: 1rem;
    font-size: 1.5rem;
    font-style: italic;
}

p{
    color: #3b3b3b;

}
`

const ColumnTwo=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
}
`

const Image=styled(Img)`
border-radius: 10px;
height: 100%;
`
