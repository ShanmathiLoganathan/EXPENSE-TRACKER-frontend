import {useState} from "react"

const ExpenseForm= (props) => {

  const { addExpense } = props
  const [title , setTitle] =useState('')
  const [amount, setAmount] = useState()
  const [errors, setErrors] = useState({})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(title,amount)
  let err ={}

  // if(title === '' || amount === 0){
  //   alert('Please enter valid title and amount')
  //   return
  // }

  if(title.length < 3){
    // alert('Enter a valid amount')
    setErrors({...errors,title: 'Title should be atleast 3 characters long'})
    
  }
  if(!amount) {
    // alert('Enter a valid amount')
    err.amount= 'Enter the amount'
    
  }

  
  if(Object.keys(err).length > 0){
    setErrors({...err})
    return
  }
  addExpense(title,amount)
  setTitle('')
  setAmount(0)
}

const handleTitleChange = (e) => {
  
  setTitle(e.target.value)
  setErrors({...errors, title: ''})
}

const handleAmountChange = (e) => {
  
  setAmount( parseInt(e.target.value))
  setErrors({...errors, amount: ''})

}
    return (
      <form onSubmit={handleSubmit}>
        <div className ="input-container">
          <label htmlFor="title">Title</label>
          <input type="text" id="title"  value={title} onChange={handleTitleChange}/>
          {errors.title ? <div className="error">{errors.title}</div> :null}
        </div>
         <div className="input-container"> 
           <label htmlFor="amount">Amount</label>
           <input type="number" id="amount"  value={amount} onChange={handleAmountChange}/>
           {errors.amount ? <div className="error">{errors.amount}</div> :null}
           </div>
            <button type="submit">Add Transaction</button>
        
      </form>
    )
  }
  export default ExpenseForm