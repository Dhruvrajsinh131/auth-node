import { Router } from "express";
import notesContoller from "../controllers/note.controller.js";

const notesRouter = Router();

notesRouter.get("/", notesContoller.getAllNotes);
notesRouter.get("/:id", notesContoller.getNoteById);
notesRouter.post("/create", notesContoller.createNote);
notesRouter.put("/update/:id", notesContoller.updateNote);
notesRouter.delete("/delete/:id", notesContoller.deleteNote);

export default notesRouter;
