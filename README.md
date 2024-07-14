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

![Screenshot (84)](https://github.com/user-attachments/assets/20fc154d-b04f-40ca-aebf-561b2a0d9ecc)

#### Login Page

![Screenshot (85)](https://github.com/user-attachments/assets/5872e3df-f72a-47fa-a695-f29980f73d7e)

#### Sign Up Page

![Screenshot (86)](https://github.com/user-attachments/assets/4a6ca170-f29e-4d81-9a6a-69b815777b1c)

#### User Profile

![Screenshot (87)](https://github.com/user-attachments/assets/b05a2a78-3832-4530-b9f7-f07de93bd8c9)

#### Current & Past Book History

![Screenshot (88)](https://github.com/user-attachments/assets/dfeedce1-c656-41d2-9812-a9722dd2a68c)

#### Payment History

![Screenshot (89)](https://github.com/user-attachments/assets/3e32acf1-2b42-44f3-a8ae-6d69869ef50f)

#### Book Details Page

![Screenshot (90)](https://github.com/user-attachments/assets/08dfc083-a428-47d6-a24f-0f9276ccafe1)

### Admin UI

#### Charts for Analytics

![download (1)](https://github.com/user-attachments/assets/e121cd31-09eb-4d72-bacb-05ddd1e61e20)
![download (2)](https://github.com/user-attachments/assets/dd71db2a-018f-4974-802e-620288dafc88)
![download](https://github.com/user-attachments/assets/22656c9b-ad96-4acd-b4bb-a75580167b5b)

#### Librarians List

![Screenshot (91)](https://github.com/user-attachments/assets/977a4b2f-6d17-4a14-9a93-d262c102eb87)
