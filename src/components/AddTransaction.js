import { useState } from "react"

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  return (
    <div>

      <h3>Add new transaction</h3>
      
      <form>
      
        <div className="form-control">
          <label>Text</label>
          <input type="text" placeholder="Enter text..." value={ text } onChange={ (e) => setText(e.target.value) } />
        </div>
      
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." value={ amount } onChange={ (e) => setAmount(e.target.value) } />
        </div>
      
        <button className="btn">Add transaction</button>

      </form>

    </div>
  )
}

export default AddTransaction
