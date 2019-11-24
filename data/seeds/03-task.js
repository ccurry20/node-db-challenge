exports.seed = function(knex, Promise) {
  return knex("task").insert([
    {
      task_description: "hammer the nail",
      task_notes: "use screwdriver",
      task_complete: false,
      project_id: 1
    },
    {
      task_description: "cook chicken",
      task_notes: "follow instructions",
      task_complete: false,
      project_id: 1
    },
    {
      task_description: "download software",
      task_notes: "get the HP laptop",
      task_complete: false,
      project_id: 2
    },
    {
      task_description: "Find new carpet",
      task_notes: "visit store",
      task_complete: false,
      project_id: 3
    },
    {
      task_description: "take new carpet",
      task_notes: "measure",
      task_complete: false,
      project_id: 3
    }
  ]);
};
