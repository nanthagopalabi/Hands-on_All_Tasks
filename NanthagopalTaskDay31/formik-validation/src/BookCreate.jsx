import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookCreate() {
  const navigate = useNavigate();

  const initialValues = {
    id: '',
    title: '',
    ISBN_Number: '',
    PublicationDate: '',
    author: {
      AuthorName: '',
      BirthDate: '',
      Biography: '',
    },
  };

  const validationSchema = Yup.object().shape({
    ISBN_Number: Yup.string()
      .matches(/^\d{3}-\d{1}-\d{5}-\d{3}-\d{1}$/, 'Invalid ISBN format (e.g., 000-0-00000-000-0)')
      .required('ISBN number is required'),
  });

  const handleSubmit = (values) => {
    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          alert('Saved successfully');
          navigate('/'); 
        } else {
          console.log('Failed to create book');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <Formik initialValues={initialValues}
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
             {({ errors, touched }) => (
              <Form className="container">
                <div className="card">
                  <div className="card-title">
                    <h2>Create New Book</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>ID</label>
                          <Field
                            type="number"
                            name="id"
                            className="form-control"
                            placeholder="Enter Book ID Number"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Title</label>
                          <Field
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Enter Book Title Here"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                      <div className="form-group">
                          <label>ISBN_Number</label>
                          <Field
                            type="number"
                            name="ISBN_Number"
                            className={`form-control ${errors.ISBN_Number && touched.ISBN_Number ? 'is-invalid' : ''}`}
                            required
                          />
                          <ErrorMessage name="ISBN_Number" component="div" className="invalid-feedback" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>PublicationDate</label>
                          <Field
                            type="date"
                            name="PublicationDate"
                            className="form-control"
                            placeholder="DD/MM/YYYY"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <h3>Enter Author Details:</h3>
                          <label>Author Name:</label>
                          <Field
                            type="text"
                            name="author.AuthorName"
                            className="form-control"
                            placeholder="Enter Author Name Here"
                            required
                          />

                          <label>Birth Date:</label>
                          <Field
                            type="date"
                            name="author.BirthDate"
                            className="form-control"
                            placeholder="Enter Author D.O.B"
                            required
                          />

                          <label>Biography:</label>
                          <Field
                            as="textarea"
                            name="author.Biography"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button
                            className="btn btn-lg btn-success"
                            type="submit"
                          >
                            Save
                          </button>
                          <Link to="/" className="btn btn-lg btn-danger">
                            Back
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default BookCreate;
