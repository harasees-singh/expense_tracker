import './CSS/ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onFilter(event.target.value);
    }
    return(
        <div className='ExpenseFilter--container'>
            <div className='ExpenseFilter--control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;