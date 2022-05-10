import styled from "styled-components";

const FlatButton = styled.button`
  font-size: 1.8rem;
  /* height: 3rem; */
  color: inherit;
  /* width: 3rem; */
  border: 5px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.iconShadow};
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.iconShadowHover};
  }
  :focus {
    outline: 2px solid ${(props) => props.theme.textColor};
  }
`;

export { FlatButton };
