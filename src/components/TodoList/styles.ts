import styled from "styled-components";

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  align-items: center;
  padding: 1.2rem 0;
  gap: 2rem;
`;

const EmptyTodoList = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  max-width: 30rem;
  font-size: 1.5rem;
  background: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.iconShadow};
`;

export { TodoList, EmptyTodoList };
