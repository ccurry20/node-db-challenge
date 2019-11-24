exports.seed = function(knex, Promise) {
  return knex("project").insert([
    {
      project_name: "Build House",
      project_description: "building new log home",
      project_complete: false
    },
    {
      project_name: "Write database",
      project_description: "create project database",
      project_complete: false
    },
    {
      project_name: "Put in carpet",
      project_description: "lay new flooring",
      project_complete: false
    }
  ]);
};
