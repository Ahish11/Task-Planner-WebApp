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

  const popupHandler = () => {
    setAddList(!addTaskList);
  };

  const handleInputValue = (getValueFromProperty) => {
    const newTask = { id: Date.now(), title: getValueFromProperty };
    setInputValue([...inputValue, newTask]);
    popupHandler();
  };

  const onDeleteHandler = (taskId) => {
    setInputValue(inputValue.filter((task) => task.id !== taskId));
  };

  const onEditHandler = (id) => {
    setInputValue(
      inputValue.map((items) =>
        items.id === id ? { ...items, isEditing: !items.isEditing } : items
      )
    );
  };

  const editTask = (editedTask, id) => {
    setInputValue((prevInputValue) =>
      prevInputValue.map((task) =>
        task.id === id ? { ...task, title: editedTask, isEditing: false } : task
      )
    );
  };

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
          {inputValue.length === 0 ? (
            <NoTodo>No Todo's Found</NoTodo>
          ) : (
            inputValue.map((inputValues) => (
              <Todos key={inputValues.id}>
                <div>
                  {inputValues.isEditing ? (
                    <EditComponent task={inputValues} editTodo={editTask} /> // Use EditComponent when editing
                  ) : (
                    <InnerRow>
                      <div>{inputValues.title}</div>
                      <InnerRow>
                        <DeleteBtn>
                          <AiOutlineDelete
                            style={{ margin: "0 8px 0 5px", cursor: "pointer" }}
                            onClick={() => onDeleteHandler(inputValues.id)}
                          />
                        </DeleteBtn>
                        <EditBtn onClick={() => onEditHandler(inputValues.id)}>
                          <FaRegEdit />
                        </EditBtn>
                      </InnerRow>
                    </InnerRow>
                  )}
                </div>
              </Todos>
            ))
          )}
        </DivItems>
      </ContainerBg>

      {addTaskList && (
        <AddTaskPopup
          removePopup={popupHandler}
          inputValfromAddTaskPopup={handleInputValue}
        />
      )}
    </>
  );
}
