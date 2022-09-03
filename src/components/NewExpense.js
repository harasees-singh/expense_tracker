import './CSS/NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from './Card'
import { useState } from 'react';
const NewExpense = ({onAddExpense}) => {
    const [fold, setFold] = useState(true);

    const addExpenseHandler = (expenseData) => {
        const ExpenseData = {
            ...expenseData,
            id: Math.random().toString(),
        }
        onAddExpense(ExpenseData);
    }
    if(fold){ 
        return(
            <Card className="NewExpense--container">
                <div className='NewExpense--actions'>
                    <button onClick={() => {setFold(false)}}>Add New Expense</button>
                </div>
            </Card>
        )
    }
    return(
        <Card className="NewExpense--container">
            <ExpenseForm onSubmit={addExpenseHandler} setFold={setFold}/>
        </Card>
    )
}
export default NewExpense;