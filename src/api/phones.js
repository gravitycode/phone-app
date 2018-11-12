import { Router } from "express";
import phoneServices from '../services/phones';

export default {

	find(req, res) {
    res.send(phoneServices.find());
	},

  routes() {
    const router = new Router();

    // search
    router.get("/", this.find);
    return router;
  }

}
