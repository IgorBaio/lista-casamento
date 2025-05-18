import React, { useState } from "react";
import logo from "./logo.svg";
import CalmanteImage from "./assets/calmante.jpeg";
import LuaDeMelImage from "./assets/lua-de-mel.jpeg";
import PrimeiroChurrascoImage from "./assets/churrasco.jpeg";
import KitLimpezaImage from "./assets/kit-limpeza.png";
import ContaDeLuzImage from "./assets/luz.jpeg";
import PrimeirasPizzasImage from "./assets/pizza.jpeg";
import PapelHigienicoImage from "./assets/papel-higienico.jpeg";
import SofaImage from "./assets/sofa.jpeg";
import CoposPratosImage from "./assets/pratos.jpeg";
import PinturaImage from "./assets/pintura.jpeg";
import SorrisosImage from "./assets/sorrisos.jpg";
import HarleyImage from "./assets/harley.jpg";
import DescansoImage from "./assets/descanso.jpg";
import AliancasImage from "./assets/aliancas.jpg";
import CarinhosImage from "./assets/carinhos.jpg";

import "./App.css";
import { Item } from "./components/Item";
import { ModalPix } from "./components/ModalPix";

function App() {
  const [showModal, setShowModal] = useState(false);
  const mostrarPix = () => {
    setShowModal(true);
  };

  const ITENS = [
    {
      imagem: SorrisosImage,
      descricao: "Para 5 minutos de sorrisos do casal",
      valor: "R$150,00",
      onClick: mostrarPix,
    },
    {
      imagem: HarleyImage,
      descricao: "Para um passeio de Harley-Davidson",
      valor: "R$100,00",
      onClick: mostrarPix,
    },
    {
      imagem: DescansoImage,
      descricao: "10 minutos de descanso para o casal",
      valor: "R$45,00",
      onClick: mostrarPix,
    },
    {
      imagem: AliancasImage,
      descricao: "Para ajudar nas prestações das alianças",
      valor: "R$50,00",
      onClick: mostrarPix,
    },

    {
      imagem: CarinhosImage,
      descricao: "Carinhos do casal",
      valor: "R$20,00",
      onClick: mostrarPix,
    },
    {
      imagem: CalmanteImage,
      descricao: "Calmante para aguentar ela falando na minha cabeça",
      valor: "R$300,00",
      onClick: mostrarPix,
    },
    {
      imagem: KitLimpezaImage,
      descricao: "Para o kit de limpeza inicial",
      valor: "R$25,00",
      onClick: mostrarPix,
    },
    {
      imagem: ContaDeLuzImage,
      descricao: "Para o fundinho da conta de luz",
      valor: "R$80,00",
      onClick: mostrarPix,
    },
    {
      imagem: PrimeirasPizzasImage,
      descricao: "Para as primeiras pizzas da casa nova",
      valor: "R$100,00",
      onClick: mostrarPix,
    },
    {
      imagem: PapelHigienicoImage,
      descricao: "Para o papel higiênico de emergência",
      valor: "R$20,00",
      onClick: mostrarPix,
    },
    {
      imagem: SofaImage,
      descricao: "Para o sofá mais confortável (ou quase isso)",
      valor: "R$150,00",
      onClick: mostrarPix,
    },
    {
      imagem: CoposPratosImage,
      descricao: "Para os primeiros copos e pratos da casa",
      valor: "R$80,00",
      onClick: mostrarPix,
    },
    {
      imagem: PinturaImage,
      descricao: "Para ajudar na pintura da casa",
      valor: "R$200,00",
      onClick: mostrarPix,
    },
  ];

  return (
    <>
      {showModal ? (
        <ModalPix onClose={() => setShowModal(false)} />
      ) : (
        <>
          <header className="section_header">
            <h1 className="texto">Bem-vindo à nossa lista de casamento!</h1>
          </header>
          <main>
            {ITENS.map((item, index) => {
              return (
                <Item
                  key={index}
                  imagem={item.imagem}
                  descricao={item.descricao}
                  valor={item.valor}
                  onClick={item.onClick}
                />
              );
            })}
          </main>
        </>
      )}
      <footer>
        <p>Obrigado por contribuir para nossa felicidade!</p>
      </footer>
    </>
  );
}

export default App;
