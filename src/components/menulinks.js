import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1E1E1E; // Nova cor de fundo
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const MenuLink = styled(Link)`
  color: #FFD700; // Nova cor para os links
  margin: 0 1.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
    color: #FF4500; // Cor no hover
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;



function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="hero" smooth={true} duration={800}>
        Home
      </MenuLink>
      <MenuLink to="beneficios" smooth={true} duration={800}>
        Sobre o App
      </MenuLink>
      <MenuLink to="funcionalidades" smooth={true} duration={800}>
        Funcionalidades
      </MenuLink>
      <MenuLink to="depoimentos" smooth={true} duration={800}>
        Comentários
      </MenuLink>
      <MenuLink to="contato" smooth={true} duration={800}>
        Contato
      </MenuLink>
    </MenuContainer>
  );
}

export default Menu