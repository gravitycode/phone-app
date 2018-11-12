import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config.json';

import phoneController from './api/phones';
import orderController from './api/orders';

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// Api Controller
app.use(`${config.basePath}phones`, phoneController.routes());
app.use(`${config.basePath}orders`, orderController.routes());

// Error handler
app.use((error, request, response, next) => {
	if(error.code) {
    response.status(error.code).send({
			status: error.code,
      message: error.message
    });
	}else {
		next();
	}
});

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
