import React from 'react';
import PixImage from '../assets/pix.jpeg'; // Substitua pelo caminho correto da imagem do código QR

export const ModalPix = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };
    
    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            
        <h2>Contribuição via PIX</h2>
        <img 
        className='imagem-pix'
        src={PixImage} 
        alt="Imagem do código QR"
         />
            
        </div>
        </div>
    );
    }