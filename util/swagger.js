module.exports = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "iprwc",
        "description": "An api that ensures the database connection"
    },
    "host": process.env.SERVER,
    "tags": [
        {
            "name": "Login",
            "description": "Api for login in the database"
        },
    ],
    "paths": {
        "/login": {
            "post": {
                "tags": [
                    "Login"
                ],
                "summary": "Returns a token and user role",
                "description": "This is used to validate the login and seeing if its an admin or user",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "$ref": "#/definitions/login"
                        },
                        "description": "The email and password in JSON"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/loginresponse"
                        }
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            }
        },
        "/register": {
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
    },
    "definitions": {
        "login": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
            }
        },
        "loginresponse": {
            "type": "object",
            "properties": {
                "token": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                }
            }
        },
    }
}