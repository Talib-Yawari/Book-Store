//backend/connection/conn.js
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://talib:talib123@mycluster.bdp8ye9.mongodb.net/BookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected Successfully"));
