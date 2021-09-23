import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinkWrapper>
                <FooterDesc>
                    <h1>World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque aut beatae facere, dolores vitae magnam nihil omnis culpa nam quibusdam, possimus sequi? Accusantium voluptas nesciunt rem, non libero saepe.</p>
                </FooterDesc>
                <FooterLinkItem>
                    <FooterLinkTitle>
                        Contact Us
                    </FooterLinkTitle>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/">Support</FooterLink>
                    <FooterLink to="/">Destinations</FooterLink>
                    <FooterLink to="/">Sponserships</FooterLink>
                </FooterLinkItem>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
                <FooterLinkItem>
                    <FooterLinkTitle>
                        Videos
                    </FooterLinkTitle>
                    <FooterLink to="/">Submit Video</FooterLink>
                    <FooterLink to="/">Ambassadors</FooterLink>
                    <FooterLink to="/">Agency</FooterLink>
                    <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItem>
            
            
                <FooterLinkItem>
                    <FooterLinkTitle>
                        Social Media
                    </FooterLinkTitle>
                    <FooterLink to="/">Instagram</FooterLink>
                    <FooterLink to="/">Facebook</FooterLink>
                    <FooterLink to="/">Youtube</FooterLink>
                    <FooterLink to="/">Twitter</FooterLink>
                </FooterLinkItem>
            </FooterLinkWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer=styled.div`
padding:5rem calc((100vw-1100px)/2);
display:grid;
grid-template-columns: repeat(2,1fr);
color: #000;
background: #fafafb;
padding: 2rem 0;
`

const FooterDesc=styled.div`
padding: 0 2rem;

h1{
    margin-bottom: 3rem;
    color: #f26a2e;
}

@media screen and (max-width: 400px){
    padding: 1rem;
}
`

const FooterLinkWrapper=styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);

@media screen and (max-width: 820px){
    grid-template-columns:1fr;
}
`
const FooterLinkItem=styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px){
    padding:1rem;
}
`
const FooterLinkTitle=styled.h2`
font-size:14px;
margin-bottom:16px;

`
const FooterLink=styled(Link)`
text-decoration:none;
margin-bottom: 0.5rem;
font-size:14px;
color: #3d3d4e;

&:hover{
    color:#f26a2e;
    transition:0.3s ease-out;
}
`