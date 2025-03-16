import NOTE from "../models/notes.model.js";

const createNote = async (req, res) => {
  try {
    const { _id } = req;
    const { title, content, status } = req.body;

    const createObj = {
      title: title,
      content: content,
      status: status,
      userId: _id,
    };

    const note = await NOTE.create(createObj);

    return res.status(201).json({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};
const getAllNotes = async (req, res) => {
  try {
    const { _id } = req;

    const allNotes = await NOTE.find({ userId: _id });

    return res.json({
      success: true,
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { _id } = req;
    const { id } = req.params;

    const notesById = await NOTE.find({ _id: id, userId: _id });

    return res.json({
      success: true,
      data: notesById,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = await NOTE.findByIdAndUpdate(id, req.body);

    return res.json({
      success: true,
      message: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await NOTE.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: deletedData,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      error: error.message,
    });
  }
};

export default { getAllNotes, getNoteById, updateNote, deleteNote, createNote };
