import React, { useRef, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function EditComponent({ hasEditHandler, hasInputValue }) {
  const [value, setValue] = useState(hasInputValue.title);
  const getEnteredDate = useRef();

  const [cursorStyle, setCursorStyle] = useState("pointer");

  const EditSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(value, "value");
    const getCurrentDate = getEnteredDate.current.value;
    const [year, month, day] = getCurrentDate.split("-");
    const formattedDates = `${day}/${month}/${year}`;
    // console.log("formattedDates", formattedDates);
    if (value.length !== 0 && getEnteredDate.length !== 0) {
      hasEditHandler(value, hasInputValue.id, formattedDates);
    } else {
      setCursorStyle("not-allowed");
    }
  };

  const a =(e)=>{
    (e) => {
      setValue(e.target.value.trimStart());
      if (e.target.value.length !== 0 && getEnteredDate.length !== 0) {
        setCursorStyle("pointer");
      } else {
        setCursorStyle("not-allowed");
      }
    }
  }

  return (
    <div>
      <form
        // onSubmit={EditSubmitHandler}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          rowGap: "9px",
        }}
      >
        <input
          style={{ border: 0, fontSize: "13px", outline: 0, width: "86%" }}
          type="text"
          value={value}
          onChange={a}
        />
        <input type="date" ref={getEnteredDate} />
        <button
          className="test"
          // onClick={updateHandler}
          type="submit"
          style={{
            all: "unset",
            display: "inline-block",
            cursor: cursorStyle,
          }}
        >
          {/* save edit btn */}
          <IoMdCheckmark
            style={{ width: "30px" }}
            onClick={EditSubmitHandler}
          />
        </button>
      </form>
    </div>
  );
}
