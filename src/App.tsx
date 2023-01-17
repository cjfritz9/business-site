import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import MailHelp from './components/MailHelp';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/mail-help' element={<MailHelp />} />
      </Routes>
    </div>
  );
};

export default App;
