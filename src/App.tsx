import React from "react";
import { StyledContainer, StyledForm, StyledHeader, StyledInput, StyledLabel, StyledSubmitButton } from "./styles";
import GlobalStyles from "./styles/GlobalStyles";
import axios from "axios";

function App() {

  function sendData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Mensagem de aviso mesmo!')
  }

  return (
    <>
      <GlobalStyles/>
      <StyledContainer>
        <StyledHeader>Calculadora de Imóveis</StyledHeader>
        Informe os dados para prever o preço do imóvel!
        <StyledForm onSubmit={sendData}>
          <StyledLabel htmlFor="room">Quartos</StyledLabel>
          <StyledInput type="text" id="Quartos" placeholder="Insert text in here" />
          <StyledLabel htmlFor="bathroom">Banheiros</StyledLabel>
          <StyledInput type="text" placeholder="Insert text in here" />
          <StyledLabel htmlFor="garage">Vagas de garagem</StyledLabel>
          <StyledInput type="text" placeholder="Insert text in here" />
          <StyledLabel htmlFor="bairro">Bairro</StyledLabel> {/* TODO COLOCAR SELECT */}
          <StyledInput type="text" placeholder="Insert text in here" />
          <StyledLabel htmlFor="zona">Zona</StyledLabel> {/* TODO COLOCAR SELECT */}
          <StyledInput type="text" placeholder="Insert text in here" />
          <StyledLabel htmlFor="area">Área (m²)</StyledLabel>
          <StyledInput type="text" placeholder="Insert text in here" />
          <StyledLabel htmlFor="area">Área (m²)</StyledLabel>
          <StyledInput type="text" placeholder="Insert text in here" />
          <StyledSubmitButton type="submit">Clique aqui!</StyledSubmitButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
}

export default App;

