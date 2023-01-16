import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
