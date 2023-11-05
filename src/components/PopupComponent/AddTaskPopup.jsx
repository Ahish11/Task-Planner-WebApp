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
  const [addInputVal, setAddInputVal] = useState([{ title: "" }]);
  const [errorMsg, setErrorMsg] = useState(false);
  const enteredDate = useRef();

  const isEmptyHandler = () =>
    // addInputVal.filter((addInputVals) => addInputVals.title.trim().length === 0).length > 0; or
    addInputVal.filter((addInputVals) => addInputVals.title.trim()).length <= 0;

  const saveTaskHandler = (e) => {
    e.preventDefault();
    console.log(enteredDate.current.value);
    if (isEmptyHandler()) {
      setErrorMsg(true);
    } else {
      const titles = addInputVal.map((item) => item.title);
      props.inputValfromAddTaskPopup(titles);//title
      props.enteredDateFromAddTaskPopup(enteredDate.current.value)//date
      props.removePopup();//close popup
    }
  };

  const handleOnchange = (e) => {
    setAddInputVal([{ title: e.target.value }]);
    setErrorMsg(false);
  };

  //Add Task btn click
  const filteredValue =
    addInputVal.filter((item) => item.title.trim().length > 0)[0]?.title || "";

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
                value={filteredValue}
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
                // value={filteredValue}
                ref={enteredDate}
                // onChange={handleOnchange}
              />
              {/* {errorMsg && <ErrorMsg>Please enter the title</ErrorMsg>} */}
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
