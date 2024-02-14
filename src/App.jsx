import {useState,useEffect} from "react";
import axios from "axios";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
const App =() => {

  const [expenses, setExpenses] = useState([
    // { id: 1, title: "Food",amount: -4000},
    // { id: 2, title:"Movie",amount: -250},
    // { id: 3, title:"salary",amount:30000},
    // { id: 4, title:"Groceries",amount:-4000}
    ])



     useEffect(()=> {
      axios.get('https://expense-tracker-1-38es.onrender.com/get-entries')
      .then(res => {
        console.log(res.data)
        setExpenses (res.data)
      })
      .catch(err => console.log(err))
     },[])

    const addExpense = (title,amount) => {
      setExpenses([...expenses, {title:title,amount:amount}])
    }

    const deleteExpense =(id)=>{
      setExpenses(expenses.filter((exp) => exp.id !== id))
    }
   let income = 0
   let expense = 0

   expenses.forEach((exp)=>{
    if(exp.amount > 0) {
      income +=exp.amount
    }else{
      expense += exp.amount 
    }
   })

  let Balance = income + expense


  

 
   return (
    <>
    <div>
      <div> Expense Tracker</div>
      <div className="balance"> Balance:{Balance}</div>
      
    
      <div className="income-expense-container">
        <div className="income">
          <span className="title">income</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span className="title">Expense</span>
          <span>{expense}</span>
        </div>
      </div>
      <ExpenseForm  addExpense={addExpense}/>
      
    </div>
    {expenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} id={expense.id}  deleteExpense={deleteExpense}/>
    ))}
    
    
    </>
    )}

export default App
