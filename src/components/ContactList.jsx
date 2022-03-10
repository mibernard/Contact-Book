import React, { useEffect, useState } from "react";
import ContactService from "../services/ContactService";

let ContactList = (props) => {
  let [state, setState] = useState({
    contacts: [],
  });

  useEffect(async () => {
    try {
      let response = await ContactService.getContactList();
      setState(() => ({
        contacts: response.data,
      }));
    } catch (error) {
      console.log(error);
    }
  });

  let { contacts } = state;

  let clickContact = (contact) => {
    // alert(JSON.stringify(contact));
    props.sendContact(contact); //send data to parent
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(state.contacts)}</pre> */}

      <table className="table table-hover text-center table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>SNO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <tr
                  key={contact.login.uuid}
                  onClick={() => clickContact(contact)}
                >
                  <td>
                    {contact.login.uuid.substr(contact.login.uuid.length - 5)}
                  </td>
                  <td>
                    {contact.name.first} {contact.name.last}
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.location.city}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
