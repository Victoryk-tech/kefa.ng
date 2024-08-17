require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("./middleware/rateLimit");
const errorMiddleware = require("./middleware/errMiddleware");
const authRoute = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const usersRoute = require("./routes/usersRoute");
const app = express();
const cookieParser = require("cookie-parser");
const { protect } = require("./middleware/authMiddleware");

//refactor .env

const PORT = process.env.PORT || 8000;
const FRONTEND = process.env.FRONTEND;
const MONGO_URL = process.env.MONGO_URL;

//browsers to access this api via cors

const allowedOrigin = [
  "https://kefa-ng-gpnr.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];
const grantAccess = {
  origin: (origin, callback) => {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
  credentials: true,
  preflightContinue: false,
};

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);
app.use(cors(grantAccess));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rateLimit);
app.use(cookieParser());

//routes
app.use("/api/product", productRoutes);
app.use("/api/user", usersRoute);
app.use("/api/auth", authRoute);

//connect to mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("ConnecTeD!");
    app.listen(PORT, () => {
      console.log("Node Api is running on port 8000");
    });
  })
  .catch((err) => console.log("error"));

// routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/protected-route", protect, (req, res) => {
  res.send("You have accessed a protected route!");
});

// registration
//app.get("/", cors(), (req, res) => {});

//app.post("/login",);

//app.post("/signup",);

// app.listen(8000, () => {
//   console.log("port connected");
// });
