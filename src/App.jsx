import { useState } from "react";
import TaskPlanner from "./components/TaskPlanner";
import AddTask from "./components/AddTaskPopup";

function App() {
  return (
    <>
      <TaskPlanner />
      <AddTask />
    </>
  );
}

export default App;
