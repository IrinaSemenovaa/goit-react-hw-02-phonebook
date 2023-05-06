import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import SearchBar from './SearchBar/SearchBar';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === name || contact.number === number
    );
    if (existingContact) {
      alert(`Contact with name ${name} or number ${number} already exists`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    // console.log(newContact);
  };

  handleDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Phonebook
        </h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2
          style={{
            textAlign: 'center',
          }}
        >
          Contacts
        </h2>
        <SearchBar handleFilterChange={this.handleFilterChange}></SearchBar>
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
