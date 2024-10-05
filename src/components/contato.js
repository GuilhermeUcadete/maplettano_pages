import React, { useState } from 'react';
import styled from 'styled-components';

const Secao = styled.section`
  padding: 3rem 1rem;
  text-align: center;
  background-color: #222; // Fundo escuro para a seção
  color: yellow; // Cor do texto para amarelo
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 80%;
  max-width: 300px;
  font-size: 1rem;
  border: 1px solid #FFD700; // Borda dourada
  border-radius: 5px; // Bordas arredondadas

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Botao = styled.button`
  background-color: #FF4500; // Cor de fundo do botão
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px; // Bordas arredondadas
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s; // Transição suave

  &:hover {
    background-color: #EF0C0C; // Cor no hover
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.3rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;


function FormularioContato() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email cadastrado: ${email}`);
    setEmail('');
  };

  return (
    <Secao id="contato">
      <h2>Cadastre seu E-mail para não perder nenhuma novidade !</h2>
      <form onSubmit={handleSubmit}>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Seu email" 
          required 
        />
        <Botao type="submit">Cadastrar</Botao>
      </form>
    </Secao>
  );
}

export default FormularioContato