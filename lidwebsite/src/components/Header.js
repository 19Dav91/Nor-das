// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffcc00;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Мой салон маникюра и педикюра</Title>
            {/* Навигация или другие элементы шапки */}
        </HeaderContainer>
    );
};

export default Header;
