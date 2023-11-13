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

  const filteredValue = addInputVal.trimStart().length === 0;

  // const isEmptyHandler = () =>{}
  // addInputVal.filter((addInputVals) => addInputVals.title.trim().length === 0).length > 0; or
  // addInputVal.filter((addInputVals) => addInputVals.title.trim()).length <= 0;

  const saveTaskHandler = (e) => {
    e.preventDefault();
    const formattedDate = enteredDate.current.value;
    const [year, month, day] = formattedDate.split("-");
    const formattedDates = `${day}/${month}/${year}`;

    // formattedDate.length === 0 ? console.log("emty") : console.log("not emty");
    if (filteredValue) {
      setErrorMsg(true);
    } else if (formattedDate.length === 0) {
      setErrorMsgDate(true);
    } else {
      setErrorMsgDate(false);
      // const titles = addInputVal.map((item) => item.title);
      props.inputValfromAddTaskPopup(addInputVal, formattedDates); //title
      // props.enteredDateFromAddTaskPopup(formattedDates); //date
      props.removePopup(); //close popup
    }
  };

  const handleOnchange = (e) => {
    // setAddInputVal([{ title: e.target.value }]);
    setAddInputVal(e.target.value);
    setErrorMsg(false);
  };

  // //Add Task btn click
  // const filteredValue =
  //   addInputVal.filter((item) => item.title.trim().length > 0)[0]?.title || "";

  return (
    <>
      <form action="">
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
                // style={{
                //   border: errorMsg ? "1px solid red" : "1px solid #fafafa",
                // }}
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
