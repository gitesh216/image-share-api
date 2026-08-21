# ImageShare API

ImageShare API is a modern, high-performance REST API designed to power image sharing applications. It enables users to create profiles, upload images to AWS S3, add captions, and write nested comments/replies. 

This API provides secure input validation, robust error handling, rate limiting, and full OpenAPI (Swagger) documentation.

---

## 🚀 Key Features

*   **User Management**: User registration (signup) and profile retrieval.
*   **Image Sharing & Upload**: Secure image uploads processed through `multer` and saved directly to Amazon S3.
*   **Post Management**: Create, view (with pagination support), update, and delete image posts.
*   **Nested Comment System**: Leave comments on posts, or nested replies on other comments, featuring support for deep replies.
*   **Request Validation**: Strict request payload validation using Zod DTOs.
*   **Rate Limiting**: Built-in protection against brute-force and spam using `express-rate-limit`.
*   **Interactive Documentation**: Full API reference exposed at `/api-docs` using Swagger UI.

---

## 🛠️ Tech Stack

*   **Runtime Environment**: [Node.js](https://nodejs.org/) (v20+ recommended)
*   **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Framework**: [Express.js v5](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
*   **Storage**: [AWS S3](https://aws.amazon.com/s3/) using `@aws-sdk/client-s3` and `multer-s3`
*   **Validation**: [Zod](https://zod.dev/)
*   **Documentation**: [Swagger UI Express](https://github.com/scottie198x/swagger-ui-express) & [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)
*   **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📦 Project Structure

```text
├── src
│   ├── config          # Configuration (DB connection, AWS S3, Swagger, Env variables)
│   ├── controllers     # Request handlers & response formatting
│   ├── dtos            # Data Transfer Objects & Zod validation schemas
│   ├── middlewares     # Express middlewares (error handling, rate limiting, validation, file upload)
│   ├── repositories    # Database access layer (direct interaction with MongoDB models)
│   ├── routers         # API Route definitions
│   ├── schema          # Mongoose Schemas & Database Models
│   ├── services        # Core business logic
│   ├── types           # Custom TypeScript type definitions
│   ├── utils           # Shared helper functions (e.g., standard API responses)
│   ├── app.ts          # Express App configuration and middleware setup
│   └── server.ts       # Application entry point
├── docker-compose.yml  # Local MongoDB setup
├── package.json        # Dependencies & scripts
└── tsconfig.json       # TypeScript configuration
```

---

## ⚙️ Getting Started / Prerequisites

### 📋 Prerequisites
Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v20 or higher)
*   [pnpm](https://pnpm.io/installation) package manager
*   [Docker](https://www.docker.com/) (optional, for running MongoDB locally)

### 🔧 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd imageshare-api
    ```

2.  **Install Dependencies**
    ```bash
    pnpm install
    ```

3.  **Environment Configuration**
    Copy the sample environment file to create your own configuration:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and fill in your credentials, especially your AWS S3 credentials:
    ```env
    PORT=3001
    MONGODB_URI=mongodb://admin:changeme@localhost:27017/imageshare?authSource=admin
    AWS_ACCESS_KEY=your_aws_access_key
    AWS_SECRET_KEY=your_aws_secret_key
    AWS_REGION_KEY=us-east-1
    AWS_BUCKET_NAME=your_s3_bucket_name
    ```

4.  **Start Database Services** (Using Docker)
    If you don't have a running MongoDB instance, start the local MongoDB container using:
    ```bash
    docker-compose up -d
    ```

---

## 🏃 Running the Project

### Development Mode
To start the application in development mode with hot-reloading (using `nodemon` + `tsx`):
```bash
pnpm run dev
```
The server will start, by default, at `http://localhost:3001`.

### API Documentation
Once the server is running, you can explore and test the endpoints interactively via Swagger UI:
*   **Documentation URL**: `http://localhost:3001/api-docs`

---

## 📐 Diagrams

### System Architecture
![System Architecture Flow Chart](diagrams/system_flow.png)

### Data Models
![ER Diagrams](diagrams/er_diagram.png)

**Comments and Likes** use polymorphic references to connect to either a Post or a Comment.

**Comments**
- `onModel`: target type ("Post" or "Comment")
- `commentableId`: target's ID
- `replies`: a virtual field (not stored) — Mongoose finds child comments where `commentableId` matches and `onModel` is "Comment"

**Likes**
- `onModel`: target type ("Post" or "Comment")
- `likeableId`: target's ID
- A compound unique index (user + target) blocks duplicate likes

### Application Flow & Sequence Diagrams
![Updated AWS Flow](diagrams/aws_system_flow.png)
*AWS Flow Diagram*

![Create Post](diagrams/create_post.png)
*Post Creation with Image upload Sequence Diagram*


---

## 📄 License & Contributing

### Contributing
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

### License
Distributed under the ISC License. See `LICENSE` for more information (if applicable).
