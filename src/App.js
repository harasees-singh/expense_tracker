import './App.css';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'
import { useState } from 'react'
function App() {
    const ExpensesList = [
        {
            id:1,
            title:'a new beginning - book',
            amount:54,
            date: new Date(2021, 1, 1),
        },
        {
            id:2,
            title:'a storm of crows - book',
            amount:7888,
            date: new Date(2022, 5, 4),
        },
        {
            id:3,
            title:'gone girl - book',
            amount:345,
            date: new Date(2020, 6, 24)
        }
    ]
    const [expenses, setExpenses] = useState(ExpensesList)
    const [FilterYear, setFilterYear] = useState('2022');
    // const [expensesAfterFiltering, setExpensesAfterFiltering] = useState(expenses.filter( (expense) => expense.date.getFullYear().toString() === '2022'));

    const filteredList = expenses.filter( (expense) => {
        return expense.date.getFullYear().toString() == FilterYear;
    })

    const FilterHandler = (selectedYear) => {
        // const NewExpensesList = expenses.filter( (expense) => {
        //     return expense.date.getFullYear().toString() === selectedYear;
        // })
        setFilterYear(selectedYear);

        // setExpensesAfterFiltering(NewExpensesList);
    }

    const addExpense = (expenseData) => {
        setExpenses( (prevState) => {
            return(
                [expenseData, ...prevState]
            );
        })
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpense} />
			<Expenses expenses={filteredList} FilterHandler={FilterHandler} FilterYear={FilterYear} />
       	</div>
    );
}

export default App;
