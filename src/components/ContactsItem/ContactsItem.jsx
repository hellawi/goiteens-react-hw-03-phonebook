function ContactsItem({ name, number, onDelete, id }) {
  return (
    <div>
      <li>{name} {number}</li>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
export default ContactsItem;
