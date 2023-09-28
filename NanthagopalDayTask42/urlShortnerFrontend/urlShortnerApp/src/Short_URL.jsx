import React, { useState } from 'react';

function ShortURL() {
  const [originalURL, setOriginalURL] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Make an API call to create a short URL with the original URL.
    // Example API call:
    // axios.post('/api/url/shorten', { originalURL }).then(response => {
    //   setShowModal(false); // Close the modal after creating the short URL.
    // });
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create Short URL</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Create Short URL</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter the original URL"
                value={originalURL}
                onChange={(e) => setOriginalURL(e.target.value)}
              />
              <button type="submit">Shorten URL</button>
            </form>
          </div>
        </div>
      )}
    </div>                                         
  );
}
export default ShortURL;
