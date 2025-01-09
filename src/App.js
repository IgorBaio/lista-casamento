import logo from "./logo.svg";
import CalmanteImage from "./assets/calmante.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Bem-vindo ao Chá de Casa Nova!</h1>
      </header>
      <main>
        <div class="item">
          <div class="imagem-container">
            <img class="imagem-item" src={CalmanteImage} alt="Imagem do item"/>
          </div>
          <h3>R$300,00 - Calmante para aguentar ela falando na minha cabeça</h3>
          <button onclick="mostrarPix('PIX: 123456789')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$12,00 - Para a lua de mel</h3>
          <button onclick="mostrarPix('PIX: 987654321')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$50,00 - Para o primeiro churrasco da casa</h3>
          <button onclick="mostrarPix('PIX: 1122334455')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$25,00 - Para o kit de limpeza inicial</h3>
          <button onclick="mostrarPix('PIX: 5566778899')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$80,00 - Para o fundinho da conta de luz</h3>
          <button onclick="mostrarPix('PIX: 2233445566')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$100,00 - Para as primeiras pizzas da casa nova</h3>
          <button onclick="mostrarPix('PIX: 6677889900')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$20,00 - Para o papel higiênico de emergência</h3>
          <button onclick="mostrarPix('PIX: 9988776655')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$150,00 - Para o sofá mais confortável (ou quase isso)</h3>
          <button onclick="mostrarPix('PIX: 3344556677')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$60,00 - Para os primeiros copos e pratos da casa</h3>
          <button onclick="mostrarPix('PIX: 7788990011')">Contribuir</button>
        </div>

        <div class="item">
          <h3>R$200,00 - Para ajudar na pintura da casa</h3>
          <button onclick="mostrarPix('PIX: 4455667788')">Contribuir</button>
        </div>
      </main>
      <footer>
        <p>Obrigado por contribuir para nossa felicidade!</p>
      </footer>
    </>
  );
}

export default App;
