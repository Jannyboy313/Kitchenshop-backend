const questionController = require('../controller/template.js');
const express = require('express');

const router = express.Router();

router.get("/questionid", questionController.getQuestionWithId)
router.get("/question", questionController.getQuestion)
router.get("/questions", questionController.getQuestions)
router.get("/totalquestions", questionController.getTotalQuestions)
router.delete("/deletequestion", questionController.deleteQuestion)
router.post("/addquestion", questionController.addQuestion)
router.post("/addquestions", questionController.addQuestions)

module.exports = router;