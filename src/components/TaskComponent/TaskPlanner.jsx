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
import EditComponent from "../EditComponent";

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
  const [list, setList] = useState([]);

  // console.log("list", list);
  const popupHandler = () => {
    setAddList(!addTaskList); //shows popup
  };

  const submitHandler = (title, date) => {
    setList([...list, { id: list.length, title, date, isEditing: false }]);
    // console.log("date,title", title, date);
  };

  const onDeleteHandler = (listsId) => {
    setList(list.filter((lists) => lists.id !== listsId));
  };

  //display edit component
  const onEditHandler = (listId) => {
    setList(
      list.map((lists) =>
        lists.id === listId ? { ...lists, isEditing: true } : lists
      )
    );
  };

  const editPrevStateHandler = (getTitle, getId, getDates) => {
    setList((prevList) =>
      prevList.map((prevLists) =>
        prevLists.id === getId
          ? { ...prevLists, title: getTitle, date: getDates, isEditing: false }
          : prevLists
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
        </OuterAddTask>
        <DivItems>
          {list.length === 0 ? (
            <NoTodo>No Todo's Found</NoTodo>
          ) : (
            list.map((lists) => (
              <Todos key={lists.id}>
                <div>
                  {lists.isEditing ? (
                    <EditComponent
                      hasInputValue={lists}
                      hasEditHandler={editPrevStateHandler}
                    />
                  ) : (
                    <InnerRow>
                      <div>{lists.title}</div>
                      <OuterDate>{lists.date}</OuterDate>
                      <InnerRow>
                        <DeleteBtn>
                          <AiOutlineDelete
                            style={{ margin: "0 8px 0 5px", cursor: "pointer" }}
                            onClick={() => onDeleteHandler(lists.id)}
                          />
                        </DeleteBtn>
                        <EditBtn onClick={() => onEditHandler(lists.id)}>
                          <FaRegEdit style={{ cursor: "pointer" }} />
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
          inputValfromAddTaskPopup={submitHandler}
        />
      )}
    </>
  );
}
