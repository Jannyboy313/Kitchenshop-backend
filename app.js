const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerdocument = require("./util/swagger")

const loginRouter = require('./routes/loginRouter.js');
const templateRouter = require('./routes/template.js');

const app = express();


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdocument));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//ROUTES
app.use(loginRouter)
app.use(templateRouter)

//LISTENER
app.listen(process.env.PORT, () => {
    console.log('Listening to port ' + process.env.PORT)
});
