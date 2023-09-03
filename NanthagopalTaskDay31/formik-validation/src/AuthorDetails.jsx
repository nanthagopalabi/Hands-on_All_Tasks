import { Link,useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function AuthorDetails() {
  const { empid } = useParams();
  const [empdata, setEmpdata] = useState(null); 

  useEffect(() => {
    fetch(`http://localhost:4000/books/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [empid]); 
  return (
    <div>
      {empdata && (
        <div className="authordetails"><br/>
          <h1>Author Details:</h1><br/>
          <h3>Author Name: {empdata.author?.AuthorName}</h3><br/>
          <h3>Birth Date: {empdata.author?.BirthDate}</h3><br/>
          <h3>Biography: {empdata.author?.Biography}</h3><br/>
          <Link className="btn btn-danger" to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default AuthorDetails;