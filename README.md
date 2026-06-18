# Cocktail Recipe Management

Cocktail Recipe Management is a REST API built using Node.js, Express.js, and MongoDB. It allows users to manage cocktail recipes and perform CRUD (Create, Read, Update, and Delete) operations.

The application also includes user authentication with login and registration functionality. Protected routes can be accessed using an authorization token, and images are stored using Cloudinary.

## Features

* User registration
* User login
* JWT token-based authorization
* Add a new cocktail recipe
* View all cocktail recipes
* View a specific cocktail recipe by ID
* Update cocktail recipe details
* Delete a cocktail recipe
* Upload and store images using Cloudinary
* MongoDB integration using Mongoose
* RESTful API implementation

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Cloudinary
* Postman

## Running the Application

Start the server:

```bash
node server.js
```

The application will run on:

```text
http://localhost:3000
```

## Authentication

### Register User

**POST**

```text
/auth/register
```

### Login User

**POST**

```text
/auth/login
```

After logging in, an authorization token is generated. This token must be included in the request header to access protected routes like get all recipe and get recipe by id.

Example:

```text
Authorization: Bearer <your_token>
```

## API Endpoints

### Add a Recipe

**POST**

```text
/api/v1/add/recipe
```

### Get All Recipes

**GET**

```text
/api/v1/get/recipe
```

### Get a Recipe by ID

**GET**

```text
/api/v1/get/recipe/:id
```

Example:

```text
/ api/v1/get/recipe/68523a1a8b2d9f7d12345678
```

### Update a Recipe

**PUT**

```text
/api/v1/update/recipe/:id
```

### Delete a Recipe

**DELETE**

```text
/api/v1/delete/recipe/:id
```

## Sample Response

```json
{
  "_id": "6a33b77dc81faa80c21105c1",
  "name": "20 th century cocktail",
  "ingredients": "Gin,lillet blanc,creme de cacao white,lime,grated nutmeg,ice",
  "prep_steps": "Fill a cocktail shaker with ice. Add all ingredients and shake well.",
  "image": "https://res.cloudinary.com/du1pfpcpi/image/upload/v1781774185/store/ip5mpckjmkmxl82avghi.jpg"
}
```

## Author

J Ruthra Moorthy

GitHub: https://github.com/ruthra2006
