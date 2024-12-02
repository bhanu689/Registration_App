import express from "express"
import { createRegistration, deleteRegistration, getAllRegistrations, updateRegistration } from "../controllers/registrations.controller.js";

const indexRouter = express.Router()



indexRouter.post('/registrations', createRegistration);
indexRouter.get('/registrations', getAllRegistrations);
indexRouter.put('/registrations/:id', updateRegistration);
indexRouter.delete('/registrations/:id', deleteRegistration);


export {indexRouter}