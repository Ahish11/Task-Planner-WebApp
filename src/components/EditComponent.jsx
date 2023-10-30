import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function EditComponent({ hasEditHandler, hasInputValue }) {
  const [value, setValue] = useState(hasInputValue.title);
  // const [emtyTitleEdit, setemtyTitleEdit] = useState(false);

  const [cursorStyle, setCursorStyle] = useState("pointer");

  const EditSubmitHandler = (e) => {
    e.preventDefault();
    if (value.length !== 0) {
      hasEditHandler(value, hasInputValue.id);
    }
    //  else {
    //   setCursorStyle("not-allowed");
    // }
  };

  return (
    <div>
      <form
        // onSubmit={EditSubmitHandler}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          style={{ border: 0, fontSize: "13px", outline: 0, width: "86%" }}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value.trimStart());
            if (e.target.value.length !== 0) {
              setCursorStyle("pointer");
            } else {
              setCursorStyle("not-allowed");
            }
          }}
        />
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
