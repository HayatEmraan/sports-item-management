# Assignment-5 (Path: Full-stack)

Create a Sports Items Management Dashboard with user authentication, CRUD operations for inventory, and sales management. Implement a detailed filter system for sports items, covering parameters like sport type, brand, size, price range, material, color, and more. The goal is to efficiently manage inventory, track sales, and provide a comprehensive analysis of sales history.

## Client Site

[view browser](https://sports-item-management-client.vercel.app/)

## Server Site

[view browser](https://sports-item-management.vercel.app/api/v1)

## Technology Stack:

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Object Data Modeling (ODM) and Validation Library:** Mongoose for MongoDB

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-server-side-HayatEmraan
    # navigate to project directory
    cd /#project-dir
   ```

2. Navigate to the project directory:

   ```bash
   npm install
   # or
   yarn
   ```

3. First, run the development server:

   ```bash
   // locally deployment
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev

   // production deployment
    npm run build
    # then
    npm start
   ```

## DotENV Configuration

```bash
  NODE_ENV=development
  PORT=5000
  MONGO_URI=mongodb://localhost:27017
  JWT_SECRET=require("crypto").randomBytes(32).toString("hex")
  BCRYPT_SALT=10
```

## API Reference

[view postman](https://documenter.getpostman.com/view/27606520/2s9YyqkPCi)
