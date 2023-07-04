import { useState } from "react";
import {
  ParaAddTask,
  PopupInner,
  PopupOuter,
  AddLabel,
  WraperInputLabel,
  AddInput,
} from "./AddTaskPopup.styles";
import { Overlay, CancelBtn } from "./AddTaskPopup.styles";
import { AddTaskBtn, SaveAddBtn } from "./TaskPlanner.styles";

export default function AddTaskPopup(props) {
  const [addInputVal, setAddInputVal] = useState({ title: "" });
  const [errorMsg, setErrorMsg] = useState(false);

  const saveTaskHandler = (e) => {
    e.preventDefault();
    
    // or
    // if (!addInputVal.title.trim()) {
    if (addInputVal.title.trim().length === 0) {
      setErrorMsg(true);
      console.log("show error msg");
    } else {
      props.inputValfromAddTaskPopup(addInputVal.title);
      // props.removePopup(); // Close the popup after saving the task
    }
  };

  const handleOnchange = (e) => {
    setAddInputVal({
      title: e.target.value,
    });
    setErrorMsg(false);
  };
  return (
    <>
      <form action="">
        <Overlay onClick={props.removePopup}></Overlay>
        <PopupOuter>
          <PopupInner style={{ zIndex: "3", position: "relative", inset: "0" }}>
            <ParaAddTask>Add</ParaAddTask>
            <WraperInputLabel>
              <AddLabel>Title</AddLabel>
              <AddInput
                type="text"
                value={addInputVal.title}
                onChange={handleOnchange}
              />
              {errorMsg && <span>please enter something</span>}
            </WraperInputLabel>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SaveAddBtn onClick={saveTaskHandler}>Save Task</SaveAddBtn>
              <CancelBtn onClick={props.removePopup}>Cancel</CancelBtn>
            </div>
          </PopupInner>
        </PopupOuter>
      </form>
    </>
  );
}
