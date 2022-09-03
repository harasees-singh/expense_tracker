import Item from './Item'
import './CSS/Expenses.css'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import Chart from './Chart/Chart'
function Expenses({expenses, FilterYear, FilterHandler}){
    const ExpenseFilterHandler = (selectedYear) => {
        FilterHandler(selectedYear);
    }
    let RenderList = <p>No item available</p>;
    if(expenses.length > 0) RenderList = expenses.map( (expense) => {
        return(
            <Item 
                name={expense.title} 
                price={expense.amount} 
                date={expense.date} 
                key={Math.random().toString()}
            />
        )
    });
    return (
        <Card className="expenses">
            <Chart expenses={expenses} />
            <ExpenseFilter onFilter={ExpenseFilterHandler} selected={FilterYear}/>
            {RenderList}
        </Card>
    )
}
export default Expenses;