import styled from "styled-components";

const FullScreen = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  color: ${(props) => props.theme.textColor};
  gap: 4rem;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: yellow;
  justify-content: space-around;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
  max-width: 30rem;
  @media screen and (min-width: 1200px) {
    gap: 4rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Circle = styled.div`
  border-radius: 100%;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(prop) => prop.theme.boxShadow};
  border-radius: 100%;
  min-width: fit-content;
  height: max-content;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  box-sizing: border-box;
`;

const TodoDescription = styled.div`
  width: 50rem;
  max-width: 100%;
  min-height: fit-content;
  height: 100%;
  max-height: 50rem;
  border-radius: 2.5rem;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(prop) => prop.theme.boxShadow};
  padding: 20px;
  margin: 0 20px;
  box-sizing: border-box;
`;

const HeadingText = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

const ParagraphText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  @media screen and (min-width: 1200px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(prop) => prop.theme.boxShadow};
  box-shadow: ${(prop) => prop.theme.buttonShadow};
  outline: none;
  border: 4px solid #5f5f91;
  border-radius: 10px;
  height: 3rem;
  width: 10rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(prop) => prop.theme.textColor};
  &:hover {
    box-shadow: ${(prop) => prop.theme.buttonHoverShadow};
  }
`;

const SubtitleText = styled.span`
  font-size: 1.2rem;
`;

export {
  FullScreen,
  MainContainer,
  TimerContainer,
  ButtonContainer,
  Circle,
  TodoDescription,
  HeadingText,
  ParagraphText,
  Button,
  SubtitleText,
};
