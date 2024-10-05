import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 4rem 2rem; // Aumenta o padding para mais espaço
  text-align: center;
  background-color: #f8f8f8; // Fundo claro para destacar os pratos
  border-radius: 10px; // Bordas arredondadas
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // Sombra sutil
`;

const GridPratos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; // Espaçamento entre os itens
`;

const Prato = styled.div`
  flex: 0 1 calc(33.333% - 2rem); // 33.333% da largura para 3 itens por linha
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); // Sombra um pouco mais intensa
  padding: 1.5rem; // Aumenta o padding
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s; // Transição suave

  &:hover {
    transform: translateY(-5px); // Efeito de elevação no hover
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // Sombra mais intensa no hover
  }

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 2rem); // Ocupa 50% da largura em telas menores
  }

  @media (max-width: 480px) {
    flex: 0 1 100%; // Ocupa 100% da largura em telas muito pequenas
  }
`;


function Funcionalidades({ pratos }) {
  return (
    <Secao id="funcionalidades">
      <h2>Funcionalidades do App</h2>
      <p>Nosso aplicativo de delivery de comidas italianas oferece uma experiência rápida e intuitiva. Com um menu diversificado.</p>

      <p>Finalize seu pedido com opções de pagamento seguras e acompanhe o status da entrega em tempo real. Baixe o app e desfrute do melhor da itália no conforto da sua casa!</p>

      <GridPratos>
        {/* Verificando se pratos é um array antes de mapear */}
        {pratos && pratos.length > 0 ? (
          pratos.map((prato) => (
            <Prato key={prato.id}>
              <h3>{prato.title}</h3>
              <img src={prato.image} alt={prato.title} />
            </Prato>
          ))
        ) : (
          <p>Carregando pratos...</p>
        )}
      </GridPratos>
    </Secao>
  );
}

export default Funcionalidades