import React, { useState } from "react";
import styled from "styled-components";
import {
  AddTaskBtn,
  DivItems,
  NoTodo,
  OuterAddTask,
  TaskplannerHeading,
} from "./TaskPlanner.styles";
import AddTaskPopup from "./AddTaskPopup";

export default function TaskPlanner() {
  const [addTaskList, setAddList] = useState(false);

  const popupHandler = () => {
    setAddList(!addTaskList);
  };

  const ContainerBg = styled.div`
    background-color: #fcfdff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    /* margin: 30px auto;
    width: 50%; */
  `;

  return (
    <>
      <ContainerBg>
        <TaskplannerHeading>Task Planner</TaskplannerHeading>
        <OuterAddTask>
          <div>
            <AddTaskBtn onClick={popupHandler}>Add Task</AddTaskBtn>
          </div>
          <div>ALL</div>
        </OuterAddTask>
        <DivItems>
          <div></div>
          <NoTodo>No Todo's Found</NoTodo>
        </DivItems>
      </ContainerBg>
      {/* if modal is true then return */}
      {addTaskList && <AddTaskPopup removePopup={popupHandler} />}
    </>
  );
}
