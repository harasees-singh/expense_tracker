import './CSS/ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value 
        // })
        // unsafe cuz userInput (previous state) may not be the latest one, as react stacks state updates
        // safe way :

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {...prevState, enteredAmount: event.target.value} 
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return({...prevState, enteredDate: event.target.value}) 
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSubmit(expenseData);
        
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:'',
        })
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className='ExpenseForm--controls'>
                <div className='ExpenseForm--control'>
                    <label>Title</label>
                    <input type="text" 
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle}
                    ></input>
                </div>
                <div className='ExpenseForm--control'>
                    <label>Amount</label>
                    <input type='number'  min="0.01" step="0.01" 
                        onChange={amountChangeHandler}
                        value={userInput.enteredAmount}
                    ></input>
                </div>
                <div className='ExpenseForm--control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' 
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                    ></input>
                </div>
            </div>
            <div className='ExpenseForm--buttons--container'>
                <div className='NewExpense--actions'>
                    <button onClick={ () => props.setFold(true) } >Cancel</button>
                </div>
                <div className='NewExpense--actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm;