const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {

  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  gpa: { type: Sequelize.DECIMAL(3,2) ,min: 0.0, max: 4.0, allowNull: false },
  //gpa: { type: Sequelize.FLOAT, allowNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },

});

module.exports = Student;
