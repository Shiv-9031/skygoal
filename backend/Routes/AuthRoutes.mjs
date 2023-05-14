import express from "express";
import {loginController, registerUserController} from "../controllers/authController.mjs"

const routes =express.Router()

//post method

routes.route("/register").post(registerUserController);

//login routes
routes.route("/login").post(loginController);

export default routes;