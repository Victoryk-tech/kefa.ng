//middleware is like a middle man that dictates everything
//it is a callback function that can dictate response,err,request in our application
const dotenv = require("dotenv");
dotenv.config();

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const env = process.env.NODE_ENV || "production";

  if (env === "production") {
    res.status(statusCode).json({
      message: err.message,
      stack: err.stack,
      error: err,
    });
  } else {
    res.status(statusCode).json({
      message: "Something went wrong, Pls try again!",
    });
  }
};

module.exports = errorHandler;

// const errorMiddleware = (err, req, res, next) => {
//   //four parameter
//   console.log("here is an error middleware"); //to show if our middleware works
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "development" ? err.stack : null,
//   });
// };

// module.exports = errorMiddleware;
