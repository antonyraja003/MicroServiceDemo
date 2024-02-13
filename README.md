# Microservices Example

This repository contains two microservices: User Service and Product Service.

## User Service

The User Service is responsible for managing user-related functionalities.

### Getting Started

#### Prerequisites

- Node.js
- npm (Node Package Manager)
- Docker (optional)

#### Installation

    ```bash
    nvm use 16
    ```

    ```bash
    npm install
    ```

Start the Both Service User and Product

Start the service:

npm run start:user

    The service will be running at http://localhost:3001.

#### Docker Installation (Optional)

Alternatively, you can use Docker for containerization:

1. Build the Docker image:

    ```bash
    docker build -t user-service .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3001:3001 user-service
    ```

#### API Documentation

##### Get Users

- **Endpoint:** `/users`
- **Method:** GET
- **Response:**

    ```json
    {
      "users": [
        { "id": 1, "name": "John" },
        { "id": 2, "name": "Jane" },
        // Additional users...
      ]
    }
    ```

#### Usage Examples

##### Curl

```bash
curl http://localhost:3001/users


# Product Service

The Product Service is a microservice responsible for managing product-related functionalities.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Docker (optional)

    ```bash
    npm install
    ```

3. Start the service:

    ```bash
    npm run start:product
    ```

    The service will be running at http://localhost:3002.

### Docker Installation (Optional)

Alternatively, you can use Docker for containerization:

1. Build the Docker image:

    ```bash
    docker build -t product-service .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3002:3002 product-service
    ```

## API Documentation

### Get Products

- **Endpoint:** `/products`
- **Method:** GET
- **Response:**

    ```json
    {
      "products": [
        {
          "id": 101,
          "name": "Product A",
          "users": [
            { "id": 1, "name": "John" },
            { "id": 2, "name": "Jane" }
          ]
        },
        // Additional products...
      ]
    }
    ```

## Usage Examples

### Curl

```bash
curl http://localhost:3002/products
```
## Build and start the microservices using Docker Compose:

    ```bash
    docker-compose up
    ```

   This command will build the Docker images for both services and start the containers. You can access the services at the following URLs:

   - User Service: http://localhost:3001/users
   - Product Service: http://localhost:3002/products

   Press `Ctrl + C` to stop the services.


