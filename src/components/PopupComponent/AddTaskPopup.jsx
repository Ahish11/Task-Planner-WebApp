import { useRef, useState } from "react";
import {
  ParaAddTask,
  PopupInner,
  PopupOuter,
  AddLabel,
  WraperInputLabel,
  AddInput,
  ErrorMsg,
} from "./AddTaskPopup.styles";
import { Overlay, CancelBtn } from "./AddTaskPopup.styles";
import { AddTaskBtn, SaveAddBtn } from "../TaskComponent/TaskPlanner.styles";

export default function AddTaskPopup(props) {
  const [addInputVal, setAddInputVal] = useState("");
  const enteredDate = useRef();
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorMsgDate, setErrorMsgDate] = useState(false);

  const filteredValue = addInputVal.length === 0;

  const saveTaskHandler = (e) => {
    e.preventDefault();
    const formattedDate = enteredDate.current.value;
    const [year, month, day] = formattedDate.split("-");
    const formattedDates = `${day}/${month}/${year}`;

    if (filteredValue && formattedDate.length === 0) {
      setErrorMsg(true);
      setErrorMsgDate(true);
      console.log("Please enter the title and date");
    } else if (filteredValue) {
      setErrorMsg(true);
      setErrorMsgDate(false);
      console.log("Please enter the title");
    } else if (formattedDate.length === 0) {
      setErrorMsg(false);
      setErrorMsgDate(true);
    } else {
      setErrorMsg(false);
      setErrorMsgDate(false);
      props.inputValfromAddTaskPopup(addInputVal, formattedDates);
      props.removePopup();
    }
  };

  const handleOnchange = (e) => {
    setAddInputVal(e.target.value.trimStart());
    setErrorMsg(false);
  };

  return (
    <>
      <form>
        <Overlay onClick={props.removePopup}></Overlay>
        <PopupOuter>
          <PopupInner style={{ zIndex: "3" }}>
            <ParaAddTask>Add</ParaAddTask>
            <WraperInputLabel>
              <AddLabel htmlFor="title">Title</AddLabel>
              <AddInput
                id="title"
                style={{
                  border: errorMsg ? "1px solid red" : "1px solid #fafafa",
                }}
                type="text"
                value={addInputVal}
                onChange={handleOnchange}
              />
              {errorMsg && <ErrorMsg>Please enter the title</ErrorMsg>}
            </WraperInputLabel>

            <WraperInputLabel>
              <AddLabel htmlFor="date">Date</AddLabel>
              <AddInput
                id="date"
                style={{
                  border: errorMsgDate ? "1px solid red" : "1px solid #fafafa",
                }}
                type="date"
                ref={enteredDate}
              />
              {errorMsgDate && <ErrorMsg>Please enter the Date</ErrorMsg>}
            </WraperInputLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <SaveAddBtn onClick={saveTaskHandler}>Save Task</SaveAddBtn>
              <CancelBtn onClick={props.removePopup}>Cancel</CancelBtn>
            </div>
          </PopupInner>
        </PopupOuter>
      </form>
    </>
  );
}
