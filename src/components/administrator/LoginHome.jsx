import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const LoginHome = () => {

    const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <Router>
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/header" element={<Header />} />
            <Route path="/" element={<Main />} />
          </>
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
      </Routes>
    </Router>
  )
}

export default LoginHome
