import styled from "styled-components";

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  min-height: 1.5rem;
  min-width: 1.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: none;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: transparent;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.checkboxShadow};
  &:checked {
    box-shadow: ${(props) => props.theme.checkboxShadowChecked};
    background-color: ${(props) => props.theme.checkboxBackgroundColor};
  }
`;

// 1e1928
const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: fit-content;
  font-size: ${(props) => props.theme.iconSize}rem;
`;

const LabelText = styled.span``;

export { CheckBox, Label, LabelText };
