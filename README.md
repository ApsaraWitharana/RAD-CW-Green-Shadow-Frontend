# Green Shadow Frontend

<a href="https://git.io/typing-svg">     
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=50&pause=1000&center=true&vCenter=true&color=00FF00&width=835&height=70&lines=GREEN+SHADOW+FRONTEND" alt="Green Shadow Frontend" />
</a>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Introduction

Green Shadow Frontend is a modern, interactive, and scalable web application built using React, Redux Toolkit, and Vite. It is designed for efficient management of resources such as crops, equipment, vehicles, staff, and fields. With role-based dashboards, CRUD functionalities, and real-time logs, the system ensures smooth operations and monitoring. It caters to Managers, Administrators, and Scientists with user-specific functionalities.

## Features

- **Role-Based Dashboards:**
  - **Manager:** Oversee resources and team management.
  - **Administrator:** Manage users, permissions, and system operations.
  - **Scientist:** Monitor fields and crops, log findings, and conduct research.

- **CRUD Operations:**
  - Manage resources: crops, equipment, vehicles, staff, and fields.
  - Real-time logs: Staff logs, Field logs, Monitoring logs.

- **Interactive UI:**
  - Fully responsive design.
  - Dynamic updates powered by React and Redux Toolkit.


## Technologies Used

- **Frontend:** React (18.x), Redux Toolkit, Vite (4.x)
- **State Management:** Redux Slice Reducers
- **Styling:** Teilwind CSS

## Setup and Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    https://github.com/ApsaraWitharana/RAD-CW-Green-Shadow-Frontend.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd RAD-CW-Green-Shadow-Frontend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Access the application:**
    Open your browser and navigate to `http://localhost:5173/`.

## Usage

1. Login with role-based credentials.
2. Explore the features based on your role (Manager, Administrator, Scientist).
3. Perform CRUD operations, monitor resources, and use real-time logs for efficient management.

## Project Structure

```
📁 src
├── 📂 components        # Reusable React components
├── 📂 model             # Redux slices for state management
├── 📂 pages             # Page-level components
├── 📂 slice             # API calls and service utilities
├── 📂 assets            # Static assets like images, icons, and styles
├── 📂 store             # Helper functions
├── 📂 style             # Global and component-specific styles
├── App.jsx             # Main application file
└── main.jsx            # Vite entry point
```

### Key Directories

- **components/**: Contains reusable UI components like buttons, forms, and cards.
- **model/**: Includes Redux slices for managing application state.
- **pages/**: Page-level components such as Login, Dashboard, and Resource Management.
- **slice/**: API call utilities built with Axios.
- **store/**: Helper functions for state configuration.
- **style/**: Global and scoped CSS files for consistent styling.

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; text-align: center;">
    <div style="flex: 1 1 calc(50% - 16px); max-width: calc(50% - 16px);">
        <h3>Login</h3>
        <img src="https://github.com/user-attachments/assets/58ad3242-d95d-4a58-b24f-21e8467351e5" alt="Login Page" style="width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 calc(50% - 16px); max-width: calc(50% - 16px);">
        <h3>Signup</h3>
        <img src="https://github.com/user-attachments/assets/cb43c700-feb3-4bde-ba0a-6aea8a41c507" alt="Signup Page" style="width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 calc(50% - 16px); max-width: calc(50% - 16px);">
        <h3>Dashboard</h3>
        <img src="https://github.com/user-attachments/assets/ed2109f2-c41a-4419-a075-e67fd079ff4b" alt="Dashboard Page" style="width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 calc(50% - 16px); max-width: calc(50% - 16px);">
        <h3>Staff Page</h3>
        <img src="https://github.com/user-attachments/assets/f6d25298-d465-4278-8243-f3f5b1b77616" alt="Staff Page" style="width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
    </div>
    <div style="flex: 1 1 calc(50% - 16px); max-width: calc(50% - 16px);">
        <h3>Field Page</h3>
        <img src="https://github.com/user-attachments/assets/855c3bf2-980d-4fd1-bf31-5af00c07571d" alt="Field Page" style="width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
    </div>
</div>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or collaboration:
- **Author:** [Sachini Apsara](https://github.com/ApsaraWitharana)
- **Project Link:** [Green Shadow Frontend]( https://github.com/ApsaraWitharana/RAD-CW-Green-Shadow-Frontend.git)

<div align="center">
    © 2025 All Rights Reserved, Designed By Sachini Apsara
</div>

