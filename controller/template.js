const questionQueries = require("../DOW/queries/template.js");

// Returns a model
exports.getQuestionWithId = async(req, res, next) => {
    const id = req.query.id
    let reply;
    try{
        reply = await questionQueries.getQuestionById(id)
    } catch(err) {
        console.error(err.message);
    }
    if (typeof reply === 'object' && reply !== null) {
        res.status(200).send(reply)
    } else {
        res.status(404).send("Question not found")
    }
    res.end()
}

// Returns a model
exports.getQuestion = async(req, res) => {
    const form_name = req.query.form_name
    const form_versionnumber = req.query.form_versionnumber
    const orderNumber = req.query.ordernumber
    let reply;
    try{
        reply = await questionQueries.getQuestion(form_name, form_versionnumber, orderNumber)
    } catch(err) {
        console.error(err.message);
    }
    if (typeof reply === 'object' && reply !== null) {
        res.status(200).send(reply)
    } else {
        res.status(404).send("Question not found")
    }
    res.end()
}

// Returns an Integer
exports.getTotalQuestions = async(req, res) => {
    const form_name = req.query.form_name
    const form_versionnumber = req.query.form_versionnumber
    let reply
    try{
        reply = await questionQueries.getTotalQuestions(form_name, form_versionnumber)
    } catch(err) {
        console.error(err.message);
    }
    if (reply >= 0) {
        res.status(200).send(reply)
    } else {
        res.status(500).send("There are no questions with that form")
    }
    res.end()
}

// Returns a string which says if it succeeded
exports.deleteQuestion = async(req, res) => {
    const id = req.body
    let reply
    try{
        reply = await questionQueries.deleteQuestion(id.id)
    } catch(err) {
        console.error(err.message);
    }
    if (reply === true) {
        res.status(201).send("Deleted question")
    } else {
        res.status(404).send("Question didn't exist")
    }
    res.end()
}

// Returns a string which says if it succeeded
exports.addQuestion = async(req, res) => {
    const question = req.body
    let reply
    try{
        reply = await questionQueries.addQuestion(question)
    } catch(err) {
        console.error(err.message);
    }
    if (reply === true) {
        res.status(201).send("Added question")
    } else {
        res.status(500).send("Question has not been added. Check values you've sent")
    }
    res.end()
}

// Returns a string which says if it succeeded
exports.addQuestions = async(req, res) => {
    const questions = req.body
    let reply
    try{
        reply = await questionQueries.addQuestions(questions)
    } catch(err) {
        console.error(err.message);
    }
    if (reply === true) {
        res.status(201).send("Added questions")
    } else {
        res.status(500).send("Questions have not been added. Check values you've sent")
    }
    res.end()
}

// Returns an array with models
exports.getQuestions = async(req, res) => {
    const form_name = req.query.form_name
    const form_versionnumber = req.query.form_versionnumber
    let reply
    try{
        reply = await questionQueries.getQuestions(form_name, form_versionnumber)
    } catch(err) {
        console.error(err.message);
    }
    if (typeof reply[0] === 'object' && reply !== null) {
        res.status(200).send(reply)
    } else {
        res.status(500).send("Questions have not been found. Check given values")
    }
    res.end()
}