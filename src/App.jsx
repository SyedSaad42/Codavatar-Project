import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailVerification from './components/auth/EmailVerification';
import BusinessDetails from './components/business/BusinessDetails';

function App() {
  return (
<BrowserRouter future={{ v7_relativeSplatPath: true }}>
       <Router basename="/Codavatar-Project">
      <Routes>
        <Route path="/" element={<EmailVerification />} />
        <Route path="/business-details" element={<BusinessDetails />} />
      </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;