module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();

  tasksRouter.get('/', function(req, res) {
    res.send(
      {"tasks": [
        {
          "id": 1,
          "title": "learn to code",
          "description": "learn to code",
          "percentageComplete": 0

      },
      {
          "id": 2,
          "title": "learn to design",
          "description": "learn to code",
          "percentageComplete": 50
      }
    ]
    });
  });

  tasksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tasksRouter.get('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  tasksRouter.put('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  tasksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tasks', tasksRouter);
};
