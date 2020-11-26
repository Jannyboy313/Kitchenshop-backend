const db = require('../connection.js');
const QuestionModel = require('../../model/template.js');
const formQueriesHelper = require('../helper/formQueriesHelper.js');

// Returns a model
exports.getQuestionById = async(id) => {
    let queryReply;
    try {
        queryReply = await db.sequelize.query(
            "SELECT * FROM question " +
            "WHERE id = " + id
        );
    }catch(err) {
        console.error(err.message);
    }
    queryReply = queryReply[0][0]
    return new QuestionModel(queryReply.id, queryReply.question, queryReply.form_versionnumber, queryReply.form_name );
}

// Returns a model
exports.getQuestion = async(form_name, form_versionnumber, orderNumber) => {
    let queryReply;
    try {
        queryReply = await db.sequelize.query(
            "SELECT id, question, form_versionnumber, form_name FROM " +
            "(SELECT *, ROW_NUMBER () OVER (ORDER BY id ASC) " +
            "FROM question WHERE (form_name = '" + form_name +
            "' AND form_versionnumber = '" + form_versionnumber +
            "')) x " +
            "WHERE ROW_NUMBER = " + orderNumber
        );
    }catch(err) {
        console.error(err.message);
    }
    queryReply = queryReply[0][0]
    return new QuestionModel(queryReply.id, queryReply.question, queryReply.form_versionnumber, queryReply.form_name );
}

// Returns an Integer
exports.getTotalQuestions = async(form_name, form_versionnumber) => {
    let queryReply;
    try {
        queryReply = await db.sequelize.query(
            "SELECT count(*) FROM question " +
            "WHERE (form_name = '" + form_name +
            "' AND form_versionnumber = '" +
            form_versionnumber + "' )"
        );
    }catch(err) {
        console.error(err.message);
    }
    return queryReply[0][0].count;
}

// Returns a string
exports.deleteQuestion = async(id) => {
    let queryReply;
    try {
        queryReply = await db.sequelize.query(
            "DELETE FROM question " +
            "WHERE id = " + id
        );
    }catch(err) {
        console.error(err.message);
        return err.message;
    }
    return true;
}

// Returns a string
exports.addQuestion = async(question) => {
    let queryReply;
    try {
        versionnumber = await db.sequelize.query(formQueriesHelper.getVersionnumber(question.form_name))
        queryReply = await db.sequelize.query(
            "INSERT INTO question (question, " +
            "form_name, form_versionnumber) " +
            "VALUES ( '" + question.question + "', " +
            "'" + question.form_name + "', " +
            versionnumber[0][0].versionnumber + ")"
        );
    }catch(err) {
        console.error(err.message);
        return err.message;
    }
    return true;
}

// Returns a string
exports.addQuestions = async(questions) => {
    let versionnumber;
    try {
        versionnumber = await db.sequelize.query(formQueriesHelper.getVersionnumber(questions[0].form_name))
        questions.forEach(async(element) => {
            await db.sequelize.query(
                "INSERT INTO question(question, form_versionnumber, " +
                "form_name) VALUES('" + element.question + "', '" +
                versionnumber[0][0].versionnumber + "', '" + element.form_name + "')"
            )
        });
    }catch(err) {
        console.log(err.message)
        return err.message;
    }
    return true;
}

// Returns an array of models
exports.getQuestions = async(form_name, form_versionnumber) => {
    let queryReply;
    try {
        queryReply = await db.sequelize.query(
            "SELECT * FROM question " +
            "WHERE (form_name = '" + form_name +
            "' AND form_versionnumber = '" +
            form_versionnumber + "' ) " +
            "ORDER BY id ASC"
        );
    }catch(err) {
        console.error(err.message);
    }
    const models = [];
    queryReply[0].forEach( (item, index) => {
        models[index] = new QuestionModel(item.id, item.question, item.form_versionnumber, item.form_name );
    })
    return models;
}