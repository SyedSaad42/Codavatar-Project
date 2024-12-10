import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailVerification from './components/auth/EmailVerification';
import BusinessDetails from './components/business/BusinessDetails';

function App() {
  return (
<BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<EmailVerification />} />
        <Route path="/business-details" element={<BusinessDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;