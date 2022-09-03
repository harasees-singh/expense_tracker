import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
    const data = [
        { month: 'Jan', val: 0 },
        { month: 'Feb', val: 0 },
        { month: 'Mar', val: 0 },
        { month: 'Apr', val: 0 },
        { month: 'May', val: 0 },
        { month: 'Jun', val: 0 },
        { month: 'Jul', val: 0 },
        { month: 'Aug', val: 0 },
        { month: 'Sep', val: 0 },
        { month: 'Oct', val: 0 },
        { month: 'Nov', val: 0 },
        { month: 'Dec', val: 0 },
    ]
    let MaxVal = 0;
    for(const expense of props.expenses){
        data[expense.date.getMonth()].val += expense.amount;
        MaxVal = Math.max(MaxVal, data[expense.date.getMonth()].val);
    }
    return(
        <div className='chart'>
            {data.map( (d) => {
                return <ChartBar 
                    label={d.month} 
                    val={d.val}
                    maxVal={MaxVal}
                    key={d.month}
                />
            })}
        </div>
    )
}
export default Chart;