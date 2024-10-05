import React from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 4rem 2rem; // Aumenta o padding para mais espaçamento
  text-align: center;
  background-color: #f4f4f4; // Fundo claro para contraste
  border-radius: 10px; // Bordas arredondadas
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Sombra sutil
`;

const Depoimento = styled.div`
  margin: 1.5rem 0; // Aumenta a margem vertical
  font-style: italic;
  font-size: 1.3rem; // Aumenta o tamanho da fonte para destaque
  color: #333; // Cor do texto mais escura

  @media (max-width: 768px) {
    font-size: 1.1rem; // Ajusta o tamanho em telas menores
  }

  @media (max-width: 480px) {
    font-size: 1rem; // Ajusta ainda mais em telas muito pequenas
  }
`;


function Depoimentos() {
  return (
    <Secao id="depoimentos">
      <h2>O que nossos clientes dizem?</h2>
      <Depoimento>"Os pratos são uma verdadeira viagem à Itália! Cada garfada traz sabores autênticos que me fazem sentir como se estivesse jantando em uma trattoria." Jorge</Depoimento>
      <Depoimento>"O risoto que pedi foi incrível! Cremoso e cheio de sabor, definitivamente um dos melhores que já experimentei. Voltarei para pedir mais!" Pedro</Depoimento>
      <Depoimento>"A entrega foi rápida, e a comida chegou quentinha. Os pratos são generosos e super bem preparados. Adorei cada detalhe!" Manuella</Depoimento>
      <Depoimento>""O serviço é excepcional! A qualidade dos ingredientes é evidente, e os pratos são tão bem feitos que se destacam da concorrência." Nair</Depoimento>
      <Depoimento>"Fiquei encantado com as massas artesanais! O sabor é autêntico e me lembrou as refeições que tive na Itália. Recomendo a todos!" Luzia</Depoimento>
    </Secao>
  );
}

export default Depoimentos