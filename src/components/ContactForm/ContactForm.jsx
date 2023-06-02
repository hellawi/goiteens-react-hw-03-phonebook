import { useState } from "react"
import styles from './ContactForm.module.css'

function ContactForm({ onCreate }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');
  function handleSubmit(event){
    event.preventDefault()
    setName('')
    setNumber('')
    onCreate(name, number)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          className={styles.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
          <p>Phone number</p>
        <input
          className={styles.inputName}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button type="submit" className={styles.addBtn}>Add</button>
      </form>
    </div>
  )
}
export default ContactForm