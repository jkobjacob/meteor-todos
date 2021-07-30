import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";

const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      "First task",
      "Second task",
      "Third task",
      "Fourth task",
      "Fifth task",
      "Sixth task",
      "Seventh task",
    ].forEach(insertTask);
  }
});
