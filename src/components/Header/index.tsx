import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNav,
  LogoContainer,
  LogoImage,
  HeaderNavList,
  HeaderNavListItem,
  HeaderNavButton,
} from "./styles";

const HeaderComponent = () => {
  const location = useLocation();
  const categoriesPathname = "/categories";
  const heroesPathname = "/heroes";

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderNav>
          <LogoContainer>
            <LogoImage>Hero</LogoImage>
          </LogoContainer>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavButton
                $active={categoriesPathname === location.pathname}
                href={categoriesPathname}
              >
                Category
              </HeaderNavButton>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavButton
                $active={heroesPathname === location.pathname}
                href={heroesPathname}
              >
                Heroes
              </HeaderNavButton>
            </HeaderNavListItem>
          </HeaderNavList>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderComponent;
