import styled from "styled-components";

export const CommonButton = styled.button`
  color: white;
  font-weight: 500;
  border-radius: 4px;
  height: 38px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  /* width: 120px; */
  cursor: pointer;
`;
export const AddTaskBtn = styled(CommonButton)`
  background-color: #646ff0;
  width: 120px;
`;
//changing btn name and reusing
export const SaveAddBtn = styled(AddTaskBtn)``;

export const NoTodo = styled(CommonButton)`
  background-color: #dedfe1;
  color: black;
  cursor: auto;
`;
export const DivItems = styled.div`
  background-color: #ecedf6;
  width: 100%;
  max-width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-top: 20px;
`;
export const TaskplannerHeading = styled.div`
  margin: 10px 0 10px 0;
`;
export const OuterAddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
