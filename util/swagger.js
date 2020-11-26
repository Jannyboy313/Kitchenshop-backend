module.exports = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Rest-api-ipsen2-project",
        "description": "An api that ensures the database connection"
    },
    "host": process.env.SERVER,
    "tags": [
        {
            "name": "Questions",
            "description": "Api for questions in the database"
        },
        {
            "name": "Answers",
            "description": "Api for Answers in the database"
        },
        {
            "name": "Login",
            "description": "Api for login in the database"
        },
        {
            "name": "Forms",
            "description": "Api for forms in the database"
        }
    ],
    "paths": {
        "/questionid": {
            "get": {
                "tags": [
                    "Questions"
                ],
                "summary": "Returns the question with given ID",
                "description": "Give the ID of the question thats needed in the query parameters\nSee the example of swagger",
                "parameters": [
                    {
                        "in": "query",
                        "name": "id",
                        "schema": {
                            "type": "integer"
                        },
                        "description": "The id of the needed question"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/question"
                        }
                    },
                    "404": {
                        "description": "Question not found",
                    }
                }
            }
        },
        "/question": {
            "get": {
                "tags": [
                    "Questions"
                ],
                "summary": "Returns question from the list with questions",
                "description": "Get the question from the list.\n It starts with a 1.\n Get the totalcount first so you know which questions U can pick.\n This can be used for nextquestion",
                "parameters": [
                    {
                        "in": "query",
                        "name": "form_name",
                        "schema": {
                            "type": "string"
                        },
                        "description": "The name of the form"
                    },
                    {
                        "in": "query",
                        "name": "form_versionnumber",
                        "schema": {
                            "type": "integer"
                        },
                        "description": "The versionnumber of the form"
                    },
                    {
                        "in": "query",
                        "name": "orderNumber",
                        "schema": {
                            "type": "integer"
                        },
                        "description": "Which question of the list with questions"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/question"
                        }
                    },
                    "404": {
                        "description": "Question not found",
                    }
                }
            }
        },
        "/questions": {
            "get": {
                "tags": [
                    "Questions"
                ],
                "summary": "Returns an array with questions",
                "description": "Returns an array with all the questions of the requested form",
                "parameters": [
                    {
                        "in": "query",
                        "name": "form_name",
                        "schema": {
                            "type": "string"
                        },
                        "description": "The form name"
                    },
                    {
                        "in": "query",
                        "name": "form_versionnumber",
                        "schema": {
                            "type": "string"
                        },
                        "description": "The versionnumber of the form"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/questions"
                        }
                    },
                    "500": {
                        "description": "Questions have not been found. Check given values",
                    }
                }
            }
        },
        "/totalquestions": {
            "get": {
                "tags": [
                    "Questions"
                ],
                "summary": "Returns the total questions of a form",
                "description": "This url is needed when wanting to use /question\nThis can also be used to know how many questions are there",
                "parameters": [
                    {
                        "in": "query",
                        "name": "form_name",
                        "schema": {
                            "type": "string"
                        },
                        "description": "The name of the form"
                    },
                    {
                        "in": "query",
                        "name": "form_versionnumber",
                        "schema": {
                            "type": "integer"
                        },
                        "description": "The versionnumber of the form"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/questions"
                        }
                    },
                    "500": {
                        "description": "There are no questions with that form",
                    }
                }
            }
        },
        "/deletequestion": {
            "delete": {
                "tags": [
                    "Questions"
                ],
                "summary": "Deletes a question",
                "description": "This deletes a question with given ID",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                }
                            }
                        },
                        "description": "The id of the question in JSON"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Deleted question"
                    },
                    "404": {
                        "description": "Questiond didn't exist"
                    }
                }
            }
        },
        "/addquestion": {
            "post": {
                "tags": [
                    "Questions"
                ],
                "summary": "Adds a question",
                "description": "This adds a single question to the specific form",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "question": {
                                    "type": "string"
                                },
                                "form_name": {
                                    "type": "string"
                                }
                            }
                        },
                        "description": "The question and form_name in JSON"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Added question",
                    },
                    "500": {
                        "description": "Question has not been added. Check values you've sent"
                    }
                }
            }
        },
        "/addquestions": {
            "post": {
                "tags": [
                    "Questions"
                ],
                "summary": "Adding multiple questions at once",
                "description": "This adds questions to a specific form\nQuestions need to be send in body",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "description": "You have to send the JSON in this form to the api\nIts **important** that the names are correct\nQuestion id is not necessary to send with",
                        "schema": {
                            "$ref": "#/definitions/questionsPost"
                        }
                    },
                ],
                "responses": {
                    "201": {
                        "description": "Added questions",
                    },
                    "500": {
                        "description": "Questions have not been added. Check values you've sent"
                    }
                }
            }
        },
        "/addanswer": {
            "post": {
                "tags": [
                    "Answers"
                ],
                "summary": "Adds an answer",
                "description": "You send an answer it doesn't matter if its already sent.\nThe api will see if it needs to be updated or added.\n**Important**\nAlways send the answer.",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "answer": {
                                    "type": "string"
                                },
                                "username": {
                                    "type": "string"
                                },
                                "questionid": {
                                    "type": "integer"
                                }
                            }
                        },
                        "description": "The answer, username and questionid in JSON"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Answer added",
                    },
                    "500": {
                        "description": "Answer has not been added. Check values you've sent"
                    }
                }
            }
        },
        "/deleteanswer": {
            "delete": {
                "tags": [
                    "Answers"
                ],
                "summary": "Deletes an answer",
                "description": "This deletes an answer with given username and questionid\nReturns a string that says if it succeeded",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "questionid": {
                                    "type": "integer"
                                }
                            }
                        },
                        "description": "The username and questionid in JSON"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Answer deleted",
                    },
                    "404": {
                        "description": "Answer didn't exist",
                    }
                }
            }
        },
        "/answer": {
            "get": {
                "tags": [
                    "Answers"
                ],
                "summary": "Returns an answer",
                "description": "This returns a single answer with given username and questionid",
                "parameters": [
                    {
                        "in": "query",
                        "name": "username",
                        "schema": {
                            "type": "String"
                        },
                        "description": "The username that filled in the answer"
                    },
                    {
                        "in": "query",
                        "name": "questionid",
                        "schema": {
                            "type": "integer"
                        },
                        "description": "The question id that has been answered"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/answer"
                        }
                    },
                    "404": {
                        "description": "Answer has not been found"
                    }
                }
            }
        },
        "/login": {
            "post": {
                "tags": [
                    "Login"
                ],
                "summary": "Returns the username and permission",
                "description": "This is used to validate the login and seeing if its an admin or user",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                }
                            }
                        },
                        "description": "The username and password in JSON"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/login"
                        }
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            }
        },
        "/userforms": {
            "get": {
                "tags": [
                    "Forms"
                ],
                "summary": "Returns an array with forms for the user",
                "description": "Returns all forms that are visible with the highest versionnumber",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/forms"
                        }
                    },
                    "404": {
                        "description": "No user forms found"
                    }
                }
            }
        },
        "/adminforms": {
            "get": {
                "tags": [
                    "Forms"
                ],
                "summary": "Returns an array with forms for the admin",
                "description": "Returns all forms that are visible and invisible with the highest versionnumber",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/forms"
                        }
                    },
                    "404": {
                        "description": "No admin forms found"
                    }
                }
            }
        },
        "/addform": {
            "post": {
                "tags": [
                    "Forms"
                ],
                "summary": "Adds a form",
                "description": "This adds a form with given name",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        },
                        "description": "The name of the form in JSON"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Form added",
                    },
                    "404": {
                        "description": "Form has not been added"
                    }
                }
            }
        },
        "/updateformstate": {
            "put": {
                "tags": [
                    "Forms"
                ],
                "summary": "Updates the form state",
                "description": "This updates the form state for given name\nAutomaticly picks the highest version of the form",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "state": {
                                    "type": "integer"
                                }
                            }
                        },
                        "description": "The name of the form\nThe state you want it to be:\n**0** is Invisible\n**1** is Visible\n**2** is Removed\nin JSON"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Formstate updated",
                    },
                    "400": {
                        "description": "Formstate has not been updated. Check given values. HINT: Form might already be in that state"
                    }
                }
            }
        },
        "/updateformname": {
            "put": {
                "tags": [
                    "Forms"
                ],
                "summary": "Updates the form name",
                "description": "With this url you can update the form name.\nIt makes a new form with the new name and adds all the questions from the old form.\nIt sets the old form on deleted (2).\nCurrentstate will set the state of the new form.\n**Important**\nCan't be used if questions have also been altered. Then use > /addform",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "oldname": {
                                    "type": "string"
                                },
                                "newname": {
                                    "type": "string"
                                },
                                "currentstate": {
                                    "type": "integer"
                                }
                            }
                        },
                        "description": "The oldname of the form\nThe newname of the form\nThe currentstate of the old form"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "Formname has not been updated. Check given values. Old form can be in state 2 now check database"
                    }
                }
            }
        },
    },
    "definitions": {
        "answer": {
            "type": "object",
            "properties": {
                "answer": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "DATE"
                },
                "username": {
                    "type": "string"
                },
                "questionId": {
                    "type": "string"
                }
            }
        },
        "question": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "question": {
                    "type": "string"
                },
                "form_versionnumber": {
                    "type": "integer"
                },
                "form_name": {
                    "type": "string"
                }
            }
        },
        "questionPost": {
            "type": "object",
            "properties": {
                "question": {
                    "type": "string"
                },
                "form_name": {
                    "type": "string"
                }
            }
        },
        "form": {
            "type": "object",
            "properties": {
                "versionnumber": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "state": {
                    "type": "integer"
                },
                "timestamp": {
                    "type": "DATE"
                }
            }
        },
        "questions": {
            "type": "array",
            "items": {
                "oneOf": [
                    {"$ref": "#/definitions/question"},
                    {"$ref": "#/definitions/question"},
                    {"$ref": "#/definitions/question"}
                ]
            }
        },
        "questionsPost": {
            "type": "array",
            "items": {
                "oneOf": [
                    {"$ref": "#/definitions/questionPost"},
                    {"$ref": "#/definitions/questionPost"},
                    {"$ref": "#/definitions/questionPost"}
                ]
            }
        },
        "forms": {
            "type": "array",
            "items": {
                "oneOf": [
                    {"$ref": "#/definitions/form"},
                    {"$ref": "#/definitions/form"},
                    {"$ref": "#/definitions/form"}
                ]
            }
        },
        "login": {
            "type": "object",
            "properties": {
                "username": {
                    "type": "string"
                },
                "permission": {
                    "type": "string"
                }
            }
        }
    }
}