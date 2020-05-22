const express = require("express");
const dotenv = require("dotenv");
const path = require('path')
dotenv.config();

require('./db/mongoose')

const userRouter = require('./routes/user')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRouter)

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
