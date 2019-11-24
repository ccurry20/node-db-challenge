const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db("task");
}

function getById(id) {
  return db("task").where({ id });
}

function add(tasks) {
  return db("task").insert(tasks);
}
