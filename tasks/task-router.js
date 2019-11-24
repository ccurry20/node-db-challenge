const express = require("express");

const Tasks = require("./task-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.get()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching tasks" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.getById(id)
    .then(task => {
      if (!task[0]) {
        res.status(404).json({ message: "Invalid task ID" });
      } else {
        res.status(200).json(task);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching task" });
    });
});

router.post("/", (req, res) => {
  const task = req.body;

  Tasks.add(task)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding task" });
    });
});

module.exports = router;
