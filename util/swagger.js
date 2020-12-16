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
            "description": "Requests regarding the login"
        },
        {
            "name": "Products",
            "description": "Requests regarding product finding/altering"
        }
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
                        "description": {"error": "Email or Password incorrect"}
                    }
                }
            }
        },
        "/register": {
            "post": {
                "tags": [
                    "Login"
                ],
                "summary": "Returns a statuscode and the proccessed data",
                "description": "This is used for registering a new customer",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "user": {
                                    "type": "object",
                                    "properties": {
                                        "firstname": {
                                            "type": "string"
                                        },
                                        "middlename": {
                                            "type": "string"
                                        },
                                        "lastname": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string"
                                        },
                                        "password": {
                                            "type": "string"
                                        }
                                    },
                                },
                                "address": {
                                    "type": "object",
                                    "properties": {
                                        "city": {
                                            "type": "string"
                                        },
                                        "street_address": {
                                            "type": "string"
                                        },
                                        "zipcode": {
                                            "type": "string"
                                        },
                                },
                            },
                        },
                        "description": "The username and password in JSON"
                    }
                }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/user"
                        },
                    },
                    "406": {
                        "description": {"error": "error message"}
                    }
                }
            }
        },
        "/product": {
            "get": {
                "tags": [
                    "Products"
                ],
                "summary": "Returns the requested product data",
                "description": "This is used for collecting data from single product",
                "parameters": [
                    {
                        "in": "query",
                        "name": "productnumber",
                        "schema": {
                            "type": "integer",
                        },
                        "description": "The productnumber of needed product information"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/product"
                        },
                    },
                    "404": {
                        "description": {"error": "Product not found"}
                    }
                }
            }
        },
        "/products": {
            "get": {
                "tags": [
                    "Products"
                ],
                "summary": "Returns all products",
                "description": "This is used for collecting data from single product",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/products"
                        },
                    },
                    "404": {
                        "description": {"error": "No products exist"}
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
        "product": {
            "type": "object",
            "properties": {
                "productnumber": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "price": {
                    "type": "string"
                },
                "stock": {
                    "type": "string"
                },
                "category": {
                    "type": "string"
                },
            }
        },
        "products": {
            "type": "array",
            "items": {
                "oneOf": [
                    {"$ref": "#/definitions/product"},
                    {"$ref": "#/definitions/product"},
                    {"$ref": "#/definitions/product"}
                ]
            }
        },
        "user": {
            "type": "object",
            "properties": {
                "role": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer"
                },
                "firstname": {
                    "type": "string"
                },
                "middlename": {
                    "type": "string"
                },
                "lastname": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "address_id": {
                    "type": "string"
                }
            },
        }
    }
}