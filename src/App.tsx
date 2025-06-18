import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriskAutomationLanding from '@/components/ui/brisk-automation-landing';
import TermsOfService from '@/components/pages/terms-of-service';
import PrivacyPolicy from '@/components/pages/privacy-policy';
import CassieBPage from '@/components/pages/cassie-b';
import CalebBPage from '@/components/pages/caleb-b';

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<BriskAutomationLanding />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cassie-b" element={<CassieBPage />} />
          <Route path="/caleb-b" element={<CalebBPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;