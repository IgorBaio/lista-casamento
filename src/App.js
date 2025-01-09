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

import "./App.css";
import { Item } from "./components/Item";

function App() {
  const mostrarPix = () => {
    alert("PIX: igorbaiosoares@gmail.com");
  };

  const ITENS = [
    {
      imagem: CalmanteImage,
      descricao: "Calmante para aguentar ela falando na minha cabeça",
      valor: "R$300,00",
      onClick: mostrarPix,
    },
    {
      imagem: LuaDeMelImage,
      descricao: "Para a lua de mel",
      valor: "R$12,00",
      onClick: mostrarPix,
    },
    {
      imagem: PrimeiroChurrascoImage,
      descricao: "Para o primeiro churrasco da casa",
      valor: "R$50,00",
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
      <header>
        <h1>Bem-vindo ao Chá de Casa Nova!</h1>
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
      <footer>
        <p>Obrigado por contribuir para nossa felicidade!</p>
      </footer>
    </>
  );
}

export default App;
