const express = require("express");
const connectDB = require("./db/db");
const app = express();
const bodyParser = require("body-parser");
const notesRoutes = require("./routes/notesRoutes");
const PORT = process.env.PORT || 3000;

/* establish connection with mongoDB */
connectDB();

/* Middleware */
app.use(bodyParser.json());

/* routes */
app.use("/api/notes", notesRoutes);

/* error handler middleware */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

/* start the server */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
