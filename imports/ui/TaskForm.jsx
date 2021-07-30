import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    } else {
      Meteor.call("tasks.insert", text);

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
