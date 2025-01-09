import React from 'react';

export const Item = ({
  imagem,
  descricao,
  valor,
  onClick,
}) => {
  return (
    <div className="item">
      <div className="imagem-container">
        <img className="imagem-item" src={imagem} alt="Imagem do item" />
      </div>
      <span className='valor' >{valor}</span>
      <h3>{descricao}</h3>
      <button onClick={onClick}>Contribuir</button>
    </div>
  );
};
