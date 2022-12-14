const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const swaggerUI= require("swagger-ui-express")
const docs = require("./docs/index")
const { typeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config")
const cors = require ("cors")


app.use(express.json())
dbConnection()
app.use(cors())

app.use('/posts', require('./routes/posts'));
app.use("/users", require('./routes/users'))
app.use("/comments", require('./routes/comments'))
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.use(typeError)

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));