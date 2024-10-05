import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 4rem 2rem; // Aumenta o padding para mais espaço
  text-align: center;
  background-color: #f9f9f9; // Fundo claro para destaque
  border-radius: 10px; // Bordas arredondadas
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // Sombra sutil
`;

const Beneficio = styled.div`
  margin: 2rem 0; // Aumenta a margem vertical
  padding: 1.5rem; // Adiciona padding interno
  background-color: #ffffff; // Fundo branco para cada benefício
  border-radius: 8px; // Bordas arredondadas
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Sombra leve
  transition: transform 0.3s; // Transição suave

  &:hover {
    transform: translateY(-5px); // Efeito de elevação no hover
  }
`;


function Beneficios() {
  return (
    <Secao id="beneficios">
      <h2>Por que pedir do Maplettano?</h2>
      <Beneficio> 1- Entrega rápida em menos de 30 minutos!</Beneficio>
      <Beneficio>2- Variedade de comidas típicas italianas.</Beneficio>
      <Beneficio>3- Pagamento fácil e seguro diretamente pelo app.</Beneficio>
    </Secao>
  );
}

export default Beneficios