import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavStyle = styled.section`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Fundo semi-transparente para sobrepor a imagem
  background-image: url(src/imagens/prato_delicioso.jpeg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: yellow; // Cor das letras para amarelo
  padding: 1rem;
  position: relative; // Para posicionar elementos dentro, se necessário
`;

const Titulo = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); // Sombra mais intensa

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Descricao = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8); // Sombra mais intensa

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const BotaoDownload = styled.button`
  background-color: #FF4500;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px; // Bordas mais arredondadas
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s; // Adiciona transição de transformação
  margin: 0.5rem 0; // Aumenta o espaçamento entre os botões

  &:hover {
    background-color: #EF0C0C;
    transform: scale(1.05); // Efeito de zoom no hover
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;



function Nav() {
  return (
    <NavStyle>
      <Titulo>Maplettano - Oferecendo a autêntica gastronomia italiana diretamente de sua origem, na sua mesa. </Titulo>
      <Descricao>Receba as melhores opções de pratos típicos da itália com entrega rápida, onde quer que esteja.</Descricao>
      <BotaoDownload>Instalar o App</BotaoDownload>
      <Link to="beneficios" smooth={true} duration={800}>
        <BotaoDownload>Saiba mais</BotaoDownload>
      </Link>
    </NavStyle>
  );
}

export default Nav