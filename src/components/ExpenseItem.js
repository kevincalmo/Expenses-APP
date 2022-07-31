import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props,key) => {

    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    console.log(props);

    return (
        <>
        <Card key={key} className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
            
        </>
    )
}

export default ExpenseItem;