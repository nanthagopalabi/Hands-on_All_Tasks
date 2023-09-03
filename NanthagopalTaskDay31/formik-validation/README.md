# Formik Validation React App:

To run the React components you provided step by step, you will need to create a React application, set up the necessary dependencies, and then integrate these components into your application. Below are the detailed steps:

**Step 1: Create a New React Application**

If you don't already have a React application set up, you can create one using Create React App. Open your terminal and run the following command:

`npx create-react-app library-management-system`

This command will create a new React application named "library-management-system." Change into the project directory:

`cd library-management-system`

**Step 2: Component Files**

Place each of your provided component files (BookCreate.jsx, BookEdit.jsx, AuthorDetails.jsx, LibraryListing.jsx) into the src folder of your React application.

**Step 3: Install Dependencies**

You will need to install additional dependencies for routing, form handling (Formik), and Yup (for validation). Run the following command in your project directory:

`npm install formik`
`npm install yup`

Step 4: Configure Routes

In your src/App.jsx file, configure the routes for your components. Replace the existing content.
This configuration sets up routes for each of your components.

**Step 5: Start the Development Server**

Now, you can start the development server by running the following command:
`npm start`

Your React application should now be running, and you can access it in your web browser at http://localhost:4000.

You should be able to navigate to the following URLs to access the different components:

Library Listing: http://localhost:4000/
Book Create: http://localhost:4000/books/create
Book Edit: http://localhost:4000/books/edit/:empid (Replace :empid with the actual book ID)
Author Details: http://localhost:4000/books/details/:empid (Replace :empid with the actual author ID)
That's it! You have successfully set up and integrated your React components into a React application with routing. You can now interact with these components as needed for your library management system.

This is a simple React application that demonstrates form validation using Formik. The application uses React Router for navigation and includes the following components:

### LibraryListing: Displays a list of books in the library.

### BookCreate: Allows users to create a new book entry.

### BookEdit: Allows users to edit existing book entries.

### AuthorDetails: Displays details about a specific author.

The application provides the following routes:

/: Displays a list of books in the library.
/books/create: Allows you to create a new book entry by filling out a form with validation.
/books/edit/:empid: Allows you to edit an existing book entry by providing the book's ID (empid).
/books/details/:empid: Displays detailed information about a specific author by providing the author's ID (empid).

**Folder Structure**
src/: Contains the source code of the application.
App.js: Main application component with routing.
LibraryListing.js: Component for displaying the list of books.
BookCreate.js: Component for creating new book entries.
BookEdit.js: Component for editing existing book entries.
AuthorDetails.js: Component for displaying author details.
App.css: Styles for the application.

**Library Listing**component is responsible for displaying a list of books in the library. Users can view, edit, and remove books from this list. The component uses React Router for navigation.

##### Functionality

The LibraryListing component provides the following functionality:

*Display a list of books with their details, including title, author name, author birthdate, author *biography, ISBN number, and publication date.
*Allow users to edit a book's details.
*Allow users to remove a book from the library.
\*Allow users to view detailed information about a book.

##### Component Structure

*empdata and setEmpdata: State variables to store the list of books fetched from the API.
*avigate: A function from React Router used for programmatic navigation.
*LoadDetail(id): Function to navigate to a book's details page.
*LoadEdit(id): Function to navigate to the book editing page.
*RemoveFunction(id): Function to remove a book from the library.
*useEffect: Used to fetch book data from the API when the component mounts.
\*Rendered elements: The component renders a table with book details, including buttons for editing, removing, and viewing book details.

##### BookCreate

The BookCreate component is responsible for rendering a form that allows users to create a new book entry. Users can input details such as book title, ISBN number, publication date, and author information.

**Form Validation**
The component uses Formik and Yup for form validation. It validates the ISBN number format and ensures that all required fields are filled out.

##### Component Structure

*initialValues: An object that defines the initial values for the form fields.
*validationSchema: A Yup schema that defines validation rules for the ISBN number field.
*handleSubmit: A function that handles form submission, sends a POST request to create a new book entry, and navigates back to the book list if successful.
*Rendered elements: The component renders a form with input fields for book ID, title, ISBN number, publication date, and author details. It includes error messages for validation and navigation buttons.

##### BookEdit

the BookEdit component allows users to edit the details of an existing book entry. Users can modify information such as book title, ISBN number, publication date, and author details.

##### Component Structure

empid: Retrieved from the route parameters to identify the book to be edited.
initialValues: A state variable that holds the initial values for the form fields. These values are fetched from the API based on the empid.
validationSchema: A Yup schema that defines validation rules for the ISBN number field.
useEffect: Used to fetch the initial values from the API when the component mounts.
handleSubmit: A function that handles form submission, sends a PUT request to update the book entry, and navigates back to the book list if successful.

##### AuthorDetails

AuthorDetails component is responsible for displaying detailed information about an author based on the author's ID (empid) passed through the URL. Users can view the author's name, birthdate, and biography.
