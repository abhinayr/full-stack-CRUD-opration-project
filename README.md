#CRUD Application

![Java](https://img.shields.io/badge/Java-25-blue)
![Spring Boot](https://img.shields.io/badge/SpringBoot-4.0-green)
![Angular](https://img.shields.io/badge/Angular-21-red)
![Database](https://img.shields.io/badge/Database-H2-orange)
![Build](https://img.shields.io/badge/Build-Maven%20%7C%20npm-purple)

A full stack user management application built using **Angular 21** for the frontend and **Java 25 with Spring Boot 4** for the backend. The application supports a complete **CRUD workflow** where users can create, view, update, and delete records with associated notes through a responsive web interface.

This project was built as part of a full-stack engineering assessment with a focus on **clean structure**, **maintainability**, **clear API design**, and a **working end-to-end user flow**.

---

## Project Overview

The application allows a user to manage a collection of records through a simple and modern dashboard. Each record includes:

- First name
- Last name
- Email
- Note

The frontend provides a form for creating and updating users, and a structured list for viewing and deleting them. The backend exposes REST APIs to handle all data operations and persists data using a local **H2** database.

The goal of this project is to demonstrate a clean interaction between the frontend and backend layers while keeping the implementation simple, readable, and easy to run locally.

---

## Architecture

This application follows a standard **client-server architecture**.

### Frontend
The frontend is built with **Angular 21** and is responsible for:
- Rendering the user interface
- Handling user interactions
- Calling backend APIs
- Updating the UI immediately after create, update, and delete actions

### Backend
The backend is built with **Spring Boot 4** and is responsible for:
- Exposing REST endpoints
- Validating and processing incoming requests
- Applying business logic
- Interacting with the database through JPA repositories

### Layered Backend Design
The backend follows a layered structure:

- **Controller**: handles HTTP requests and responses
- **Service**: contains business logic
- **Repository**: handles database interaction
- **Entity / DTO**: defines data models and request payloads
- **Config**: handles application configuration such as CORS

This separation keeps the code maintainable and easier to extend.

---

## Project Structure

```text
ALPHARECON-CRUD-PROJECT/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/alpharecon/
│   │   │   │   ├── config/
│   │   │   │   │   ├── CorsConfig.java
│   │   │   │   │   └── GlobalExceptionHandler.java
│   │   │   │   ├── controller/
│   │   │   │   │   └── UserController.java
│   │   │   │   ├── dto/
│   │   │   │   │   └── UserDto.java
│   │   │   │   ├── entity/
│   │   │   │   │   └── User.java
│   │   │   │   ├── repository/
│   │   │   │   │   └── UserRepository.java
│   │   │   │   ├── service/
│   │   │   │   │   └── UserService.java
│   │   │   │   └── Application.java
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.yml
│   │   │
│   │   └── test/
│   │       └── java/com/alpharecon/
│   │           └── ApplicationTests.java
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   │   └── services/
│   │   │   │       └── user.service.ts
│   │   │   │
│   │   │   ├── features/
│   │   │   │   └── users/
│   │   │   │       ├── user-form.component.ts
│   │   │   │       ├── user-form.component.html
│   │   │   │       ├── user-list.component.ts
│   │   │   │       └── user-list.component.html
│   │   │   │
│   │   │   ├── shared/
│   │   │   │   └── models/
│   │   │   │       └── user.model.ts
│   │   │   │
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.css
│   │   │   └── app.module.ts
│   │   │
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   │
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── tsconfig.app.json
│
├── screenshots/
│   ├── dashboard.png
│   ├── create-user.png
│   ├── update-user.png
│   ├── delete-user.png
│   └── user-list.png
│
├── .gitignore
└── README.md


Tech Stack :

Backend
Java 25
Spring Boot 4
Spring Data JPA
H2 Database
Maven
Frontend
Angular 21
TypeScript
HTML
CSS
Features
Create a new user
View all users in a structured list
Edit an existing user
Delete a user
Store notes for each user
Real-time UI update after save, edit, and delete
Modern responsive interface with animated background
Screenshots
Dashboard

Create User

User List

Update User

Delete User

How to Run the Project
Prerequisites

Make sure these are installed on your machine:

Java 25
Maven
Node.js
npm
Run Backend

Open a terminal and navigate to the backend folder:

cd backend
mvn spring-boot:run

The backend will start on:

http://localhost:8080
Run Frontend

Open another terminal and navigate to the frontend folder:

cd frontend
npm install
npm start

The frontend will start on:

http://localhost:4200
API Endpoints

The backend exposes the following endpoints:

GET    /api/users
GET    /api/users/{id}
POST   /api/users
PUT    /api/users/{id}
DELETE /api/users/{id}
Why These Tools Were Chosen
Spring Boot

Spring Boot was chosen because it provides a structured and efficient way to build REST APIs with minimal setup. It also works well with JPA and makes layered architecture straightforward.

Angular

Angular was selected because it offers strong project structure, reusable components, and a clear way to manage services, models, and UI features in a scalable frontend application.

H2 Database

H2 was used to keep the setup simple and self-contained. It allows the project to run locally without requiring an external database installation.

Maven and npm

Maven and npm were used as standard build and dependency tools for Java and Angular projects respectively.

Tradeoffs

A few tradeoffs were made to keep the project focused and easy to run:

H2 in-memory database was used for simplicity, which means data does not persist after backend restart
No authentication or authorization was added because the assessment focused on CRUD workflow and application structure
The UI was built using custom CSS instead of a component library to keep the implementation lightweight and fully controlled
Limitations
Data is reset when the backend application restarts because the database is in-memory
There is no login or access control
Search, filter, and pagination are not implemented
Validation and error messaging can be improved further for production-level behavior
Future Improvements

If more time were available, the following enhancements would be good next steps:

Replace H2 with MySQL or PostgreSQL for persistent storage
Add authentication and role-based access control
Add search, sorting, filtering, and pagination
Improve form validation and user-friendly error handling
Add unit tests and integration tests for both frontend and backend
Dockerize the application for easier setup and deployment

Author

Abhinay Mangasamudram
Software Developer
