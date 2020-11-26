class QuestionModel {
    constructor(id, question, form_versionnumber, form_name) {
        this.id = id
        this.question = question
        this.form_versionnumber = form_versionnumber
        this.form_name = form_name
    }
}

module.exports = (QuestionModel);