import styled from "styled-components";

const FloatingActionButton = styled.button`
  position: fixed;
  font-size: ${(props) => props.theme.iconSize}rem;
  height: 3rem;
  color: inherit;
  width: 3rem;
  border: 5px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.iconShadow};
  cursor: pointer;
  bottom: 2rem;
  right: 2rem;
  &:hover {
    box-shadow: ${(props) => props.theme.iconShadowHover};
  }
`;

export { FloatingActionButton };
