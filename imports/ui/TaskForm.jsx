import React, { useState } from "react";
import { TasksCollection } from "../api/TasksCollection";

export const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    } else {
      TasksCollection.insert({
        text: text.trim(),
        createdAt: new Date(),
      });

      setText("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to add new tasks"
      />
      <button type="submit">Add task</button>
    </form>
  );
};