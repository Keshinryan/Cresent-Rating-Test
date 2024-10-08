# Cresent Rating Test Project
This project is a React application that demonstrates form handling, validation, and routing with Redux and React Router. It includes a dynamic form with various fields, validation rules, and displays a loading animation during route transitions.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [API Reference](#api-reference)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview

This React application includes:

- A form with fields for Name, Phone Number, Email, Address, Education, and Message.
- Validation for form fields using Redux state.
- Navigation between different routes using React Router.
- A loading animation displayed during route transitions.

### Prerequisites

- Node.js and npm installed on your machine
- Basic understanding of React, Redux, and React Router

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Keshinryan/Cresent-Rating-Test
   ```
   
2. **Navigate to the Project Directory**

    ```bash
    cd Cresent-Rating-Test
    ```


3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Run the Project in Development Enviroment **

    ```bash
    npm run dev
    ```
## Usage
### Navigation
- Array Manipulation Challenge: Navigate to /AMC to view the Array Manipulation Challenge component.
- String Anagram Detection: Navigate to /SAD to view the String Anagram Detection component.
- Form Using Redux: Navigate to /Form to access and submit the form.
- Submitted Data: Navigate to /submitted to view the data that was submitted through the form.

## Code Structure
    src/
        components/
            AMC.jsx
            SAD.jsx
            Form.jsx
            Submitted.jsx
            Loading.jsx
            FormField.jsx
        features/
            formSlice.js
        App.jsx
        main.js
        App.css

## Main Components

- **`App.jsx`**: Sets up routing and navigation for the application.
- **`Form.jsx`**: Manages form input, validation, and submission.
- **`Submitted.jsx`**: Displays the data submitted through the form.
- **`Loading.jsx`**: Shows a loading animation during route transitions.
- **`FormField.jsx`**: A reusable component for rendering form fields with labels and error messages.

## API Reference

### Redux Slice

**`formSlice.js`**

- **Reducers**:
  - **`setName`**: Sets the value of the name field.
  - **`setEmail`**: Sets the value of the email field.
  - **`setPhoneNumber`**: Sets the value of the phone number field.
  - **`setMessage`**: Sets the value of the message field.
  - **`clearForm`**: Clears all form fields and resets errors.
  - **`submitForm`**: Submits the form data and stores it in the state.
  - **`setError`**: Sets an error message in the state.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to [React](https://reactjs.org/) and [Redux](https://redux.js.org/) for their powerful frameworks.
- Inspiration and guidance from various tutorials and community resources.

