import styled from "styled-components";
import { CommonButton } from "./TaskPlanner.styles";

export const ParaAddTask = styled.p`
  font-size: 16px;
  color: #6e7388;
`;

export const Overlay = styled.div`
  /* background-color: #ecedf6; */
  position: fixed;
  inset: 0;
  background-color: rgba(77, 77, 77, 0.5);
  cursor: pointer;
  transition: all 0.2s;
  /* background: rgba(255, 255, 255, 0.02); */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.7px);
`;

export const CancelBtn = styled(CommonButton)`
  background-color: #cccdde;
  width: 120px;
  color: rgb(104, 114, 146);
  margin-left: 20px;
`;
export const SaveTaskAdd = styled(CommonButton)`
  background-color: #646ff0;
  width: 120px;
`;
export const PopupInner = styled.div`
  background-color: rgb(236, 237, 246);
  position: relative;
  inset: 0;
  width: 50%;
  border-radius: 3px;
  padding: 20px 20px;
`;
export const PopupOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddLabel = styled.label`
  color: rgb(153, 138, 151);
  font-size: 14px;
  margin: 12px 8px 4px 0;
`;
export const AddInput = styled.input`
  outline: 0px;
  border: 0;
  padding: 12px 4px;
  margin-bottom: 30px;
`;
export const WraperInputLabel = styled.div`
  display: flex;
  flex-direction: column;
`;
