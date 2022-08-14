import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CenterScreen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  overflow-y: hidden;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  color: ${(props) => props.theme.textColor};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textColor};
`;

export { CenterScreen, StyledNavLink };
