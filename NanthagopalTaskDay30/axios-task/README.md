# React Table Management App

This is a simple React application that fetches data from an external API, displays it in a table format, and allows you to perform actions like creating, updating, and deleting records. The application uses the axios library for making API requests and the react-router-dom library for navigation.

## Features

1.Display records fetched from the API in a tabular format.
2.Create new records by navigating to the "/create" route.
3.Update existing records by clicking the "Update" button next to each record.
4.Delete records by clicking the "Delete" button next to each record.

## Prerequisites

Before you begin, make sure you have the following installed:

**Node.js and npm (Node Package Manager)
A text editor or integrated development environment (IDE)**

## Usage

=>Upon launching the application, you will see a table displaying records fetched from the JSONPlaceholder API. Each record is displayed in a row, and the columns represent the various attributes of the record.

=>Initially, I'm gonna edit the default Component App.jsx and install axios npm **npm i axios** and import axios, useEffect, useState and useNavigte.

=>To install **npm i mdb-react-ui-kit** and import MDBBtn for buttons and write useStates and useEffect for update and manipulating the data's. Here we use axios.get('APIUrl') for read the Url.

=>Create Add.jsx new Component.The Add component provides a form for inputting data attributes. When the form is submitted, the data is sent to the specified API endpoint.Once you've filled out the form fields, click the "Submit" button to add the new data entry. The component uses the axios library to send a POST request to the specified API endpoint.

=>Create Edit.jsx new omponent. This component that provides a form for editing data entries. The form fields are pre-filled with the existing data fetched from an API endpoint using the axios library. You can modify and update the data, and when submitted, the changes are sent to the API endpoint.

=>The Edit component provides a form for editing existing data attributes. The data is fetched based on the ID provided in the URL parameters. Once the form is filled with the desired changes, clicking the "Update" button will send the updated data to the API endpoint. The component uses the axios library to send a PUT request to the specified API endpoint. Make sure to replace the endpoint with the appropriate URL for your use case.

=>This component is part of a larger application. Ensure you have proper routing set up to navigate to this component when editing data.

=>To create a AppRouter.jsx component for Router configuration. It defines the routes for different components within your application. It uses the react-router-dom library to set up navigation between different views. Include this AppRouter component in your application, making sure it wraps around your main application component.

1./: The root path that displays the App component.
2./create: A path that displays the Add component, used for adding new data entries.
3./update/:id: A dynamic path that displays the Edit component for updating data entries. The :id parameter is used to identify the specific data entry to be edited. Each of these routes is associated with a specific component, providing a clean way to navigate and manage different parts of your application.

=>A BrowserRouter component that wraps the routing logic. Inside the BrowserRouter, a Routes component is used to define individual routes. Each Route component specifies a path and an element, which is the component to render when the route is matched.

=>This is the main entry point of a React application that uses a router to manage navigation between different components. The code initializes the application and renders the AppRouter component, which handles routing and navigation using the react-router-dom library.

=>The application is initialized using the ReactDOM.createRoot method. It renders the AppRouter component inside a StrictMode wrapper. The AppRouter component is responsible for managing navigation between different sections of your application.

=>Customize the styles and UI using CSS or any styling library of your choice. Add error handling and validation to enhance user experience.

## Getting Started

1.Clone the repository or download the code files.
2.Open the project folder in your preferred text editor or IDE.
3.Open a terminal and navigate to the project folder.
4.Install project dependencies by running:

**npm install axios react react-router-dom mdb-react-ui-kit**
5.Start the development server by running:

    **npm start**

6.The application should open in your default web browser at http://localhost:3000.

**## RUN THE REACT APPLICATION**
=> Finally, We would run the application We use **npm run dev** command in terminal.

=>To create a new record, click the "+Create" button. This will navigate you to the "/create" route, where you can input details like name, username, e-mail, address, phone number and company for a new record.

=>To update an existing record, click the "Update" button in the corresponding row. This will navigate you to the "/update/:id" route, where :id is the ID of the record you want to update all the given form feilds.

=>To delete a record, click the "Delete" button in the corresponding row. A confirmation dialog will appear before the deletion is executed.
