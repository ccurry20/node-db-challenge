exports.up = function(knex) {
  return knex.schema
    .createTable("resource", tbl => {
      tbl.increments();
      tbl
        .string("resource_name", 255)
        .notNullable()
        .unique();
      tbl.string("resource_description", 255);
    })

    .createTable("project", tbl => {
      tbl.increments();
      tbl.string("project_name", 255).notNullable();
      tbl.string("project_description", 255);
      tbl
        .boolean("project_complete")
        .notNullable()
        .default(false);
    })

    .createTable("task", tbl => {
      tbl.increments();
      tbl.string("task_description", 255).notNullable();
      tbl.string("task_notes", 255);
      tbl
        .boolean("task_complete")
        .notNullable()
        .default(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("project_resource", tbl => {
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("resource")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project")
    .dropTableIfExists("resource");
};
