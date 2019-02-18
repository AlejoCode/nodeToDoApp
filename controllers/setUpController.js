let toDos = require("../models/toDoModel");

module.exports = function(app) {
  app.get("/api/setUpToDos", function(req, res) {
    //Seed DataBase, means putting first data into DataBase
    let starterToDos = [
      {
        userName: "test",
        toDo: "pass the test with no errors",
        isDone: true,
        hasAttachment: false
      },
      {
        userName: "May",
        toDo:
          "exercitation minim exercitation culpa fugiat consequat voluptate eiusmod ex qui est anim",
        isDone: false,
        hasAttachment: true
      },
      {
        userName: "Boyd",
        toDo:
          "sit eu mollit cupidatat id dolore amet fugiat cillum proident occaecat minim",
        isDone: false,
        hasAttachment: false
      },
      {
        userName: "Roxanne",
        toDo:
          "enim reprehenderit adipisicing nostrud eu Lorem id ut qui veniam dolore consectetur",
        isDone: true,
        hasAttachment: true
      },
      {
        userName: "Hoover",
        toDo:
          "nostrud aliqua Lorem ex aliqua pariatur incididunt minim proident officia sunt enim",
        isDone: false,
        hasAttachment: true
      },
      {
        userName: "Chandler",
        toDo:
          "ex cupidatat id aliquip exercitation ad reprehenderit veniam occaecat duis eiusmod quis",
        isDone: false,
        hasAttachment: true
      },
      {
        userName: "Cummings",
        toDo:
          "dolore adipisicing ullamco amet laborum deserunt mollit nostrud veniam ipsum nisi proident",
        isDone: true,
        hasAttachment: true
      },
      {
        userName: "Bonner",
        toDo:
          "anim eiusmod anim do aliqua mollit ad qui officia cillum nostrud occaecat",
        isDone: false,
        hasAttachment: false
      },
      {
        userName: "Linda",
        toDo:
          "ipsum reprehenderit laboris incididunt tempor laboris pariatur officia incididunt quis sunt cupidatat",
        isDone: false,
        hasAttachment: false
      },
      {
        userName: "Belinda",
        toDo:
          "nostrud aliquip dolore anim elit in irure excepteur Lorem culpa qui proident",
        isDone: false,
        hasAttachment: false
      },
      {
        userName: "Amalia",
        toDo:
          "Lorem adipisicing velit officia nulla ad laborum eu labore in pariatur consectetur",
        isDone: false,
        hasAttachment: false
      },
      {
        userName: "Shaw",
        toDo:
          "occaecat sint tempor consectetur labore proident nisi excepteur aliquip elit consectetur consectetur",
        isDone: true,
        hasAttachment: true
      },
      {
        userName: "Lorie",
        toDo:
          "reprehenderit sit eiusmod Lorem fugiat elit nulla pariatur occaecat Lorem dolor culpa",
        isDone: false,
        hasAttachment: true
      },
      {
        userName: "Mattie",
        toDo:
          "elit qui pariatur eu ad in adipisicing duis dolor aute cupidatat non",
        isDone: true,
        hasAttachment: true
      },
      {
        userName: "Madden",
        toDo:
          "cupidatat cillum aliqua officia eiusmod consectetur esse incididunt elit veniam culpa esse",
        isDone: true,
        hasAttachment: false
      },
      {
        userName: "Madeline",
        toDo:
          "cupidatat laboris cillum nulla dolore cillum ea sunt quis irure magna aliqua",
        isDone: true,
        hasAttachment: true
      }
    ];

    toDos.create(starterToDos, function(err, results) {
      res.send(results);
    });
  });
};
