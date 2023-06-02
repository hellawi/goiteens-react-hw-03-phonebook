import ContactsItem from "../ContactsItem/ContactsItem"
function ContactsList({ contacts, onDelete }) {
  return (
    <div>
        <ul>
        {contacts.map((contact) => 
        <ContactsItem 
        onDelete={onDelete}
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        />
        )}
        </ul>
    </div>
  )
}
export default ContactsList