import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #eafbf4;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 0 0;
`;

export const LogoWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 80px;
  heigth: 80px;
`;

export const HeaderNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const HeaderNavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IHeaderNavButton {
  $active: boolean;
}

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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: black;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: whitesmoke;
    transform: scale(1.02);
  }
`;
