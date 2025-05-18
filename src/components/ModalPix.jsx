import React from "react";

export const ModalPix = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>

        <h2>Contribuição via PIX</h2>
        <span className="pix-descricao">
          Olá, querido convidado! Agradecemos muito por sua presença em nosso
          casamento. Se você deseja nos ajudar a realizar esse sonho, ficaremos
          muito felizes com qualquer contribuição!
          <br />
          <br />
          Para contribuir, você pode fazer um PIX para a chave abaixo:
        </span>

        <div className="pix-container">
          <span className="key-copyboard">
            <p className="pix-key">Chave: (32) 99974-2701</p>
            <button
              className="copy-button"
              onClick={() => navigator.clipboard.writeText("(32) 99974-2701")}
            >
              Copiar chave
            </button>
          </span>

          <span className="bank-infos"><span className="bank-info-title">Nome:</span> <span className="bank-info-value">Igor Baio Soares</span></span>
          <span className="bank-infos"><span className="bank-info-title">Banco:</span> <span className="bank-info-value">Mercado Pago</span></span>

          <span className="bank-infos value"><span className="bank-info-title">Valor:</span> <span className="bank-info-value">é de sua preferência</span></span>

          <span className="thanks-message">Agradecemos muito pela sua contribuição!</span>
          <span className="thanks-message">Com amor, Mari & Igor</span>
        </div>
      </div>
    </div>
  );
};
