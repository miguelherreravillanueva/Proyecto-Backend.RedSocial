const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const { typeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config")

app.use(express.json())
dbConnection()

app.use('/posts', require('./routes/posts'));
app.use("/users", require('./routes/users'))
app.use("/comments", require('./routes/comments'))

app.use(typeError)

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));