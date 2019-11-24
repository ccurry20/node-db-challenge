const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  add,
  getTasks,
  addTask
};

function get() {
  return db("project");
}

function getById(id) {
  return db("project").where({ id });
}

function add(projects) {
  return db("project").insert(projects);
}

function getTasks(id) {
  return db("project")
    .innerJoin("task", "task.project_id", "project.id")
    .select(
      "project.project_name",
      "project.project_description",
      "task.task_description",
      "task.task_notes",
      "task.task_complete",
      "task.project_id"
    )
    .where({ project_id: id });
}

function addTask(id, task) {
  return db("task")
    .where({ project_id: id })
    .insert(task);
}
