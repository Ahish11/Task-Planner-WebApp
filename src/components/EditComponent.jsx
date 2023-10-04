import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function EditComponent({ editTodo, task }) {
  const [value, setValue] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
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
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          style={{ all: "unset", width: "39px", display: "inline-block" }}
        >
          <IoMdCheckmark />
        </button>
      </form>
    </div>
  );
}
