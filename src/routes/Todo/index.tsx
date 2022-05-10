import { useEffect, useState } from "react";
import styled from "styled-components";
import { Timer } from "../../components";
import { useDataProvider } from "../../context/data-context";
import { GrPlay } from "react-icons/gr";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";
import { Header } from "../../components";

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

export function Todo() {
  const {
    theme: { textColor, darkColor },
  } = useDataProvider();
  const [timerSize, setTimerSize] = useState(400);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setTimerSize(window.innerWidth - 120);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500) {
        setTimerSize(window.innerWidth - 120);
      } else {
        setTimerSize(400);
      }
    });

    return window.removeEventListener("resize", () => {
      setTimerSize(400);
    });
  }, []);

  return (
    <FullScreen>
      <Header />
      <TimerContainer>
        <Circle>
          <Timer
            progress={75}
            size={timerSize}
            strokeWidth={timerSize < 400 ? 8 : 15}
            colorStrokeOne={darkColor}
            colorStrokeTwo={textColor}
            timer="10m:20s"
          />
        </Circle>
        <ButtonContainer>
          <Button>
            <GrPlay />
            Start
          </Button>
          <Button>
            <AiOutlinePause />
            Pause
          </Button>
          <Button>
            <VscDebugRestart />
            Restart
          </Button>
        </ButtonContainer>
      </TimerContainer>
      <TodoDescription>
        <HeadingText>Geography Homework</HeadingText>
        <ParagraphText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          exercitationem nostrum, sequi ipsum porro quasi perferendis nemo,
          tempora explicabo dolore dicta! Et possimus fugiat, inventore nam
          accusamus porro molestias quia.
        </ParagraphText>
      </TodoDescription>
    </FullScreen>
  );
}
