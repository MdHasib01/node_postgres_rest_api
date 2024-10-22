# Node.js Postgres REST API
### Version: 1.0.0

### Usage

```sh
$ npm install
```

```sh
$ npm start
```

**Live URL:** [https://node-postgres-rest-api.onrender.com](https://node-postgres-rest-api.onrender.com)

This API provides endpoints for managing categories and products. Below is a list of the available routes and the required payloads for each request.

## Categories Route

### GET All Categories
- **Method:** `GET`
- **URL:** `{BASE_URL}/categories`
- **Description:** Retrieve a list of all categories.


### POST Create a New Category
- **Method:** `POST`
- **URL:** `{BASE_URL}/categories`
- **Payload:**
  ```json
  {
    "name": "Electronics"
  }
  ```
- **Description:** Create a new category with the provided name.

### PUT Update an Existing Category
- **Method:** `PUT`
- **URL:** `{BASE_URL}/categories/:id`
- **Payload:**
  ```json
  {
    "id": 1,
    "name": "Electronics",
    "created_date": "2024-10-22T07:54:08.751Z",
    "updated_date": "2024-10-22T07:54:08.751Z"
  }
  ```
- **Description:** Update the category with the specified ID.

### DELETE a Category
- **Method:** `DELETE`
- **URL:** `{BASE_URL}/categories/:id`
- **Description:** Delete the category with the specified ID.

## Products Route

### GET All Products
- **Method:** `GET`
- **URL:** `{BASE_URL}/products`
- **Description:** Retrieve a list of all products.

### POST Create a New Product
- **Method:** `POST`
- **URL:** `{BASE_URL}/products`
- **Payload:**
  ```json
  {
    "id": 1,
    "name": "Smart Watch",
    "description": "Smart watch description",
    "price": "40.00",
    "currency": "USD",
    "quantity": 1,
    "active": true,
    "category_id": 1
  }
  ```
- **Description:** Create a new product with the provided details.

### PUT Update an Existing Product
- **Method:** `PUT`
- **URL:** `{BASE_URL}/products/:id`
- **Payload:**
  ```json
  {
    "id": 1,
    "name": "Smart Watch",
    "description": "Updated smart watch description",
    "price": "50.00",
    "currency": "USD",
    "quantity": 2,
    "active": true,
    "category_id": 1
  }
  ```
- **Description:** Update the product with the specified ID.

### DELETE a Product
- **Method:** `DELETE`
- **URL:** `{BASE_URL}/products/:id`
- **Description:** Delete the product with the specified ID.
