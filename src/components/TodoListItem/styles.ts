import styled from "styled-components";

const TodoListItem = styled.div`
  box-sizing: border-box;
  margin: 0 1rem;
  padding: 1rem;
  width: 40rem;
  max-width: 90%;
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.iconShadow};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 1.4rem;
`;

export { TodoListItem, IconsContainer };
