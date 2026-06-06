# Library Management System

A robust and lightweight **Library Management System** backend built using **Spring Boot** and an **in-memory H2 Database**. This application provides a RESTful API to manage books, patrons (users), borrowing records, and inventory tracking for a local library.

---

## 🚀 Features

* **Book Management:** Full CRUD operations (Create, Read, Update, Delete) for managing library catalogs.
* **Patron Management:** Register and manage library members, contact details, and membership statuses.
* **Borrowing System:** Seamlessly check out books, handle return dates, and track current book availability.
* **In-Memory Storage:** Powered by H2 database for rapid development, testing, and zero-configuration setup.
* **Validation & Error Handling:** Robust input validation with clean HTTP error response mappings.

---

## 🛠️ Tech Stack

* **Framework:** Spring Boot (v3.x)
* **Language:** Java (JDK 17 or higher)
* **Database:** H2 (In-Memory)
* **ORM/Data Access:** Spring Data JPA / Hibernate
* **Build Tool:** Maven (or Gradle)

---

## 📋 Prerequisites

Before running the project locally, ensure you have the following installed:
* [Java Development Kit (JDK) 17+](https://www.oracle.com/java/technologies/downloads/)
* [Maven](https://maven.apache.org/) (optional if using the provided wrapper `./mvnw`)
* An API client like [Postman](https://www.postman.com/) or Curl for testing endpoints.

---
