const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/my-database")
  .then((x) => {
    console.log("Connection to the database successful");
  })
  .catch((error) => {
    console.log(error);
  });
