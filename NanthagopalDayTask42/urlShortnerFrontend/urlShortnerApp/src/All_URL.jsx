import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewAllURLs() {
  const [urls, setURLs] = useState([]);

  // You would make an API call to get the list of URLs here, e.g., useEffect with axios.

  useEffect(() => {
    // Fetch the list of URLs from the API and set the state.
    // Example API call:
    // axios.get('/api/urls').then(response => setURLs(response.data.urls));
  }, []);

  return (
    <div>
      <h2>All Created URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.id}>
              <td>{url.originalURL}</td>
              <td>
                <a href={url.shortURL} target="_blank" rel="noopener noreferrer">
                  {url.shortURL}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default ViewAllURLs;
