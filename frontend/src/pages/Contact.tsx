import { useState, FormEvent } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out all fields');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', { name, email, message });
    
    // Reset form and show success message
    setName('');
    setEmail('');
    setMessage('');
    setError(null);
    setSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      {submitted && (
        <div className="success-message">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
          />
        </div>
        
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      
      <div className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
};

export default Contact;


