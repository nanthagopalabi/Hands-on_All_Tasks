import React, { useState } from 'react';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>URL Shortener Dashboard</h1>
      <button onClick={() => setIsModalOpen(true)}>Create Short URL</button>
      
      {isModalOpen && <CreateShortURLModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Dashboard;
