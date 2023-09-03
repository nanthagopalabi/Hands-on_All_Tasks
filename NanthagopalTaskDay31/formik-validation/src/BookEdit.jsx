import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookEdit() {
  const { empid } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    id: '',
    title: '',
    ISBN_Number: '',
    PublicationDate: '',
    author: {
      AuthorName: '',
      BirthDate: '',
      Biography: '',
    },
  });

  const validationSchema = Yup.object().shape({
    ISBN_Number: Yup.string()
      .matches(/^\d{3}-\d{1}-\d{5}-\d{3}-\d{1}$/, 'Invalid ISBN format (e.g., 000-0-00000-000-0)')
      .required('ISBN number is required'),
  });

  
  useEffect(() => {
    fetch('http://localhost:4000/books/' + empid)
      .then((res) => res.json())
      .then((resp) => {
        setInitialValues(resp);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [empid]);

  const handleSubmit = (values) => {
    fetch('http://localhost:4000/books/' + empid, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          alert('Data Updated successfully');
          navigate('/');
        } else {
          console.log('Failed to update book');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-4 col-lg-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ errors, touched }) => (
              <Form className="container">
                <div className="card">
                  <div className="card-title">
                    <h2>Edit Book</h2>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>ID</label>
                          <Field
                            type="text"
                            name="id"
                            className="form-control"
                            readOnly
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
                            placeholder={initialValues.ISBN_Number}
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
                            placeholder={initialValues.PublicationDate}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <h3>Enter Author Details:</h3>
                          <label>Author Name</label>
                          <Field
                            type="text"
                            name="author.AuthorName"
                            className="form-control"
                            placeholder={initialValues.author.AuthorName}
                            required
                          />

                          <label>Author Birth Date</label>
                          <Field
                            type="date"
                            name="author.BirthDate"
                            className="form-control"
                            placeholder={initialValues.author.BirthDate}
                            required
                          />

                          <label>Biography</label>
                          <Field
                            as="textarea"
                            name="author.Biography"
                            className="form-control"
                            placeholder={initialValues.author.Biography}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="btn btn-success" type="submit">
                            Save
                          </button>
                          <Link to="/" className="btn btn-danger">
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

export default BookEdit;
