import express from "express";
import {blogController} from "../controllers/blogController.mjs"

const routes = express.Router();

routes.route("/blog").post(blogController)


export default routes;