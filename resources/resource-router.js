const express = require("express");

const Resources = require("./resource-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.get()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching resources" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.getById(id)
    .then(resource => {
      if (!resource[0]) {
        res.status(404).json({ message: "Invalid resource ID" });
      } else {
        res.status(200).json(resource);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching resource" });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;

  Resources.add(resource)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding resource" });
    });
});

module.exports = router;
