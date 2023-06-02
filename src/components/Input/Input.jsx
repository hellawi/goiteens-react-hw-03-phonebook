function Input({ value, onChange }) {
  return (
    <div>
        <input type="text" placeholder="Find a contact..." value={value} onChange={onChange} />
    </div>
  )
}
export default Input