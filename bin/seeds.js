require("../config/dbConnection");

const ShoeModel = require("../models/Shoe");

const shoe = {
  name: "Adidas",
  color: "black",
  price: 20,
};

ShoeModel.create(shoe)
  .then((shoeDocument) => {
    console.log(shoeDocument);
  })
  .catch((error) => {
    console.log(error);
  });
