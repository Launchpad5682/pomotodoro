import * as Styled from "./styles";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
  const { theme, toggleTheme } = useTheme();

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
    </Styled.Header>
  );
}
