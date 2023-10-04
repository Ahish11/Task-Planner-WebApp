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
  const ContainerBg = styled.div`
    background-color: #fcfdff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  `;

  //popup
  const [addTaskList, setAddList] = useState(false);
  // shows input val
  const [inputValue, setInputValue] = useState("");

  const popupHandler = () => {
    setAddList(!addTaskList);
  };

  const handleInputValue = (getValueFromProperty) => {
    setInputValue(getValueFromProperty); // Update the input value in the TaskPlanner component
    // popupHandler(); // Close the popup after getting the input value
    console.log(getValueFromProperty);
  };

  //ifelse approach
  let content = null;
  if (inputValue) {
    content = <p>{inputValue}</p>;
  } else {
    content = <NoTodo>No Todo's Found</NoTodo>;
  }

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
          {/* ifelse */}
          {/* {content} */}
          {/* ternary */}
          {/* removing default empty list */}
          {inputValue ? <p>{inputValue}</p> : <NoTodo>No Todo's Found </NoTodo>}
        </DivItems>
      </ContainerBg>
      {/* if modal is true then return */}
      {addTaskList && (
        <AddTaskPopup
          removePopup={popupHandler}
          inputValfromAddTaskPopup={handleInputValue}
        />
      )}
    </>
  );
}
