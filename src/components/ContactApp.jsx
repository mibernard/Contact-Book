import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

let ContactApp = () => {
  let [state, setState] = useState({
    selectedContact: {},
  });
  let { selectedContact } = state;

  let receiveContact = (contact) => {
    setState((state) => ({
      selectedContact: contact,
    }));
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <p className='h3 text-success'>Contact App</p>
            <p>
              Select any of the contacts below to display their picture, email, age, and location. This data was fetched
              from a URL using Axios Javascript Library.
            </p>
          </div>
        </div>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-9'>
              <ContactList sendContact={receiveContact} />
            </div>
            <div className='col-md-3'>
              <ContactCard selectedContact={selectedContact} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
