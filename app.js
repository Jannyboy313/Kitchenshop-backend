const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerdocument = require("./util/swagger")
const cors = require('cors');
require('dotenv/config');

const loginRouter = require('./routes/loginRouter.js');
const productRouter = require('./routes/productRouter.js');
const orderRouter = require('./routes/orderRouter.js')

const app = express();


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdocument));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//ROUTES
app.use(loginRouter);
app.use(productRouter);
app.use(orderRouter);

//LISTENER
app.listen(process.env.PORT, () => {
    console.log('Listening to port ' + process.env.PORT);
});
