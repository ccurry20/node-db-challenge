const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then(project => {
      const completeProject = {
        ...project[false],
        completed: !!+`${project.completed}`
      };

      if (!project[0]) {
        return res.status(404).json({ message: "Invalid project id" });
      } else {
        res.status(200).json(completeProject);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching project" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  if (!project.project_name) {
    return res.status(404).json({ message: "No project name" });
  }

  Projects.add(project)
    .then(adds => {
      res.status(201).json(adds);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding project" });
    });
});

router.get("/:id/task", (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(tasks => {
      console.log(tasks);
      if (!tasks[0]) {
        res.status(404).json({ message: "Invalid project id" });
      } else {
        res.status(200).json(tasks);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching tasks" });
    });
});

router.post("/:id/task", (req, res) => {
  const { id } = req.params;
  const task = req.body;

  Projects.getById(id).then(project => {
    if (!project[0]) {
      return res.status(404).json({ message: "Invalid Project id" });
    }
    if (!task.task_description) {
      return res.status(404).json({ message: "No task description" });
    }
    Projects.addTask(id, task)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: "Error adding task" });
      });
  });
});

module.exports = router;
