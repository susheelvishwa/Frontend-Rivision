// src/components/ConditionalMessage1.jsx

function ConditionalMessage1({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Hello, User!</p> : <p>Access Denied</p>}</div>;
}

export default ConditionalMessage1;
