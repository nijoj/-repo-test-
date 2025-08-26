import { useState, useEffect } from 'react';
import ApiService, { GreetingResponse } from '../services/ApiService';

const Home = () => {
  const [greeting, setGreeting] = useState<string>('');
  const [jsonGreeting, setJsonGreeting] = useState<GreetingResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Get simple greeting
        const simpleGreeting = await ApiService.getHello();
        setGreeting(simpleGreeting);
        
        // Get JSON greeting
        const jsonResponse = await ApiService.getGreetingJson('World');
        setJsonGreeting(jsonResponse);
        
        setError(null);
      } catch (err) {
        setError('Failed to fetch data from the server. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Our Application</h1>
      
      <div className="greeting-section">
        <h2>Greeting from Backend</h2>
        {loading ? (
          <p>Loading greeting...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <p className="greeting">{greeting}</p>
            
            {jsonGreeting && (
              <div className="json-greeting">
                <h3>JSON Response:</h3>
                <p>Message: {jsonGreeting.message}</p>
                <p>Timestamp: {jsonGreeting.timestamp}</p>
                <p>Success: {jsonGreeting.success ? 'Yes' : 'No'}</p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>React frontend with TypeScript</li>
          <li>Java backend with MicroProfile</li>
          <li>RESTful API integration</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;


