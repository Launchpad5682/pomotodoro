import styled, { keyframes } from "styled-components";

const Header = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
`;

const ThemeModeIconContainer = styled.span`
  position: relative;
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;
  border: 5px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 20%;
  box-shadow: ${(props) => props.theme.iconShadow};
  cursor: pointer;
  margin-left: auto;
  &:hover {
    box-shadow: ${(props) => props.theme.iconShadowHover};
  }
`;

const enter = keyframes`
  from{
    bottom:-8px;
  };
  to{
    bottom: auto;
  }
`;

const ThemeIcon = styled.span`
  /* position: absolute; */
  /* animation: ${enter} 0.2s ease-in none; */
  font-size: ${(props) => props.theme.iconSize}rem;
`;

export { Header, ThemeModeIconContainer, ThemeIcon };
