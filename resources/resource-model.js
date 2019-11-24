const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db("resource");
}

function getById(id) {
  return db("resource").where({ id });
}

function add(resource) {
  return db("resource").insert(resource);
}
