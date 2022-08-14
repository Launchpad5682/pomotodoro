import * as Styled from "./styles";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useTheme } from "../../hooks/useTheme";
import { useAuthProvider } from "../../context/auth-context";
import { FlatButton } from "../FlatButton";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuthProvider();

  return (
    <Styled.Header>
      <Styled.Logo>
        Pomo<span>todo</span>ro
      </Styled.Logo>
      <Styled.ThemeModeIconContainer>
        <Styled.ThemeIcon onClick={toggleTheme}>
          {theme === "light" ? <RiSunLine /> : <RiMoonLine />}
        </Styled.ThemeIcon>
      </Styled.ThemeModeIconContainer>
      <FlatButton onClick={logout}>Logout</FlatButton>
    </Styled.Header>
  );
}
