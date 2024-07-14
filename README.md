# Odoo-Final

# Library Management System

## Description
The Library Management System is a comprehensive application designed to manage book inventories, track borrower details, and handle transactions efficiently. It includes user management, book inventory management, borrowing system, search and recommendations, notifications and alerts, and reporting features.

## Features

### User Management
- Login/Logout functionality for Admin, Librarians, and Users.
- Role-based access control: Admin, Librarian, and User roles.

### Book Inventory Management
- Book details: ISBN, title, author, publisher, year, genre, quantity.
- Integration with Google Books API to fetch book data using ISBN.

### Borrowing System
- Checkout process for borrowing books.
- Return process including due dates and late fees calculation.
- History tracking for each user's borrowed and returned books.

### Search
- Advanced search options (by title, author, genre, etc.).

### Reporting
- Generate reports on book usage, overdue items, user activity, etc.
- Dashboard for admins and librarians to see real-time statistics.

## Technologies Used
- **Frontend:** React, PrimeReact, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token with JWT

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system

2. **Install dependencies for both client and server:**

    ```bash
    # For client
    cd client-web
    npm install

    # For server
    cd ../backend
    npm install

3. **Create a .env file in the server directory and add the following environment variables:**

    ```bash
    PORT=9999
    JWT_SECRET_CODE=""
    NODE_ENV=DEVELOPMENT
    MONGODB_URI=""
    CLOUDINARY_CLOUD_NAME=""
    CLOUDINARY_API_KEY=""
    CLOUDINARY_API_SECRET=""

4. **Run the application:**

    ```bash
    # For client
    cd client
    npm start

    # For server
    cd ../server
    npm start

5. **Access the application:**

    ```bash
    Open your browser and go to http://localhost:3000


# Usage

## Admin
- Manage user roles and permissions.
- View real-time statistics and generate reports.

## Librarian
- Manage book inventory.
- Track borrowing and returning of books.

## User
- Search for books.
- Borrow and return books.

## Screenshots

### User UI

#### Landing Page

![Screenshot (76)](https://github.com/user-attachments/assets/40d4b21c-fe87-45fb-8631-4d730e2c90c8)

#### Login Page

![Screenshot (77)](https://github.com/user-attachments/assets/a1d25ee9-1359-4920-931b-04f2c66a9a9e)

#### Sign Up Page

![Screenshot (78)](https://github.com/user-attachments/assets/f0940a07-be74-40eb-b518-db09b34c27b2)

#### User Profile

![Screenshot (79)](https://github.com/user-attachments/assets/be4f8141-82da-429d-8aea-72d76e8e46f3)

#### Current & Pass Book History

![Screenshot (80)](https://github.com/user-attachments/assets/a54abdd6-da62-4d82-b72c-a5c6c6ddd1f8)

#### Payment History

![Screenshot (81)](https://github.com/user-attachments/assets/098cf491-f0b8-4887-8fbb-fdaeecab29a8)

#### Book Details Page

![Screenshot (82)](https://github.com/user-attachments/assets/37c78398-7d99-4d03-911b-1d2ec6af127e)

### Admin UI

#### Charts for Analytics

![download (1)](https://github.com/user-attachments/assets/e121cd31-09eb-4d72-bacb-05ddd1e61e20)
![download (2)](https://github.com/user-attachments/assets/dd71db2a-018f-4974-802e-620288dafc88)
![download](https://github.com/user-attachments/assets/22656c9b-ad96-4acd-b4bb-a75580167b5b)

#### Librarians List

![Screenshot (83)](https://github.com/user-attachments/assets/fd98f5b2-be32-4530-b7a6-99c3d156de8b)
