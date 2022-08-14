import styled from "styled-components";

const FullScreen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  overflow-y: hidden;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  color: ${(props) => props.theme.textColor};
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  height: fit-content;
  padding: 1rem;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(props) => props.theme.iconShadow};
  border-radius: 12px;
  row-gap: 1.5rem;
`;

const InputField = styled.input`
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.inputFieldShadow};
  outline: none;
  border: none;
  height: 3rem;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  :focus {
    outline: 2px solid ${(props) => props.theme.textColor};
  }
  ::placeholder {
    color: ${(props) => props.theme.textColor};
    opacity: 0.5;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const LabelText = styled.label`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textColor};
`;


export { FullScreen, Form, InputField, InputWrapper, LabelText };
