import React from 'react';
import Header from './Header';
import './App.css';
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
