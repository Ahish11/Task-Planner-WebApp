import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import {
  AddTaskBtn,
  DivItems,
  InnerRow,
  NoTodo,
  OuterAddTask,
  TaskplannerHeading,
  Todos,
  EditBtn,
  DeleteBtn,
  OuterDate,
} from "./TaskPlanner.styles";
import AddTaskPopup from "../PopupComponent/AddTaskPopup";
import EditComponent from "../EditComponent"; // Import EditComponent

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

  const [addTaskList, setAddList] = useState(false); // Popup
  const [inputValue, setInputValue] = useState([]); // Task list
  const [enteredDate, setEnteredDate] = useState([]); // date

  console.log("enteredDate", enteredDate);

  const popupHandler = () => {
    setAddList(!addTaskList); //shows popup
  };

  //child to parent
  const handleInputValue = (getTitle) => {
    const newTask = { id: Date.now(), title: getTitle };
    setInputValue([...inputValue, newTask]);
    popupHandler(); //removes popup
  };
  const handleEnteredDate = (getEnteredDate) => {
    console.log("getEnteredDate", getEnteredDate);
    const newTasks = { id: Date.now(), dateValue: getEnteredDate };
    setEnteredDate([...enteredDate, newTasks]);
    popupHandler(); //removes popup
  };

  const onDeleteHandler = (getInpVal) => {
    setInputValue(
      inputValue.filter((inputValues) => inputValues.id !== getInpVal)
    );
  };

  // Edit btn
  const onEditHandler = (getInputValuesId) => {
    setInputValue(
      inputValue.map((inputValues) =>
        inputValues.id === getInputValuesId
          ? { ...inputValues, isEditing: !inputValues.isEditing }
          : inputValues
      )
    );
  };

  const editTaskHandler = (editedTitle, id) => {
    setInputValue((prevInputValue) =>
      prevInputValue.map((prevInputVal) =>
        prevInputVal.id === id
          ? { ...prevInputVal, title: editedTitle, isEditing: false } //updating the state with previous state value with new state value
          : prevInputVal
      )
    );
  };

  const result =
    inputValue.length === 0 ? (
      <NoTodo>No Todo's Found</NoTodo>
    ) : (
      inputValue.map((inputValues) => (
        <Todos key={inputValues.id}>
          <div>
            {inputValues.isEditing ? (
              <EditComponent
                hasInputValue={inputValues}
                hasEditHandler={editTaskHandler}
              /> // Use EditComponent when editing
            ) : (
              <InnerRow>
                <div>{inputValues.title}</div>
                {enteredDate.map((enteredDates) => (
                  <OuterDate>{enteredDates.dateValue}</OuterDate>
                ))}
                <InnerRow>
                  <DeleteBtn>
                    <AiOutlineDelete
                      style={{ margin: "0 8px 0 5px", cursor: "pointer" }}
                      onClick={() => onDeleteHandler(inputValues.id)}
                    />
                  </DeleteBtn>
                  <EditBtn onClick={() => onEditHandler(inputValues.id)}>
                    <FaRegEdit style={{ cursor: "pointer" }} />
                  </EditBtn>
                </InnerRow>
              </InnerRow>
            )}
          </div>
        </Todos>
      ))
    );
  return (
    <>
      <ContainerBg>
        <TaskplannerHeading>Task Planner</TaskplannerHeading>
        <OuterAddTask>
          <div>
            <AddTaskBtn onClick={popupHandler}>Add Task</AddTaskBtn>
          </div>
          {/* <div>ALL</div> */}
        </OuterAddTask>
        <DivItems>
          {result}
          <br />
        </DivItems>
      </ContainerBg>
      {addTaskList && (
        <AddTaskPopup
          removePopup={popupHandler}
          inputValfromAddTaskPopup={handleInputValue}
          enteredDateFromAddTaskPopup={handleEnteredDate}
        />
      )}
    </>
  );
}
