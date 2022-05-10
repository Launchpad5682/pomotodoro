import styled, { css } from "styled-components";

const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-sizing: border-box;
`;

const Form = styled.form`
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  margin: 0 1rem;
  flex-direction: column;
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

const TextArea = styled.textarea`
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.inputFieldShadow};
  outline: none;
  border: none;
  height: 15rem;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  resize: none;
  :focus {
    outline: 2px solid ${(props) => props.theme.textColor};
  }
  ::placeholder {
    color: ${(props) => props.theme.textColor};
    opacity: 0.5;
  }
`;

const Close = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 1.5rem;
  padding: 0;
  align-self: flex-end;
`;

const sliderThumb = css`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 5px;
  background: ${(props) => props.theme.textColor};
  cursor: pointer;
`;

const RangeSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${(props) => props.theme.iconBackgroundColor};
  box-shadow: ${(props) => props.theme.inputFieldShadow};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  :focus {
    border: 1px solid ${(props) => props.theme.textColor};
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${sliderThumb}
  }

  ::-moz-range-thumb {
    ${sliderThumb}
  }
`;

const LabelText = styled.label`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textColor};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export {
  Modal,
  Form,
  InputField,
  TextArea,
  Close,
  RangeSlider,
  LabelText,
  InputWrapper,
};
