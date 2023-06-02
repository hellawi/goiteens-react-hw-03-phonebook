import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Input from "./Input/Input";

function initializationContacts(){
  const contacts = localStorage.getItem('contacts')
  if(contacts){
    return JSON.parse(contacts)
  } else{
    return [];
  }
}

function App() {
  const [contacts, setContacts] = useState(initializationContacts);
  const [query, setQuery] = useState("");
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function addContact(name, number) {
    const existContact = contacts.find((contact) => contact.name === name)
    if(existContact){
      alert('This contact is already exists!')
      return
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [newContact, ...prevContacts]);
    // if (contacts.name.includes(query)) {
    //   return true
    // } else{
    //   return false
    // }
  }

  function removeContact(id){
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id))
  }

  const filteredContacts = contacts.filter((contact) => {
    if (contact.name.includes(query)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onCreate={addContact} />
      <Input value={query} onChange={(event) => setQuery(event.target.value)} />
      {filteredContacts.length !== 0 ? (
        <ContactsList contacts={filteredContacts} onDelete={removeContact} />
      ) : (
        <span className="no_available">No available contacts!</span>
      )}
    </div>
  );
}
export default App;
