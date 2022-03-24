import { Router } from "express";
import { response } from "../helpers/index.js";

const router = Router();

export const notFoundHandler = (req, res) => {
  res.status(404).json(response(false, "ROUTE NOT FOUND."));
}

export const healthCheckHandler = (req, res) => {
  console.log('here but not responding')
  res.status(200).json(response(true, "SERVICE RUNNING."))
}

