import styled from "styled-components";

// Container geral do header
export const HeaderContainer = styled.header`
  background-color: whitesmoke;
  width: 100%;
  height: 60px; /* Aumentei a altura para melhorar a visualização */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adicionado box-shadow */
`;

// Conteúdo dentro do header
export const HeaderContent = styled.div`
  width: 80%;
  max-width: 1200px; /* Para limitar o tamanho máximo no desktop */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 16px;
`;

// Container do logo
export const LogoContainer = styled.div`
  // background-color: orange;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 0 0;
`;

// Estilo do logo
export const LogoImage = styled.h1`
  background-color: black;
  border: 2px solid white;
  padding: 6px;
`;

// Container da navegação
export const HeaderNav = styled.nav`
  // background-color: blue;
  height: 100%;
  display: flex;
  align-items: center;
`;

// Lista de itens de navegação
export const HeaderNavList = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

// Item individual da lista
export const HeaderNavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IHeaderNavButton {
  $active: boolean;
}

// Botão de navegação
export const HeaderNavButton = styled.a<IHeaderNavButton>`
  background-color: ${(props) => (props.$active ? "#d4edda" : "white")};
  padding: 10px 10px;
  border: ${(props) =>
    props.$active ? "2px solid #28a745" : "2px solid white"};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
  min-width: 140px;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adicionado box-shadow */
  color: black;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: whitesmoke;
    transform: scale(1.02);
  }
`;
