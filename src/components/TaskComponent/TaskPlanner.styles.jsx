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

// export const BtnEditDeleteWrapper = styled(AddTaskBtn)``;

export const Todos = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 20px 8px;
  width: calc(100% - 20px);
`;
export const InnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
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
  flex-direction: column;
  row-gap: 5px;
  border-radius: 3px;
  margin-top: 20px;
  padding: 30px 10px;
`;
export const TaskplannerHeading = styled.div`
  margin: 10px 0 10px 0;
  background: transparent
    linear-gradient(262deg, #5dbaff 0%, #ffa5cb 38%, #db537f 63%, #615ad3 100%)
    0% 0% no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 25px;
`;
export const OuterAddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const EditBtn = styled.button`
  all: unset;
  width: 30px;
  display: inline-block;
`;
export const DeleteBtn = styled(EditBtn)``;

export const OuterDate = styled.div`
  position: absolute;
  top: 28px;
  left: 0px;
  font-size: 9px;
  font-weight: 600;
  color: cadetblue;
`;
