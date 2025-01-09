import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404 - Page Not Found</h1>
      <p style={messageStyle}>
        Oops! The page you’re looking for doesn’t exist. It might have been moved or removed.
      </p>
      <Link href="/" passHref>
        <button style={buttonStyle}>Go Back to Home</button>
      </Link>
    </div>
  );
}

// Define styles as constants with explicit types
const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
  color: '#212529',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const messageStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
