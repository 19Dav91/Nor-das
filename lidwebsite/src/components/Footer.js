// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    position: 'sticky',
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p> 2023 Мой салон маникюра и педикюра</p>
        </FooterContainer>
    );
};

export default Footer;
