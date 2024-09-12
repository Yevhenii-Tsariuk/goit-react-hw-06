import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";


export default function App() {
 

  let contacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [search, setSearch] = useState("");

  const [peoples, setPeople] =useState(() => {
    const savedContacts = localStorage.getItem('peoples');
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  });

  useEffect(() => {
    localStorage.setItem('peoples', JSON.stringify(peoples));
  }, [peoples]);


  const addContact = (newContact) =>{
    setPeople((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setPeople((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = peoples.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
  );
}
