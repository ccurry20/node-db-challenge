exports.seed = function(knex, Promise) {
  return knex("resource").insert([
    {
      resource_name: "hammer",
      resource_description: "tool"
    },
    {
      resource_name: "Lambda Student",
      resource_description: "a soon to be hired developer"
    },
    {
      resource_name: "HP laptop",
      resource_description: "computer"
    },
    {
      resource_name: "screwdriver",
      resource_description: "tools"
    },
    {
      resource_name: "hat",
      resource_description: "hard hat"
    },
    {
      resource_name: "glue",
      resource_description: "super glue"
    }
  ]);
};
