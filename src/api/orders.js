import { Router } from "express";
import orderServices from '../services/orders';

export default {

	create(req, res) {
    res.send({ ...req.body, totalPrice: orderServices.create(req.body)});
	},

  routes() {
    const router = new Router();

    // search
    router.post("/", this.create);
    return router;
  }

}
